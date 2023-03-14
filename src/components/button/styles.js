import styled from 'styled-components'


export const Content = styled.div`


    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        color: white;
        text-decoration: none;
    }

    h4 {
        @media (max-width: 1000px) {
            font-size: .8rem;
        }
    }

    button {
        font-size: 1.3rem;
        padding: 1rem 2rem;
        border-radius: 2px;
        background: linear-gradient(0deg, ${props => props.theme.secondary}, ${props => props.theme.third});
        box-shadow: 0px 0px 8px ${props => props.theme.secondary};
        transition: all 200ms ease-in-out;
        color: white;

        @media (max-width: 1000px) {
            font-size: .8rem;
            padding: .54rem .98rem;
        }

        &:hover {
        transform: scale(1.03);
        }
    }
`

export const Content2 = styled.div`

    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        color: white;
        text-decoration: none;
    }

    h4 {
        @media (max-width: 1000px) {
            font-size: .7rem;
        }
    }

    button {
        font-size: 1.3rem;
        padding: 1rem 2rem;
        border-radius: 2px;
        background: linear-gradient(0deg, #573333, #291919);
        box-shadow: 0px 0px 10px ${props => props.theme.primary};
        transition: all 200ms ease-in-out;
        color: white;

        @media (max-width: 1000px) {
            font-size: .8rem;
            padding: .54rem .98rem;
        }

    &:hover {
        transform: scale(1.03);
    }
    }
`
