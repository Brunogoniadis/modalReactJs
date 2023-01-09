import styled from "styled-components";

export const Backdrop = styled.div`
    

    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    position: fixed;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.2);

    display: flex;
    color: aliceblue;

    .modal{
        background-color: #e1e1e1 ;
        color: #1e1e1e;
        padding: 2rem;
        border-radius: 0.75rem;
        max-width: 75vw;
        max-height: 90vw;
    
        position: absolute;
    }
    .modalClose{
        width: 15px;
        height: 15px;
        background-color: black;
        position: relative;
        left: 50%;
        bottom: 35%;
        cursor: pointer;
    }
`