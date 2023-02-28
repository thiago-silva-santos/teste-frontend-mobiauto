import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import { Link } from "@mui/material";

const StyledHome = styled.div`

.homePageContainer {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
}

.card {
     display: flex;
     flex-direction: column;
     width: 350px;
     height: 350px;
     background-color: aliceblue;
     justify-content: center;
     align-items: center;
     gap: 30px;
     border-radius: 10px;
}
.actions {
     display: flex;
     width: 100%;
     justify-content: space-evenly;
     
}


`

export default function Home() {

     return (
          <StyledHome>
               <div className="homePageContainer">

                    <div className="card">
                         <h1>Teste Front-end</h1>
                         <div className="actions">
                              <Link href="/exercicios">
                                   <Button variant="contained" color="secondary">Exercícios</Button>
                              </Link>
                              <Link href="/projeto">
                                   <Button variant="contained" color="secondary">Projeto</Button>
                              </Link>
                         </div>
                    </div>
               </div>
          </StyledHome>
     )
}