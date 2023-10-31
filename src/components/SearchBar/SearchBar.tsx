import { ChangeEvent, useState } from 'react';
import { Form, Input, Segment } from 'semantic-ui-react';

// Pour que le composant SearchBar avertise le composant parent d'un soumission de formulaire
// Il va falloir que le composant parent passe une fonction en propriété
// Et donc que je créer un contrat pour spécifier tous ça
type SearchBarProps = {
  // Le but de cette fonction est de transmettre la valeur de l'input au composant parent
  // Ma fonction prendra donc un paramètre que je nomme textToSearch qui sera de type string
  onSubmitSearchForm: (textToSearch: string) => void;
};
function SearchBar({ onSubmitSearchForm }: SearchBarProps) {
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

  const handleSubmitSearchForm = () => {
    // Pas besoin de faire preventDefault car le composant Form de semantic ui le fait pour moi
    // Je passe la valeur de searchText au composant parent
    onSubmitSearchForm(searchText);
  };

  return (
    <Segment>
      <Form onSubmit={handleSubmitSearchForm}>
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
