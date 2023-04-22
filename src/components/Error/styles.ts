import styled from "styled-components";

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
        color: #FFF;
        margin-bottom: 1rem;
    }

    button {
        align-items: center;
        background-color: transparent;
        border-radius: 4px;
        border: 1px solid #FFF;
        color: #FFF;
        cursor: pointer;
        display: flex;
        height: 2rem;
        justify-content: center;
        transition: all .2s;

        &:hover {
            background-color: #FFF;
            color: #15141b;
        }
    }
`