import * as C from './styles'
import { Navbar } from '../../components/Navbar'
import { BsFilterCircleFill, BsSearch } from 'react-icons/bs';

import { useQuery } from 'react-query'
import { api } from './../../services/api';
import axios from 'axios'
import { useEffect, useState } from 'react'


export const PokemonList = () => {
const [pokemons, setPokemons] = useState([])

  useEffect(() => {
     getPokemon()
   }, [])
  
  const getPokemon = () => {
    var endPoints = []
    for (let id = 1; id <= 50; id++) {
      endPoints.push(`https://pokeapi.co/api/v2/pokemon/${id}`)
    }
      axios
        .all(endPoints.map((endPoint) => axios.get(endPoint)))
        .then((response) => setPokemons(response));
  }
  console.log(pokemons)
  
  return (
    <>
      <Navbar />
      <C.Container>
        <C.InputContainer>
          <input type="text" placeholder="Search by name of Pokemon" />
          <BsFilterCircleFill />
          <BsSearch />
        </C.InputContainer>

        <C.PokemonsContainer>
          <ul>
            {pokemons.map(pokemon => {
              return (
                <li key={pokemon.data.name}>
                  <span>Nº {pokemon.data.id}</span>
                  <img src={pokemon.data.sprites.front_default} alt="" />
                  <h1>{pokemon.data.name}</h1>
                  <C.CircleBg></C.CircleBg>

                  <C.PokemonTypes>
                    {pokemon.data.types.map((item) => {
                      return <h2>{item.type.name}</h2>;
                    })}
                  </C.PokemonTypes>

                  <C.PokemonGif>
                    <img src={pokemon.data.sprites.back_default} alt="" />
                  </C.PokemonGif>
                </li>
              );
            })}
          </ul>
        </C.PokemonsContainer>
      </C.Container>
    </>
  );
}
