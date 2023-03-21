import styled from 'styled-components'
import { keyframes} from "styled-components"

export const HeaderContainer = styled.header`

    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;

    @media (max-width: 1000px) {

        justify-content: space-around;
        gap: 5rem;
        height: 7rem;

    }

`

export const ButtonContent = styled.button`

        background: transparent;
        display: none;


        @media (max-width: 1000px) {
            display: flex;
        }

`

export const Bar = styled.div`

    display: flex;
    position: fixed;
    right: .6rem;
    top: .6rem;
    gap: .3rem;
    animation: openAnim 200ms linear;


    @keyframes openAnim {
        0% {
            right: -200px;
        }
        100% {
            right: 0;
        }
    }
`


export const BarContent = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background: #fadabb;
    padding: .7rem;
    border-radius: 8px;
    z-index: 99;
    
    button {
        color: #2b2b2b;
        font-weight: bold;
        background: transparent;
    }

`



export const HeaderContents = styled.div`

    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 1000px) {
            display: none;
        }

    .linkButton {
        all: unset;
        cursor: pointer;
        text-decoration: none;
        color: #fff;
        font-size: 1rem;

        &:hover {
            transition: 200ms ease;
            color: ${props => props.theme.secondary};
        }
    }
    
`

export const Contact = styled.button`

    background: transparent;
    cursor: pointer;
    color: #fff;
    border: 1px solid ${props => props.theme.secondary};
    border-radius: 20px;
    padding: .5rem 1rem;

    @media (max-width: 1000px) {
        border: 1px solid ${props => props.theme.primary};
        }

    &:hover {
        transition: 200ms ease;
        background: ${props => props.theme.secondary};
        color: white !important;

        @media (max-width: 1000px) {
            background: ${props => props.theme.primary};
        }
    }

`

export const Instagram = styled.a`

        color: ${props => props.theme.secondary};

        &:hover {
            color: white;
        }

`