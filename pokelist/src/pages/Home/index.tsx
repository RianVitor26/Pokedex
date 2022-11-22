import * as C from './styles'
import { Navbar } from './../../components/Navbar/index';
import { Link } from 'react-router-dom';
import { MdOutlineCatchingPokemon } from 'react-icons/md';

export const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <C.Container>
        <C.Contents>
          <img src="pokemontitle.png" alt="Pokemon title" />
          <h1>
            Search for your favorite Pokémon and feel the nostalgia of seeing
            them again
          </h1>
          <Link to="/pokemons">GET STARTED <MdOutlineCatchingPokemon></MdOutlineCatchingPokemon></Link>
        </C.Contents>
      </C.Container>
    </>
  );
}
