import styled from 'styled-components'

export const WhatsappContent = styled.div`

    position: fixed;
    right: 3.3rem;
    bottom: 3rem;
    border-radius: 50px;
    padding: .4rem;
    background: linear-gradient(0deg, ${props => props.theme.secondary}, ${props => props.theme.third});

    @media (max-width: 1000px) {
            right: 1rem;
            bottom: 1rem;
        }

`
