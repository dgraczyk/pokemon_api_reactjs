import { call, put, all } from 'redux-saga/effects'
import axios from 'axios'
import { getAllPokemonsSuccess, getAllPokemonsFailure } from '../redux'

const getPokemons = (id) => {
  return axios
    .get(`https://pokeapi.co/api/v2/generation/${id}/`)
    .catch(function (error) {
      console.log(error);
    });
};

const getPokemonDetails = (name) => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then(response => ({ response }))
    .catch(error => ({ error }))
};

export function* getAllPokemons(action) {
    try {
        const allPokemons = yield call(getPokemons, action.payload); 
        const allPokemonsData = yield all(allPokemons.data.pokemon_species.map((pokemon) => call(getPokemonDetails, pokemon.name)));        
        const response = allPokemonsData
        .filter((item) => item.response !== undefined)
        .map((item) => {
            return {
                "id": item.response.data.id,
                "name": item.response.data.name,
                "img": item.response.data.sprites.other.officialartwork.front_default,
                "types": item.response.data.types.map((t) => {return {"name": t.type.name}})
            }
        }).sort((a,b) => a.id - b.id)  
         
        yield put(getAllPokemonsSuccess(response));
    } catch (error) {
        console.log(error);
        yield put(getAllPokemonsFailure(error.message));
    }
}