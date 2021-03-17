import { GET_POKEMON_DETAILS_REQUEST, GET_POKEMON_DETAILS_FAILURE, GET_POKEMON_DETAILS_SUCCESS } from './pokemonDetailsTypes'

export const getPokemonsDetailsRequest = (name) => {
    return {
        type: GET_POKEMON_DETAILS_REQUEST,
        payload: name
    }
}

export const getPokemonsDetailsSuccess = (pokemon) => {
    return {
        type: GET_POKEMON_DETAILS_SUCCESS,
        payload: pokemon
    }
}

export const getPokemonsDetailsFailure = (error) => {
    return {
        type: GET_POKEMON_DETAILS_FAILURE,
        payload: error
    }
}