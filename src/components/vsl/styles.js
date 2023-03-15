import styled from 'styled-components'

export const VslContent = styled.div`

    width: 100%;
    height: 690px;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
        height: 590px;
        padding-top: 0;
        padding: 1rem;
    }
    
`

export const Headline = styled.div`

    padding: 0 1rem;

    h1 {
        text-shadow: 1px 1.3px 2px #c9ae95;
        color: white;
        text-align: center;
        font-size: 2.5rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        @media (max-width: 1000px) {
            font-size: 1.2rem;
        }
    }
`

export const Content = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    margin-bottom: 5rem;

    @media (max-width: 1000px) {
            flex-direction: column;
            margin-bottom: 1rem;
        }

`

export const VslStyle = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 1000px) {
        margin-bottom: 1.5rem;
    }

    img {
        border-radius: 6px;
        box-shadow: 20px 20px 0px 0px ${props => props.theme.secondary};
        width: 640px;
        height: 450px;

        @media (max-width: 1000px) {
            width: 290px;
            height: 290px;
        }
    }

    p {
        margin-top: .5rem;

        @media (max-width: 1000px) {
            font-size: .6rem;
            color: white;
        }
    }
`


