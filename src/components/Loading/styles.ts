import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

export const LoadingContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;

    svg {
        animation: ${rotateAnimation} 1.3s linear infinite;
    }
`