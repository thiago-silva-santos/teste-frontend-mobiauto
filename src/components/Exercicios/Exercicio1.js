import React from "react";
import styled from "styled-components";
import TextField from '@mui/material/TextField';



const StyledExercicio1 = styled.div`

.containerExercicio1 {
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
align-items: center;
width: 100%;
height: 350px;
background: white;
padding: 50px 0;
border-bottom: solid 1px gray;

}

.titleExercicio1 {
     display: flex;
     width: 940px;
     flex-direction: column;
     text-align: center;

}


@media (max-width: 450px) {
     .titleExercicio1 {
          width: 250px;
     }

}

`


export default function Exercicio1() {

     const [inputValue, setInputValue] = React.useState("");

     const maskedNumber = inputValue?.replace(/\w(?=\w{4})/g, "#")

     return (

          <StyledExercicio1>
               <div className="containerExercicio1">
                    <div className="titleExercicio1">
                         <h1>Exercício 1</h1>
                         <p>{`Escrever uma função maskify, que altera todos, exceto os últimos quatro caracteres, para "#".`}</p>

                    </div>


                    <span>{maskedNumber}</span>
                    <TextField
                         id="outlined-multiline-flexible"
                         label="Insira um número"
                         onChange={(e) => setInputValue(e.target.value)} value={maskedNumber}
                         inputProps={{ maxLength: 16 }}
                    />

               </div>
          </StyledExercicio1>
     )
}