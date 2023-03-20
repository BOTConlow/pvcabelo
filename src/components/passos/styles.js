import styled from 'styled-components'


export const PassosContainer = styled.div`

    margin-bottom: 2rem;

    h1 {
        font-size: 2.8rem;
        margin-bottom: 3.4rem;
        text-align: center;

        @media (max-width: 1000px) {
            font-size: 1.6rem;
            margin-bottom: 2rem;
            display: flex;
            flex-direction: column;
        }
    }
`

export const Content = styled.div`

    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    gap: 2rem;
    border-radius: 5px;
    background: linear-gradient(#291919 0%, #402626 40%, #573333 100%);

    @media (max-width: 1000px) {
            flex-direction: column;
            gap: 1rem;
            padding: 2rem 2rem;
        }
`

export const Textcontent = styled.div`

    width: 100%;
    height: 22rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    transition: 400ms ease;
    cursor: pointer;
    border: 0;
    color: white;

    @media (max-width: 1000px) {
            height: 20rem;
            border: 1px solid #f2d3b6;
            border-radius: 18px;
        }

    &:hover {
        background: linear-gradient(70deg,#f2d3b6, #c9ae95);
        transform:translateY(-3rem);

        @media (max-width: 1000px) {
            transform: none;
        }
    }

    h1 {
        font-size: 1.1rem;
        margin-bottom: .9rem;
        line-height: 160%;
    }

`

