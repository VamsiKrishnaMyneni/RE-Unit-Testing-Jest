import './App.css';
import Greet from './Components/Greet/Greet';

function App() {
  return (
    <div className="App">
      <h3>Unit Testing React, Jest</h3>
      <svg data-testid="sprite-icon">
        <use href="svg-sprite.svg#svg-sprite"></use>
      </svg>
      <Greet />
    </div>
  );
}

export default App;
