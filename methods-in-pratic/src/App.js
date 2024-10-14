import './App.css';
import DeleteItems from './methods/deleteItems/DeleteItems';
import IntermediateQuiz from './methods/praticApplications/IntermediateQuiz';
import SimpleQuiz from './methods/praticApplications/simpleQuiz/SimpleQuiz';

function App() {
  return (
    <div className="App">
     <h1>Métodos na prática</h1>

     <IntermediateQuiz />
    </div>
  );
}

export default App;
