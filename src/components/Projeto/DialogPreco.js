import React from "react";
import styled from "styled-components";
import ProjetoContext from "@/Context/ProjetoContext";

const StyledDialogPreco = styled.div`
.dialogContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 940px;
    height: 200px;
    background-color: #cbf0e9;
    gap: 10px;
}
.price {
    font-size: 22px;
    font-weight: bold;
    color: white;
    min-width: 150px;
    padding: 0 15px;
    background-color: #23aa93;
    border-radius: 50px;
    text-align: center;
}
h2 {
    color: #444444;
}
.description {
    font-size: 12px;
    color: #707070;
}
`

export default function DialogPreco() {
    const context = React.useContext(ProjetoContext)

    return (
        <StyledDialogPreco>
        <div className="dialogContainer">
            <h2>{`Tabela Fipe: Preço ${context.data?.modelo} ${context.data?.ano}`}</h2>
                <span className="price">{context.data?.valor}</span>
                <span className="description">Este é o preço de compra do veículo</span>
        </div>
        </StyledDialogPreco>
    )
}