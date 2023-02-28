import React from "react";
import styled from "styled-components";
import Formulario from "@/components/Projeto/Formulario";
import ProjetoContext from "@/Context/ProjetoContext";
import DialogPreco from "@/components/Projeto/DialogPreco";


const StyledProjeto = styled.div`


.projeto {
     width: 100%;
     height: 100vh;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     background-color: #f6f1fd;
}
.title {
     width: 600px;
     display: flex;
     flex-direction: column;
     align-items: center;
     margin-bottom: 20px;
}
h1, h2 {
     margin: 5px 0;
}
.formulario {
     width: 500px;
     height: auto;
     margin-bottom: 40px;
}
`


export default function Projeto() {

     const [data, setData] = React.useState({
          modelo: "",
          ano: "",
          valor: "",
          isDialog: false
      })
     return (
          <ProjetoContext.Provider value={{ data, setData }}>

               <StyledProjeto>
                    <div className="projeto" color="projetoBG">
                         <div className="title">
                              <h1>Tabela Fipe</h1>
                              <h2>Consulte o valor de um veículo de forma gratuita</h2>

                         </div>
                         <div className="formulario">
                              <Formulario />
                         </div>

                         {data.isDialog ?
                              <div className="dialog">
                                   <DialogPreco/>
                              </div> : ""

                         }
                    </div>
               </StyledProjeto>
          </ProjetoContext.Provider>
     )
}