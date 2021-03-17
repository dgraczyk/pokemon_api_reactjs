import {combineReducers} from 'redux'
import pokemonsReducer from './pokemons/pokemonsReducer'


export const rootReducer = combineReducers({
    pokemons: pokemonsReducer,
    pokemons22: pokemonsReducer
})