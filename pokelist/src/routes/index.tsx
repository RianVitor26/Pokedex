import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { PokemonList } from '../pages/PokemonList';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<PokemonList />} />
      </Routes>
    </Router>
  );
}
