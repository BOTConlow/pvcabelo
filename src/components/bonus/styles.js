import styled from 'styled-components'

export const BonusContainer = styled.div`

    margin-top: 2rem;

    @media (max-width: 1000px) {
            padding: 0 1rem;
        }

`

export const Title = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 5rem;

    @media (max-width: 1000px) {
            margin-bottom: 2.5rem;
        }

    h1 {
        margin-bottom: 2.5rem;
        padding: .5rem 1rem;
        color: white;
        background: linear-gradient(#291919 0%, #402626 40%, #573333 100%);
        border-radius: 2px;
        font-size: 3rem;
        transition: 200ms ease;

        @media (max-width: 1000px) {
            font-size: 1.9rem;
        }
    }

    h1:hover {
        transform: scale(1.03);
    }
    
    p {
        font-weight: bold;
        font-size: 2.2rem;

        @media (max-width: 1000px) {
            font-size: 1.3rem;
        }
    }
`

export const Content = styled.div`

    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (max-width: 1000px) {
            gap: 2rem;
        }

`


export const Box = styled.div`

    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    @media (max-width: 1000px) {
            flex-direction: column;
        }

`

export const BoxContent = styled.div`

    width: 34rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 200ms ease;
    padding: 1.8rem;
    border-radius: 20px;
    background: radial-gradient(#573333, #291919);

    @media (max-width: 1000px) {
            flex-direction: column;
            width: 17rem;
            gap: 1.5rem;
            text-align: center;
        }

    &:hover {
        transform: scale(1.02);
    }

    h1 {
        font-style: italic;
        font-size: 1.5rem;
        color: #c9ae95;
        margin-bottom: .9rem;
    }

    p {
        color: white;

    }

`
