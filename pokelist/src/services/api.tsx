import axios from 'axios'
import { QueryClient } from 'react-query';

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
});

export const queryClient = new QueryClient()