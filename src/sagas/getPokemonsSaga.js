import { call, put, all } from 'redux-saga/effects'
import axios from 'axios'
import { getAllPokemonsSuccess, getAllPokemonsFailure } from '../redux'

const getPokemons = () => {
    return axios.get('https://pokeapi.co/api/v2/generation/1/');
}

const getPokemonDetails = (name) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
}

export function* getAllPokemons() {
    try {
        const allPokemons = yield call(getPokemons); 
        const allPokemonsData = yield all(allPokemons.data.pokemon_species.map((pokemon) => call(getPokemonDetails, pokemon.name)));        
        const response = allPokemonsData.map((item) => {
            return {
                "id": item.data.id,
                "name": item.data.name,
                "img": item.data.sprites.other.dream_world.front_default,
                "types": item.data.types.map((t) => {return {"name": t.type.name}})
            }
        }).sort((a,b) => a.id - b.id)
        console.log(response);
        yield put(getAllPokemonsSuccess(response));
    } catch (error) {
        console.log(error);
        yield put(getAllPokemonsFailure(error.message));
    }
}