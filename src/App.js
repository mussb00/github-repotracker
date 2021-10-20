import './App.css';
import { useState } from 'react';
import HomePage from './Components/HomePage';
import Repositories from './Components/Repositories';

function App() {
  const [appState, setAppState] = useState('home')
  return (
    <div className="App">
      {/* import material-ui navbar here, black background color, white text, github logo, some redundant links */}
      {appState === 'home' && <HomePage/>}
      {appState === 'repositories' && <Repositories/>}
    </div>
  );
}

export default App;
