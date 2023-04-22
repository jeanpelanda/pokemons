import styled from "styled-components";

export const CardContainer = styled.li`
    border: 1px solid #FFF;
    border-radius: 12px;
    color: #FFF;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    text-align: center;
    padding: 2rem 1rem 1rem;
    width: 12rem;
        
    .hp {
        position: absolute;
        right: 1rem;
        top: 1rem;
    }

    .img {
        position: relative;

        img {
            display: block;
            height: 6.5rem;
            margin: 0 auto;
            width: 6.5rem;
        }

        &::after {
            background-image: linear-gradient(rgba(63,60,81,.2), transparent);
            border-radius: 50%;
            content: "";
            height: 8rem;
            left: 50%;
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            width: 8rem;
            z-index: -1;
        }
    }

    .name {
        font-size: 1.25rem;
        text-transform: capitalize;
    }

    .stats {
        display: flex;
        justify-content: space-around;

        p {
            color: #9b9b9b;
            display: flex;
            font-size: .875rem;
            flex-direction: column;
            line-height: 1.5;

            strong {
                color: #FFF;
                font-size: 1rem;
            }
        }
    }
`