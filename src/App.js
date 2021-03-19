import './App.css';
import { Switch, Route } from 'react-router-dom'
import NavBarContainer from './components/NavBarContainer'
import GenerationContainer from './components/pokemon_generation_types/PokemonGenerationTypesContainer'
import PokemonGenerationContainer from './components/pokemon_generation/PokemonGenerationContainer'
import PokemonListContainer from './components/pokemon_list/PokemonListContainer'
import PokemonDetails from './components/pokemon_details/PokemonDetailsContainer'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {      
      main: '#f44336',
    },
    secondary: {
      main: '#2196f3',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBarContainer/>
        <Switch>
          <Route path="/" exact component={PokemonGenerationContainer}></Route>
          <Route path="/pokemons/generations/:id" exact component={PokemonGenerationContainer}></Route>
          <Route path="/pokemons" exact component={PokemonListContainer}></Route>
          <Route path="/pokemons/:id" component={PokemonDetails}></Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
