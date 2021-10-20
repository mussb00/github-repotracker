import './App.css';
import { useState } from 'react';
import HomePage from './Components/HomePage';
import Repositories from './Components/Repositories';
import { RepoContext } from './Context/Contexts';
function App() {
  const [appState, setAppState] = useState('home')
  return (
    <div className="App">
      {/* import material-ui navbar here, black background color, white text, github logo, some redundant links */}
      <RepoContext.Provider value={{appState, setAppState}}>
      {appState === 'home' && <HomePage/>}
      {appState === 'repositories' && <Repositories/>}
      </RepoContext.Provider>
    </div>
  );
}

export default App;
