// Si les composants on le même nom, on peut les renommer à l'import
import { Message as MessageUI } from 'semantic-ui-react';

// Pour définir une propriété, je vais d'abord définir un contract / un type
// Le but de se contrat est de représenté la forme de l'objet que je vais passer en propriété
// La forme => un object avec une certaine propriété devant avoir comme valeur une chaine de caractère

// Particularité des props de React, c'est un objet qui contiendra une liste de propriété
type MessageProps = {
  message: string;
};

// Je positionne le contrat sur le 1er paramètre
// Je pioche dans les props la propriété message
function Message({ message }: MessageProps) {
  return <MessageUI>{message}</MessageUI>;
}

export default Message;
