import styled from 'styled-components'

export const GrupoContainer = styled.div`

    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
        padding: 1rem;
    }


    button {
        margin-top: 1.5rem;
        font-size: 1.5rem;

        @media (max-width: 1000px) {
            font-size: .8rem;
        }
    }
`

export const Content = styled.div`

    display: flex;
    justify-content: center;
    color: white;
    text-align: left;
    gap: 5rem;

    @media (max-width: 1000px) {
            flex-direction: column;
            align-items: center;
            gap: 0;
        }

    h1 {
        font-style: italic;
        font-size: 2.4rem;
        max-width: 29rem;
        margin-bottom: 2.5rem;
        text-shadow: 0px 0px 1.5px #fff;

        @media (max-width: 1000px) {
            font-size: 1.9rem;
        }
    }

    img {
        @media (max-width: 1000px) {
            width: 20rem;
            margin-bottom: 2rem;
            
        }
    }

`

export const Text = styled.div`

    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 3rem;
    max-width: 29rem;

    h1 {

        margin-bottom: .5rem;
        font-size: 1.6rem;
    }

`


