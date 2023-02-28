import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import { useState } from "react";



const StyledExercicio2 = styled.div`

.container {
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
align-items: center;
width: 100%;
height: auto;
background: white;
padding: 50px 0;
border-bottom: solid 2px black;

}

.title {
     display: flex;
     width: 940px;
     flex-direction: column;
     text-align: center;

}
.actions {
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     width: 940px;
}


`


export default function Exercicio2() {

     const [objState, setObjState] = useState({ name: "Marcos", country: "Brasil", age: 22 });
     //React.useEffect(() => console.log(objState), [objState]);

     const objeto1 = { name: "Marcos", country: "Japão", age: 25, altura: 1.80 }
     const objeto2 = { name: "Camiseta Polo", price: "Japão", amount: 25 }
     const objeto3 = {
          price: 89.9, amount: 15, description:
               "camiseta 100% algodão"
     }
     const objeto4 = {
          price: 89.9, amount: 15, description:
               "camiseta 100% algodão",
          age: 50
     }


     const updateObject = (obj, update) => {
          let updatedObj = {}
          for (let item in obj) {
               updatedObj[item] = obj[item]
          }

          for (let item in update) {

               if (obj.hasOwnProperty(item)) {
                    updatedObj[item] = update[item]
               }
          }

          return updatedObj
     }


     return (

          <StyledExercicio2>
               <div className="container">

                    <div className="title">
                         <h1>Exercício 2</h1>
                         <p>Somente são atualizados os dados que o objeto do primeiro
                              parâmetro possuir.</p>

                    </div>

                    <span>
                         <span>{JSON.stringify(objState)}</span>

                    </span>
                    <div className="actions">
                         <Button variant="text" onClick={() => setObjState(updateObject(objState, objeto1))}>{JSON.stringify(objeto1)}</Button>
                         <Button variant="text" onClick={() => setObjState(updateObject(objState, objeto2))}>{JSON.stringify(objeto2)}</Button>
                         <Button variant="text" onClick={() => setObjState(updateObject(objState, objeto3))}>{JSON.stringify(objeto3)}</Button>
                         <Button variant="text" onClick={() => setObjState(updateObject(objState, objeto4))}>{JSON.stringify(objeto4)}</Button>

                    </div>
               </div>
          </StyledExercicio2>
     )
}