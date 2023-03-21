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
        background: linear-gradient(0deg, #5eeb34, #49b828);
        box-shadow: 0px 0px 10px #5eeb34;
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
        background: linear-gradient(0deg, #5eeb34, #49b828);
        box-shadow: 0px 0px 10px #5eeb34;
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
