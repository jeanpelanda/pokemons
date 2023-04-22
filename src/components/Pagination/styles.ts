import styled from "styled-components";

export const PaginationContainer = styled.ul`
    display: flex;
    gap: 1rem;
    justify-content: center;
    list-style: none;

    li {
        
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
            width: 2rem;

            &:hover, &.active {
                background-color: #FFF;
                color: #15141b;
            }

            &:disabled {
                cursor: not-allowed;
                opacity: .5;
            }
        }
    }
`