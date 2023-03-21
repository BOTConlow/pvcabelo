import styled from 'styled-components'

export const FeedbackStruture = styled.div`

    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

`

export const Profile = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: .5rem;

    @media (max-width: 1000px) {
            gap: .6rem;
        }

    img {
        width: 3rem;
        height: 3rem;
        border-radius: 100%;

        @media (max-width: 1000px) {
            width: 2.5rem;
            height: 2.5rem;
        }
    }

    button {
        font-size: 1rem;
        border-radius: 10px;
        padding: .4rem;
        transition: all 200ms;
        background: #f0f2f5;

        &:hover {
            background: #d9d9d9;
        }

        @media (max-width: 1000px) {
            font-size: .8rem;
        }
    }

`

export const Comment = styled.div`

    padding: .8rem;
    border-radius: 20px;
    background: #f0f2f5;
    position: relative;

`

export const Top = styled.div`

    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: .5rem;
    font-weight: bold;

    h4 {
        cursor: pointer;
        color: #000;
        width: 14ch;

        &:hover {
            text-decoration: underline;
        }
    }
`

export const FeedbackLike = styled.div`

    display: flex;
    align-items: center;
    justify-content: end;
    gap: .3rem;
    padding: .4rem;
    border-radius: 30rem;
    background: #f8fafc;
    position: absolute;
    right: 0;
    box-shadow: 3px 3px 10px #c9c7c7;
    margin-top: .3rem;

    @media (max-width: 1000px) {
            padding: .3rem;
        }

    img {
        width: 1.4rem;

        @media (max-width: 1000px) {
            width: 1.2rem;
        }
    }

`


