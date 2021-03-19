import {
  GET_ALL_POKEMONS_REQUEST,
  GET_ALL_POKEMONS_SUCCESS,
  GET_ALL_POKEMONS_FAILURE,
} from "./pokemonsTypes";

const initialState = {
  loading: false,
  pokemons: [],
  error: "",
};

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_POKEMONS_SUCCESS:
      return {
        loading: false,
        pokemons: action.payload,
        error: "",
      };
    case GET_ALL_POKEMONS_FAILURE:
      return {
        loading: false,
        pokemons: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
