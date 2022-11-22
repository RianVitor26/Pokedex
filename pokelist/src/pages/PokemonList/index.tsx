import * as C from './styles'
import { Navbar } from '../../components/Navbar'
import { BsFilterCircleFill, BsSearch } from 'react-icons/bs';

export const PokemonList = () => {
  return (
    <>
      <Navbar></Navbar>
      <C.Container>
        <C.InputContainer>
          <input type="text" placeholder="Search by name of Pokemon" />
          <BsFilterCircleFill></BsFilterCircleFill>
          <BsSearch></BsSearch>
        </C.InputContainer>
        <C.PokemonsContainer>
          <ul>
            <li>
              <span>#1</span>
              <img src="gifchalizard.gif" alt="" />
              <h1>Charizard</h1>
              <C.PokemonTypes>
                <h2>Poison</h2>
                <h2>Poison</h2>
                <h2>Poison</h2>
                <h2>Poison</h2>
                <h2>Poison</h2>
                <h2>Poison</h2>
                
              </C.PokemonTypes>
              <C.CircleBg />
              <C.PokemonGif>
                <img src="charizard.png" alt="" />{' '}
              </C.PokemonGif>
            </li>
          </ul>
        </C.PokemonsContainer>
      </C.Container>
    </>
  );
}
