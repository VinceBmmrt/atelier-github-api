import { Card } from 'semantic-ui-react';

function ReposResults() {
  return (
    <Card.Group itemsPerRow={3}>
      <Card
        image="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
        header="Elliot Baker"
        meta="Friend"
        description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
      />
      <Card
        image="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
        header="Elliot Baker"
        meta="Friend"
        description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
      />
      <Card
        image="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
        header="Elliot Baker"
        meta="Friend"
        description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
      />
    </Card.Group>
  );
}

export default ReposResults;
