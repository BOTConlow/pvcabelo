import styled from 'styled-components'

export const ContentContainer = styled.div`

    box-shadow: 0px 0px 15px 11px ${props => props.theme.primary};
    border-radius: 17px;
    margin: 2rem 0%;
    width: 40rem;

    @media (max-width: 1000px) {
            max-width: 100%;
            padding: 0;
        }


`
export const Title = styled.div`

    background: linear-gradient(#291919 0%, #402626 40%, #573333 100%);
    padding: 2rem;
    border-radius: 15px 15px 0 0;
    text-align: center;

    h1 {
        font-size: 3rem;
        text-shadow: 0px 0px 2.3px #fff;
        color: white;

        @media (max-width: 1000px) {
            font-size: 1.5rem;
        }
    }

`
export const Content = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2.5rem 0;
    border-radius: 0 0 15px 15px;
    background: linear-gradient(10deg, #d8e2ec, #fdfdfe);

    @media (max-width: 1000px) {
            padding: 2rem 0;
        }

    h1 {
        margin-bottom: 1rem;
        font-weight: bold;
        font-size: 2rem;
        text-align: center;

        @media (max-width: 1000px) {
            font-size: 1.5rem;
        }
    }


`


export const Texts = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-bottom: 1px solid #ddd;

    h1 {
        font-size: 1.5rem;
        margin-bottom: 1rem;

        @media (max-width: 1000px) {
            font-size: 1rem;
        }
    }

    p {
        font-size: 1.3rem;
        text-decoration: line-through;
        margin-bottom: 1rem;

        @media (max-width: 1000px) {
            font-size: 1rem;
        }
    }

    svg {
        margin-bottom: 1rem;
    }
`

export const Price = styled.div`
    
    margin-top: 1rem;
    text-align: center;

    h4 {
        color: #000;
    }

    h1 {
        margin: 1rem;
        font-size: 5rem;
        text-shadow: 0px 0px 3px #c9ae95;
        color: #c9ae95;

        @media (max-width: 1000px) {
            font-size: 4rem;
        }
    }

    p {
        font-size: 1.5rem;

        @media (max-width: 1000px) {
            font-size: 1.3rem; 
        }
        
    }

    button {
        
        margin-top: .5rem;

    }
`

export const Content2 = styled.div`

    h4 {
            color: #000;
        }
`
