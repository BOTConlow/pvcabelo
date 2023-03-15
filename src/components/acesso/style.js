import styled from 'styled-components'
import { keyframes} from "styled-components"

export const AcessoContainer = styled.div`

    display: flex;
    align-items: center;
    margin: 2rem 0;
    gap: 5rem;
    padding: 0 1rem;

    @media (max-width: 1000px) {
            flex-direction: column;
        }

`

const rotate = keyframes`

    from {
      transform: translateY(-8px);
    }

    to {
      transform: translateY(15px);
    }

  `

export const Image = styled.div`

    animation: ${rotate} 2.7s infinite alternate;

    img {
        @media (max-width: 1000px) {
            width: 15rem;
        }
    }

`


export const Texts = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 45rem;

    @media (max-width: 1000px) {
            align-items: center;
        }

    h1 {
        color: #fff;
        text-shadow: 0px 0px 2.5px #fff;
        letter-spacing: 2px;
        font-style: italic;
        margin-bottom: 2rem;

        @media (max-width: 1000px) {
            text-align: center;
            font-size: 1.5rem;
        }
    }

    p {
        line-height: 140%;
        font-size: 1.2rem;
        margin-bottom: 1rem;
        color: white;

        @media (max-width: 1000px) {
            font-size: 1rem;
        }
    }

    button {
        margin-top: 2rem;
    }

`




