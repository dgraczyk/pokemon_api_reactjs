import { takeEvery } from 'redux-saga/effects'

import { GET_ALL_POKEMONS_REQUEST } from '../redux/pokemons/pokemonsTypes'
import { getAllPokemons } from './getPokemonsSaga'

import { GET_POKEMON_DETAILS_REQUEST } from '../redux/pokemonDetails/pokemonDetailsTypes'
import { getPokemonDetails } from './getPokemonDetailsSaga'

export function* rootSaga() {
    yield [
      yield takeEvery (GET_ALL_POKEMONS_REQUEST, getAllPokemons),
      yield takeEvery (GET_POKEMON_DETAILS_REQUEST, getPokemonDetails),
    ];
  }