import { Image } from 'semantic-ui-react';
import Message from '../Message/Message';
import ReposResults from '../ReposResults/ReposResults';
import logoGithub from '../../assets/images/logo-github.png';
import SearchBar from '../SearchBar/SearchBar';

import reposData from '../../data/repos';

import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <Image src={logoGithub} alt="logo github" centered size="small" />
      </header>
      <SearchBar />
      <Message message="La recherche a donnée 1159901 résultats" />
      <ReposResults repos={reposData.items} />
    </div>
  );
}

export default App;
