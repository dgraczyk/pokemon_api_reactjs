import { GET_POKEMON_DETAILS_REQUEST, GET_POKEMON_DETAILS_FAILURE, GET_POKEMON_DETAILS_SUCCESS } from './pokemonDetailsTypes'

const emptyPokemonTemplate = {
    types: [],
    stats: []
}

const initialState = {
    loading: false,
    pokemon: emptyPokemonTemplate,
    error: ''
}

const pokemonsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POKEMON_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_POKEMON_DETAILS_SUCCESS:
            return {
                loading: false,
                pokemon: action.payload,
                error: ''
            }
        case GET_POKEMON_DETAILS_FAILURE:
            return {
                loading: false,
                pokemon: emptyPokemonTemplate,
                error: action.payload
            }
        default: return state
    }
}

export default pokemonsReducer