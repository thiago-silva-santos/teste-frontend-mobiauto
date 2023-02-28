import React from "react";
import styled from "styled-components";
import TextField from '@mui/material/TextField';




const StyledExercicio4 = styled.div`

.containerExercicio4 {
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
align-items: center;
width: 100%;
height: auto;
background: white;
padding: 50px 0;
}

.titleExercicio4 {
     display: flex;
     width: 940px;
     flex-direction: column;
     text-align: center;

}
@media (max-width: 450px) {
     .titleExercicio4 {
          width: 250px;
     }
}

`


export default function Exercicio4() {

    const [string, setString] = React.useState("");

    function checkIfTheFirstLetterIsUppercase(word) {

        if (!word) return false
        const firstLetter = word.charAt(0);

        const result = firstLetter === firstLetter.toUpperCase()

        return result;
    }


    const inputChange = (event) => {
        const newValue = event.target.value.replace(/[^A-Za-z]/gi, '');
        setString(newValue);

    };
    return (

        <StyledExercicio4>
            <div className="containerExercicio4">

                <div className="titleExercicio4">
                    <h1>Exercício 4</h1>
                    <p>Faça uma função que verifica se a primeira letra de uma string é maiúscula, retornando true ou false.</p>
                </div>

                <span> Possui letra maiúscula? {string.length <= 0 ? "" : checkIfTheFirstLetterIsUppercase(string) ? <strong>TRUE</strong> : <strong>FALSE</strong>}</span>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Digite uma palavra"
                    value={string}
                    onChange={inputChange}
                />
            </div>
        </StyledExercicio4>
    )
}