import { combineReducers } from "redux";
import pokemonsReducer from "./pokemons/pokemonsReducer";
import pokemonDetailsReducer from "./pokemonDetails/pokemonDetailsReducer";

export const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  pokemonDetails: pokemonDetailsReducer,
});
