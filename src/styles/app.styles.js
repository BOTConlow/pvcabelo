import styled from 'styled-components'


export const Container = styled.div`

    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2.5rem 0;

    @media (max-width: 1000px) {
        max-width: 30rem;
        gap: 1rem;
        margin: 0 auto;
        padding: 1rem 0;
    }
`