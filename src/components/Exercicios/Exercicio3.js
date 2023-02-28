import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import { TextareaAutosize } from "@mui/material";
import { fetchData } from "@/util/services";


const StyledExercicio3 = styled.div`

.containerExercicio3 {
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
align-items: center;
width: 100%;
height: auto;
background-color: white;
padding: 50px 0;
border-bottom: solid 1px gray;

}
.textArea {

min-width: 900px;
min-height: 500px;
overflow: 'auto';
}

.titleExercicio3 {
     display: flex;
     width: 940px;
     flex-direction: column;
     text-align: center;

}
@media (max-width: 450px) {
     .titleExercicio3 {
          width: 250px;
     }
     .textArea {
        max-width: 300px;
        min-width: 300px;
        min-height: 500px;
        font-size: 10px;
     }
}

`


export default function Exercicio3() {

    const [characters, setCharacters] = React.useState([]);

    function filtrarArray(arr, names) {
        const filtered = []
        names.forEach(name => {
            filtered.push(...arr.filter(val => val.name.includes(name)))
        })
        const items = filtered.map((item) => {
            return {
                nome: item.name,
                genero: item.gender,
                avatar: item.image,
                especie: item.species
            }
        })
        return items
    }
    async function getRickAndMortyData() {

        const result = await fetchData("https://rickandmortyapi.com/api/character")

        const namesAllowed = ["Rick Sanchez", "Morty Smith", "Summer Smith", "Beth Smith", "Jerry Smith"]
        let data = filtrarArray(result.results, namesAllowed)
        setCharacters(data)

    }

    return (

        <StyledExercicio3>
            <div className="containerExercicio3">
                <div className="titleExercicio3">
                    <h1>Exercício 3</h1>
                    <p>{`Faça uma chamada para a api "rick and morty" e resgate informações dos seguintes personagens: Rick
                        Sanchez, Morty Smith, Summer Smith, Beth Smith, Jerry Smith.`}</p>
                </div>

                <TextareaAutosize className="textArea" value={JSON.stringify(characters, null, 2)}></TextareaAutosize>
                <Button variant="text" onClick={() => getRickAndMortyData()}>Clique para obter dados da API</Button>
            </div>
        </StyledExercicio3>
    )
}