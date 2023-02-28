import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { fetchData } from '@/util/services';
import ProjetoContext from '@/Context/ProjetoContext';
import styled from 'styled-components';
import { alpha, styled as muiStyled } from '@mui/system';



const CustomTextField = muiStyled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    boxShadow: 'none',
    backgroundColor: 'white',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:before': {
      content: 'none'
    },
    '&:after': {
      borderBottom: 'none'
    },

    '&:hover': {
      backgroundColor: 'transparent',
      '&:after': {
        content: 'none'
      },
      '&:before': {
        content: 'none'
      },
      
    },
    '&.Mui-disabled': { 
      backgroundColor: 'transparent',

    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
      '&:before': {
        content: 'none'
      },
    },
  },
}));


const StyledForm = styled.div`
.formCard {
  width: 100%;
  height: fit-content;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 0;
  box-sizing: border-box;
  gap: 30px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 2px, rgba(0, 0, 0, 0.1) 0px 1px 2px;
  position: relative;
}
.autocompleteInput {
  width: 400px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
}
.btnSubmit {
  color: white;
}

@media (max-width: 450px) {
     .autocompleteInput {
          width: 250px;
     }
}


`

export default function Formulario() {

  const context = React.useContext(ProjetoContext)

  React.useEffect(() => {
    loadMarcas();
  }, [])

  const initialInputState = [true, false, false]
  const [disabled, setDisabled] = React.useState(initialInputState)
  const [submitEnabled, setSubmitEnabled] = React.useState(false);
  const [marcas, setMarcas] = React.useState([])
  const [modelos, setModelos] = React.useState([])
  const [anos, setAnos] = React.useState([])

  const [autocompleteMarcaValue, setAutocompleteMarcaValue] = React.useState(null)
  const [autocompleteModeloValue, setAutocompleteModeloValue] = React.useState(null)
  const [autocompleteAnoValue, setAutocompleteAnoValue] = React.useState(null)

  const [formData, setFormData] = React.useState([{
    codigoModelo: null,
    codigoAnos: null,
    ano: null
  }])

  React.useEffect(() => {

    const isAnyInputEmpty = autocompleteModeloValue === null || autocompleteAnoValue === null;

    if (isAnyInputEmpty) {
      setSubmitEnabled(false);

    }
    else {
      setSubmitEnabled(true);
    }
  }, [autocompleteModeloValue, autocompleteAnoValue])


  function handleInputChange(index, value) {


    if (index === 0 && value === undefined) {
      setDisabled(initialInputState);
    } else {
      const inputsEnabled = [...disabled];

      if (index === 1 && value === undefined) {
        inputsEnabled[index + 1] = false;
        setDisabled(inputsEnabled);

      } else {
        inputsEnabled[index + 1] = true;
        setDisabled(inputsEnabled);
      }
    }

  }

  const url = "https://parallelum.com.br/fipe/api/v1/carros/marcas"
  async function loadMarcas() {
    const result = await fetchData(url)
    setMarcas(result);
  }

  async function loadModelos(codigo) {
    if (!codigo) return
    const result = await fetchData(`${url}/${codigo}/modelos`)
    setFormData((prevState) => ({ ...prevState, marca: codigo }))
    setModelos(result.modelos);
  }
  async function loadAnos(codigoModelo, codigoAnos) {
    if (!codigoModelo || !codigoAnos) return
    const result = await fetchData(`${url}/${codigoModelo}/modelos/${codigoAnos}/anos`)
    setFormData((prevState) => ({ ...prevState, codigoAnos: codigoAnos }))
    setAnos(result)
  }
  async function getCarPrice(form) {
    if (!form) return
    const result = await fetchData(`${url}/${form.codigoModelo}/modelos/${form.codigoAnos}/anos/${form.ano}`)
    context.setData({ modelo: result.Modelo, ano: result.AnoModelo, valor: result.Valor, isDialog: true })
  }
  function closeDialog() {
    return context.setData({ isDialog: false })
  }





  return (

    <StyledForm>
      <div className='formCard'>

        <form>
          <Autocomplete
            options={marcas}
            value={autocompleteMarcaValue}
            id="autocomplete-marcas"
            getOptionLabel={option => option.nome}
            onChange={(event, value) => {
              setFormData(prevState => ({ ...prevState, codigoModelo: value?.codigo })),
                loadModelos(value?.codigo), setAutocompleteMarcaValue(value), setAutocompleteModeloValue(null), setAutocompleteAnoValue(null), closeDialog(),
                handleInputChange(0, value?.codigo)
            }}
            className="autocompleteInput"
            noOptionsText={"Nenhum resultado encontrado"}
            renderInput={(params) => <CustomTextField variant="filled" {...params} label="Marca" />}
          />
          <Autocomplete
            options={modelos}
            value={autocompleteModeloValue}
            disabled={!disabled[1]}
            id="autocomplete-modelos"
            getOptionLabel={option => option.nome}
            onChange={(event, value) => {
              setFormData(prevState => ({ ...prevState, codigoAnos: value?.codigo })),
                loadAnos(formData.codigoModelo, value?.codigo), setAutocompleteModeloValue(value), setAutocompleteAnoValue(null), closeDialog(),
                handleInputChange(1, value?.codigo)
            }}
            className="autocompleteInput"
            noOptionsText={"Nenhum resultado encontrado"}
            renderInput={(params) => <CustomTextField variant="filled" {...params} label="Modelo" />}
          />
          {disabled[2] ? <Autocomplete
            options={anos}
            value={autocompleteAnoValue}
            disabled={!disabled[2]}
            id="autocomplete-anos"
            getOptionLabel={option => option.nome}
            onChange={(event, value) => {
              setFormData(prevState => ({ ...prevState, ano: value?.codigo })),
                setAutocompleteAnoValue(value), closeDialog(),
                handleInputChange(2, value?.codigo),
                setSubmitEnabled(true);

            }}
            className="autocompleteInput"
            noOptionsText={"Nenhum resultado encontrado"}
            renderInput={(params) => <CustomTextField variant="filled" {...params} label="Ano"  />}
          /> : ""}
          <Button sx={{ width: 200 }} disabled={!submitEnabled} size="medium" color="submitButton" className='btnSubmit' variant="contained" type="button" onClick={() => getCarPrice(formData)}>
            Consultar preço
          </Button>

        </form>




      </div>

    </StyledForm >

  );
}
