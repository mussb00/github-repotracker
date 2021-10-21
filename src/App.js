import { useState } from 'react';
import HomePage from './Components/HomePage';
import Repositories from './Components/Repositories';
import { RepoContext } from './Context/Contexts';
import ButtonAppBar from './Components/NavigationBar';


function App() {
  const [appState, setAppState] = useState('home')
  const [repos, setRepos] = useState([])
  const [userName, setUserName] = useState('')
  const [avatar, setAvatar] = useState()
  return (
    <div className="App">
      <RepoContext.Provider value={{appState, setAppState, repos, setRepos, userName, setUserName, avatar, setAvatar}}>
      <ButtonAppBar/>
      {/* import material-ui navbar here, black background color, white text, github logo, some redundant links */}
      {appState === 'home' && <HomePage/>}
      {appState === 'repositories' && <Repositories/>}
      </RepoContext.Provider>
    </div>
  );
}

export default App;
