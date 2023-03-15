import styled from 'styled-components'


export const BeneficiosContainer = styled.div`

    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 1000px) {
        padding: 1rem;
    }


    h1 {
        font-size: 2.8rem;
        margin-bottom: 5rem;

        @media (max-width: 1000px) {
            font-size: 1.6rem;
            margin-bottom: 2rem;
        }
    }
`

export const BeneficiosContent = styled.div`

    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (max-width: 1000px) {
            gap: 2rem;
        }

    button {
        font-size: 1.9rem;

        @media (max-width: 1000px) {
            font-size: .8rem;
        }
    }

`
export const Background = styled.div`

    border-radius: 25px;
    background: ${props => props.theme.secondary};

        .toLeft {
            
            &:hover {
                transform:translateX(-4rem) !important;

                @media (max-width: 1000px) {

                transform:translateX(-1rem) !important;
                }
            }
        }

`

export const Box = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    border-radius: 25px;
    background: linear-gradient(#291919 0%, #402626 40%, #573333 100%);
    transition: 400ms ease;
    cursor: pointer;

    @media (max-width: 1000px) {
            flex-direction: column;
        }


    p {
        font-weight: bold;
        color: white;
        max-width: 50rem;
    }

    &:hover {
        transform:translateX(4rem);

        @media (max-width: 1000px) {

            transform:translateX(1rem);
        }

    }

`

export const Title = styled.div`

    text-align: left;

    h2 {
        margin-bottom: 1rem;
        color: ${props => props.theme.secondary};

    }

`


export const Content = styled.div`

    overflow: hidden;
    cursor: pointer;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    border: 3.5px solid ${props => props.theme.secondary};

    img {
        transition: 400ms all;
        width: 200px;
        height: 200px;
        object-fit: cover;

        &:hover {
            transform: scale(1.1);
        }
    }

`


