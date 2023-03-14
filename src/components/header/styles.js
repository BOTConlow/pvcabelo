import styled from 'styled-components'

export const HeaderContainer = styled.header`

    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
`

export const ButtonContent = styled.header`

        display: none;

        @media (max-width: 1000px) {
            display: flex;
        }

`


export const HeaderContents = styled.div`

    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 1000px) {
            display: none;
        }

    .linkButton {
        all: unset;
        cursor: pointer;
        text-decoration: none;
        color: #fff;
        font-size: 1rem;

        &:hover {
            transition: 200ms ease;
            color: ${props => props.theme.secondary};
        }
    }
    
`

export const Contact = styled.button`

    background: transparent;
    cursor: pointer;
    color: #fff;
    border: 1px solid ${props => props.theme.secondary};
    border-radius: 20px;
    padding: .5rem 1rem;

    &:hover {
        transition: 200ms ease;
        background: ${props => props.theme.secondary};
        color: white !important;
    }

`

export const Instagram = styled.a`

        color: ${props => props.theme.secondary};

        &:hover {
            color: white;
        }

`