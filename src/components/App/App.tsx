import { useState } from 'react';
import { Image } from 'semantic-ui-react';
import Message from '../Message/Message';
import ReposResults from '../ReposResults/ReposResults';
import logoGithub from '../../assets/images/logo-github.png';
import SearchBar from '../SearchBar/SearchBar';

import reposData from '../../data/repos';

import './App.scss';

function App() {
  const [repos, setRepos] = useState(reposData.items);
  const [totalCount, setTotalCount] = useState(reposData.total_count);

  const handleSubmitSearchForm = (textToSearch: string) => {
    console.log('Mon formulaire est soumis, je suis dans App', textToSearch);
    // Je vais faire une requête à l'API
  };

  return (
    <div className="app">
      <header className="app__header">
        <Image src={logoGithub} alt="logo github" centered size="small" />
      </header>
      <SearchBar onSubmitSearchForm={handleSubmitSearchForm} />
      <Message message={`La recherche a donnée ${totalCount} résultat(s)`} />
      <ReposResults repos={repos} />
    </div>
  );
}

export default App;
