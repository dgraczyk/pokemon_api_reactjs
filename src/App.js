import './App.css';
import { Switch, Route } from 'react-router-dom'
import NavBarContainer from './components/NavBarContainer'
import GenerationContainer from './components/pokemon_generation_types/PokemonGenerationTypesContainer'
import PokemonListContainer from './components/pokemon_list/PokemonListContainer'
import PokemonDetails from './components/pokemon_details/PokemonDetailsContainer'

function App() {
  return (
    <div className="App">
      <NavBarContainer/>
      <Switch>
        <Route path="/" exact component={GenerationContainer}></Route>
        <Route path="/pokemons" exact component={PokemonListContainer}></Route>
        <Route path="/pokemons/:id" component={PokemonDetails}></Route>
      </Switch>
    </div>
  );
}

export default App;
