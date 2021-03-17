import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { getPokemonsDetailsSuccess, getPokemonsDetailsFailure } from '../redux'

const getPokemon = (name) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
}

export function* getPokemonDetails(action) {
    try {
        const pokemonData = yield call(getPokemon, action.payload);         
        const response = {
          id: pokemonData.data.id,
          name: pokemonData.data.name,
          img: pokemonData.data.sprites.other.dream_world.front_default,
          height: pokemonData.data.height,
          weight: pokemonData.data.weight,
          stats: pokemonData.data.stats.map((s) => {
            return {
              stat: s.base_stat,
              name: s.stat.name 
            }
          }),
          types: pokemonData.data.types.map((t) => {
            return { name: t.type.name };
          }),
        };
        console.log(response);
        yield put(getPokemonsDetailsSuccess(response));
    } catch (error) {
        console.log(error);
        yield put(getPokemonsDetailsFailure(error.message));
    }
}