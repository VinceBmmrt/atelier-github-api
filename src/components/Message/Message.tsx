// Si les composants on le même nom, on peut les renommer à l'import
import { Message as MessageUI } from 'semantic-ui-react';

function Message() {
  return <MessageUI>Message</MessageUI>;
}

export default Message;
