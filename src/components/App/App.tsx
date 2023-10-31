import { useEffect, useState } from 'react';
import { Button, Image, Segment } from 'semantic-ui-react';
import axios from 'axios';
import Message from '../Message/Message';
import ReposResults from '../ReposResults/ReposResults';
import logoGithub from '../../assets/images/logo-github.png';
import SearchBar from '../SearchBar/SearchBar';

import reposData from '../../data/repos';

import './App.scss';

function App() {
  const [repos, setRepos] = useState(reposData.items);
  const [totalCount, setTotalCount] = useState(reposData.total_count);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchText, setSearchText] = useState('');

  const handleSubmitSearchForm = (textToSearch: string) => {
    // A la soumission du formulaire, je met à jour la valeur de searchText
    setSearchText(textToSearch);
    setPageNumber(1);
  };

  useEffect(() => {
    // Je lance la recherche seulement si j'ai un text à rechercher
    if (searchText !== '') {
      // Je vais faire une requête à l'API
      // Axios me permet de passer un deuxième paramètre à ma requête
      // Ce paramètre me permet de passé les paramêtre d'url (query params) de ma requête
      axios
        .get(`https://api.github.com/search/repositories`, {
          params: {
            q: searchText,
            sort: 'stars',
            order: 'desc',
            page: pageNumber,
            per_page: 9,
          },
        })
        .then((response) => {
          // On utilise axios pour faire une requête à l'API
          // Les données retourner par l'API sont dans response.data (pas besoin de faire un response.json())
          // Je modifie les données stocker dans mes states avec ceux provenant de l'API
          setRepos(response.data.items);
          setTotalCount(response.data.total_count);
        });
    } else {
      // Sinon je met à jour mes states avec des valeurs vide
      setRepos([]);
      setTotalCount(0);
    }
  }, [searchText, pageNumber]);

  return (
    <div className="app">
      <header className="app__header">
        <Image src={logoGithub} alt="logo github" centered size="small" />
      </header>
      <SearchBar onSubmitSearchForm={handleSubmitSearchForm} />
      <Message message={`La recherche a donnée ${totalCount} résultat(s)`} />
      <ReposResults repos={repos} />

      <Segment textAlign="center">
        <Button onClick={() => setPageNumber(pageNumber + 1)}>
          Charger plus (page {pageNumber})
        </Button>
      </Segment>
    </div>
  );
}

export default App;
