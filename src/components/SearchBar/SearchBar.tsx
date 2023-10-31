import { ChangeEvent, useState } from 'react';
import { Form, Input, Segment } from 'semantic-ui-react';

function SearchBar() {
  // Je stock l'information sur la valeur de mon input dans le composant SearchBar
  // Car seul ce composant à besoin de connaître cette information à chaque instant
  // Le composant App voudra cette information mais uniquement à un moment précis, la soumission du formulaire
  const [searchText, setSearchText] = useState('');

  const handleChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    // Je récupère la nouvelle valeur depuis mon élément HTML (event.target)
    const newValue = event.target.value;
    // Je modifie la valeur de searchText avec la nouvelle valeur
    setSearchText(newValue);
  };

  return (
    <Segment>
      <Form>
        <Form.Field>
          <Input
            name="search"
            icon="search"
            placeholder="React..."
            iconPosition="left"
            // Je fixe la valeur de mon input à la valeur de searchText
            value={searchText}
            // Lorsque la valeur de l'input change, on met à jour la valeur de searchText
            onChange={handleChangeSearchValue}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
}

export default SearchBar;
