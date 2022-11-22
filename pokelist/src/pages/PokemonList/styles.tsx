import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 25rem;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    margin: 3rem 0;

    @media only screen and (max-width: 330px) {
      width: 20rem;
    }
  }

  svg {
    color: var(--link-color);
    font-size: clamp(1.2rem, 2.5rem, 10rem);
    cursor: pointer;

    :nth-child(2) {
      margin: 0 1rem;
    }
  }
`;

export const PokemonsContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

    li {
      width: 35rem;
      height: 40rem;
      background: blue;
      display: flex;
      flex-direction: column;
      border-radius: 1rem;
      margin: 2rem;
      min-width: 25rem;
      box-shadow: 0px 0 1rem gray;

      justify-content: center;
      position: relative;
      transition: var(--normal-transition);
      cursor: pointer;

      :hover {
        transform: translateY(-2rem);
      }

      h1 {
        font-size: clamp(1.4rem, 1.8rem, 10rem);
        font-weight: bold;
        padding: 0.5rem;
        text-align: center;
      }

      span {
        position: absolute;
        top: 1rem;
        right: 1rem;
        min-width: 8rem;
        background: pink;
        padding: 1rem;
        text-align: center;
        border-radius: 2rem;
        font-weight: bold;
        font-size: clamp(1.2rem, 1.4rem, 10rem);
        clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
      }

      img {
        width: 100%;
        object-fit: cover;
        height: 60%;
        z-index: 3;
      }
    }
  }
`;

export const CircleBg = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  background: var(--light-color);
`;

export const PokemonTypes = styled.div`
  width: 70%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 335px) {
    width: 65%;
  }

  h2 {
    margin: 0.3rem;
    transition: var(--normal-transition);
    background: pink;
    text-align: center;
    border-radius: 2rem;
    padding: 0.5rem;
    font-size: clamp(1rem, 1.4rem, 10rem);
    cursor: help;
    :hover {
      transform: scale(1.1);
    }
    @media only screen and (max-width: 335px) {
      padding: 0.3rem;
      font-size: 1rem;
    }
  }
`;

export const PokemonGif = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;
