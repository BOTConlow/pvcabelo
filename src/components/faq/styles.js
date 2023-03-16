import styled from 'styled-components'
import { keyframes} from "styled-components"

export const Content = styled.div`

    width: 100%;
`

export const Headline = styled.div`

    margin: 1rem 0 3rem;
    font-size: 1.5rem;
    text-align: center;
    color: white;

    @media (max-width: 1000px) {
            font-size: 1.2rem;
        }

`

export const FaqContainer = styled.div`

    width: 100%;
    flex-direction: column;
    cursor: pointer;    

`

export const Title = styled.div`

    background: linear-gradient(0deg, ${props => props.theme.secondary}, ${props => props.theme.third});
    border-radius: 2px;
    padding: 1rem;
    margin-bottom: 1.5rem;
    font-size: .7rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    @media (max-width: 1000px) {
            font-size: .5rem;
        }


    button {
        padding: 0 1rem;
        color: white;
        cursor: pointer;
        background: transparent;
        border: 0;
    }

`

const openAnimation = keyframes`

        0% {
            opacity: 0;
            height: 0;
        }

        100% {
            opacity: 1;
            height: 5.625rem;
        }

  `

export const Desc = styled.div`

    animation: ${openAnimation} 200ms linear normal;
    color: white;
    font-size: 1.5rem;
    height: 5.7rem; 

    @media (max-width: 1000px) {
        height: 13rem; 

        }

`