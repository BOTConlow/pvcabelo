import styled from 'styled-components'

export const DermatoContainer = styled.div`

    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
            margin: 0;
            padding: 1rem;
        }
`

export const Texts = styled.div`

    display: flex;
    justify-content: space-between;

    @media (max-width: 1000px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

    h1 {
        font-size: 3.6rem;
        margin: 2rem 0;

        @media (max-width: 1000px) {
            font-size: 3rem;
            text-align: center;
            margin: 0;
            margin-bottom: 2rem;
        }
    }

    p {
        line-height: 140%;
        font-size: 1.2rem;
        text-align: justify;
        margin-bottom: 1.5rem;
        padding-left: 1rem;

        @media (max-width: 1000px) {
            font-size: 1rem;
            padding-left: 0;
        }
    }

    img {
        width: 28rem;
        height: 38rem;
        transition: 200ms ease;

        @media (max-width: 1000px) {
            width: 20rem;
            height: 30rem;
        }
    }

    img:hover {
        transform: scale(1.03);
    }
`

export const Promocao = styled.div`

    text-align: center;
    border-radius: 10px;
    padding: 3rem;
    color: white;
    background: radial-gradient(#573333, #291919);
    margin-bottom: 1rem;
    position: relative;
    z-index: 10;

    @media (max-width: 1000px) {
        padding: 2rem;
        }

    h1 {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 3.5rem;
        margin: 2rem 0;
        text-decoration: line-through;

        @media (max-width: 1000px) {
            font-size: 1.9rem;
        }
        
    }

    h2 {
        margin-top: 2rem;

        @media (max-width: 1000px) {
            font-size: 1rem;
        }
    }

    p {
        font-weight: bold;
        font-size: 2.7rem;

        @media (max-width: 1000px) {
            font-size: 1.7rem;
        }
    }

    button {
        font-size: 1.7rem;
        margin-top: 3rem;

        @media (max-width: 1000px) {
            font-size: 1rem;
        }
    }

`

