import './App.css';
import NavBarContainer from './components/NavBarContainer'
import GenerationContainer from './components/pokemon_generation_types/PokemonGenerationTypesContainer'

function App() {
  return (
    <div className="App">
      <NavBarContainer/>
      <GenerationContainer/>
    </div>
  );
}

export default App;
