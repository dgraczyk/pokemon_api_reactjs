import { takeEvery } from 'redux-saga/effects'
import { GET_ALL_POKEMONS_REQUEST } from '../redux/pokemons/pokemonsTypes'
import { getAllPokemons } from './getPokemonsSaga'


export function* rootSaga() {
    yield [
      yield takeEvery (GET_ALL_POKEMONS_REQUEST, getAllPokemons),     
    ];
  }