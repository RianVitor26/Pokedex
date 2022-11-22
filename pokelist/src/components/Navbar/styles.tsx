import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  height: 10vh;
  background: var(--nav-bg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media only screen and (max-width: 450px) {
      display: none;
    }

    li {
      :nth-child(2) {
        margin: 0 2rem;
      }

      a {
        color: var(--link-color);
        transition: var(--normal-transition);
        font-size: clamp(1rem, 1.8rem, 10rem);
        position: relative;
        padding: 0.5rem;
        font-weight: bold;

        :hover {
          color: var(--link-color-hover);
        }

        ::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 0.3rem;
          bottom: 0;
          left: 0;
          background: var(--link-color-hover);
          visibility: hidden;
          -webkit-transform: scaleX(0);
          transform: scaleX(0);
          -webkit-transition: all 0.3s ease-in-out 0s;
          transition: all 0.3s ease-in-out 0s;
        }
        :hover:before {
          visibility: visible;
          -webkit-transform: scaleX(1);
          transform: scaleX(1);
        }
      }
    }
  }
`;