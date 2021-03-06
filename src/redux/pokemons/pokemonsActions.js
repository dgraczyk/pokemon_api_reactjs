import {
  GET_ALL_POKEMONS_REQUEST,
  GET_ALL_POKEMONS_SUCCESS,
  GET_ALL_POKEMONS_FAILURE,
} from "./pokemonsTypes";

export const getAllPokemonsRequest = (generationId) => {
  return {
    type: GET_ALL_POKEMONS_REQUEST,
    payload: generationId,
  };
};

export const getAllPokemonsSuccess = (pokemons) => {
  return {
    type: GET_ALL_POKEMONS_SUCCESS,
    payload: pokemons,
  };
};

export const getAllPokemonsFailure = (error) => {
  return {
    type: GET_ALL_POKEMONS_FAILURE,
    payload: error,
  };
};
