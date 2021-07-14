  
import './App.css';
import ApiCall from './components/ApiCall';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <h1 className="jumbotron"> Welcome Pokemons! </h1>
    
      <div>
        <ApiCall />
      </div>
    </div>
  );
}

export default App;
