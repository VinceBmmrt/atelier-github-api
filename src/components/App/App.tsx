import Message from '../Message/Message';
import ReposResults from '../ReposResults/ReposResults';
import SearchBar from '../SearchBar/SearchBar';

import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app__header">Mon image</header>
      <SearchBar />
      <Message />
      <ReposResults />
    </div>
  );
}

export default App;
