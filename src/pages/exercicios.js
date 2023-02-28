import React from "react";
import styled from "styled-components";
import Exercicio1 from "@/components/Exercicios/Exercicio1";
import Exercicio2 from "@/components/Exercicios/Exercicio2";
import Exercicio3 from "@/components/Exercicios/Exercicio3";
import Exercicio4 from "@/components/Exercicios/Exercicio4";




const StyledExerciciosPage = styled.div`

.exerciciosPage {
     display: flex;
     flex-direction: column;
     width: 100%;
     min-height: 100vh;
     position: relative;
     background-color: aliceblue;
     margin-bottom: 100px;
}
.exercicioBox {
     width: 100%;
     
}
h1 {
     text-align: center;
}
`

export default function Exercicios() {

     return (

          <StyledExerciciosPage>
               <h1>Exercícios do Teste para Desenvolvedor Front-end</h1>
               <div className="exerciciosPage">

               <section className="exercicioBox">
                    <Exercicio1/>
               </section>
               <section className="exercicioBox">
                    <Exercicio2/>
               </section>
               <section className="exercicioBox">
                    <Exercicio3/>
               </section>
               <section className="exercicioBox">
                    <Exercicio4/>
               </section>
               


               </div>
          </StyledExerciciosPage>
     )
}