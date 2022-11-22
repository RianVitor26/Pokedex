import * as C from './styles'
import { Navbar } from '../../components/Navbar'
import { BsFilterCircleFill, BsSearch } from 'react-icons/bs';

export const PokemonList = () => {
  return (
    <>
      <Navbar></Navbar>
      <C.Container>
        <C.InputContainer>
          <input type="text" placeholder='Search by name of Pokemon'/>
                  <BsFilterCircleFill></BsFilterCircleFill>
                  <BsSearch></BsSearch>
        </C.InputContainer>
      </C.Container>
    </>
  );
}
