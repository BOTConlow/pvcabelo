import styled from 'styled-components'

export const DepoimentosContainer = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 6rem;
    position: relative;
    margin: 3rem 0;
    color: white;

    @media (max-width: 1000px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0 0 3rem;
            gap: 0;
            padding: 1rem;
        }

`

export const Title = styled.div`

    max-width: 33rem;

    h1 {
        font-size: 2.4rem;
        margin-bottom: 2rem;
        padding-left: 1.5rem;

        @media (max-width: 1000px) {
            font-size: 1.5rem;
            padding: 0;
        }
    }

    p {
        line-height: 140%;
        font-size: 1.2rem;
        margin-bottom: 2.3rem;
        padding-left: 1.5rem;

        @media (max-width: 1000px) {
            font-size: 1rem;
            padding: 0;
            margin-bottom: 1rem;
        }
    }
    
    button  {
        margin-left: .5rem;
        font-size: 1.2rem;

        @media (max-width: 1000px) {
            font-size: .8rem;
        }
    }

    &::before {
        content: '';
        position: absolute;
        width: 2.2px;
        height: 17.2rem;
        top: 8rem;
        background: ${props => props.theme.secondary};

        @media (max-width: 1000px) {
            top: .47rem;
            height: 15.1rem;
            left: -2rem;
        }
    }

`

export const Images = styled.div`

    width: 22.8rem;
    height: 38.2rem;
    border-radius: 10px;
    box-shadow: 30px 30px 0px 0px ${props => props.theme.secondary};

    @media (max-width: 1000px) {
            width: 291px;
            height: 488px;
            margin-top: 2rem;
        }

    img {
        border-radius: 10px;
        height: 100%;
        width: 100%;
        object-fit: cover;

        @media (max-width: 1000px) {
            width: 100%;
            height: 100%;
        }
    }
`

