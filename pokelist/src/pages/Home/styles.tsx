import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url('pokebg.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 6rem 10rem;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    padding: 3rem 5rem;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  word-wrap: break-word;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    min-width: 200px;
  }

  h1 {
    font-size: clamp(1rem, 3rem, 10rem);
    color: var(--light-color);

    @media only screen and (max-width: 768px) {
      font-size: clamp(1rem, 2rem, 10rem);
      margin: 2rem auto;
    }
  }

  a {
    background: var(--buttons-bg);
    color: var(--light-color);
    margin-top: 1rem;
    width: 50%;
    min-width: 200px;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px 50px;
    font-weight: bold;
    transition: var(--normal-transition);

    @media only screen and (max-width: 768px) {
      width: 100%;
      margin: 0 auto;
      padding: 1rem;
    }

    svg {
      margin-left: 1rem;
    }

    :hover {
      background: var(--buttons-bg-hover);
      border-radius: 50px 15px;
    }
  }
`;