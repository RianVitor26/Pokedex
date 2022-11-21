import * as C from './styles'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <C.Container>
      <Link to="/">
        <img src="favicon.png" alt="Pokebola" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Pokemons</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </C.Container>
  );
}
