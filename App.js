import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons'

function App() {
  return (
    //BEM Class naming convention
    <div className="App">

      <Header/>
      <TinderCards></TinderCards>
      <SwipeButtons></SwipeButtons>

    </div>
  );
}

export default App;
