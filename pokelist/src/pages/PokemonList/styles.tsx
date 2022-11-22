import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        width: 300px;
        margin-top: 2rem;
        border-radius: .5rem;
        padding: 0.5rem 1rem;
    }
`
export const InputContainer = styled.div`
    display: flex;
    align-items: center;

    input{
        width: 300px;
        margin-top: 2rem;
        border-radius: .5rem;
        padding: 0.5rem 1rem;
        margin: 1rem 0;
    }

    svg{
        color: var(--link-color);
        font-size: clamp(1.2rem, 2.5rem, 10rem);
        cursor: pointer;

        :nth-child(2){
            margin: 0 1rem;
        }
    }
`
