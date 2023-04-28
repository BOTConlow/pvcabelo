import styled from 'styled-components'

export const Response = styled.div`

    padding: 1rem 0;

`

export const Showanswer = styled.div`

    padding-top: .6rem;
    margin-left: 5rem;

    button {
        color: #000;
        display: flex;
        border: 0;
        background: transparent;
    }
`

export const ButtonOpenDesc = styled.button`
    color: #000;
    display: flex;
    border: 0;
    background: transparent;
`


export const Answer = styled.div`

    padding-top: 1.6rem;
    padding-left: 5rem;
    font-size: .9rem;
    border-left: 1px solid #000;

    @media (max-width: 1000px) {
            padding-left: 2.7rem;
        }

`

export const SecondAnswer = styled.div`

    padding-top: 1.6rem;
    padding-left: 5rem;
    font-size: .9rem;
    border-left: 1px solid #000;

    @media (max-width: 1000px) {
            padding-left: 2.7rem;
        }
`






export const ComentariosContainer = styled.div`

    padding: 1.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const ComentariosContent = styled.div`

    width: 100%;
    padding: 2rem 1.5rem;
    border-radius: 20px;
    background: white;

    @media (max-width: 1000px) {
            width: 86%;
        }

`

export const ComentariosSession = styled.div`

    width: 100%;
    overflow: auto;
    height: auto;
    margin: 2rem 0;
    padding-right: 1rem;

`


export const Title = styled.div`

    display: flex;
    align-items: center;
    gap: .8rem;

    h2 {
        font-size: 1.5rem;
        font-weight: bold;

        @media (max-width: 1000px) {
            font-size: 1.2rem;
        }
    }

    h1 {
        font-size: 2.2rem;
        margin-bottom: 2.5rem;

        @media (max-width: 1000px) {
            font-size: 1.4rem;
            text-align: center;
        }
        
    }
    

`
export const SetComent = styled.footer`

    width: 100%;
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

    textarea {
        padding: 1rem;
        height: 6rem;
        background: #f5f5f4;

        border-radius: 8px;
        border: 0;
        resize: none;
        transition: all 200ms ease;
    }
`

export const SetButton = styled.button`

    width: 5.75rem;
    height: 49px;
    margin: 1rem 0;
    font-size: 1.1rem;
    background: linear-gradient(0deg, #573333, #291919);
    border-radius: 2px;
    box-shadow: 0px 0px 2px ${props => props.theme.secondary};
    transition: all 200ms ease-in-out;
    color: white;
    cursor: pointer;

    &:hover {
        transform: scale(1.03);
    }

`

export const SetFeedback = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.3rem;
    padding: 1.5rem 0;
`

export const Feedback = styled.div`

    display: flex;
    align-items: center;
    max-width: 100%;

    h4 {
        width: 13ch;
    }

`


export const RemoveButton = styled.button`

    background: transparent;
    transition: color 200ms ease;

    &:hover {
        color: red;
    }

`

export const MoreAnswer = styled.button`
    margin-top: 1rem;
    color: #666666;
    display: flex;
    align-items: center;
    gap: .8rem;
    background: transparent;
    font-weight: bold;
    font-size: 1rem;

    &:hover {
        text-decoration: underline;
    }
`




