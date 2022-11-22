import * as C from './styles'
import { Link } from 'react-router-dom'
import { useState } from 'react';

export const Navbar = () => {

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  function handleMenu() {
    isOpenMenu ? setIsOpenMenu(false) : setIsOpenMenu(true)
  }

  return (
    <C.Container>
        <img onClick={handleMenu} src={isOpenMenu ? 'iconmenuopen.png' : 'favicon.png'} alt="Pokebola" />
    
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pokemons">Pokemons</Link>
        </li>   
        <li>
          <a target='_blank' href="http://rv26links.vercel.app">Portifolio</a>
        </li>
      </ul>
    </C.Container>
  );
}
