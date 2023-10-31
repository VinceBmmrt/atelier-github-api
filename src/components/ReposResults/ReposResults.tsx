import { Card } from 'semantic-ui-react';

type Repo = {
  id: number;
  name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string | null;
};

type ReposResultsProps = {
  repos: Repo[];
};

function ReposResults({ repos }: ReposResultsProps) {
  return (
    <Card.Group itemsPerRow={3}>
      {repos.map((repo) => (
        <Card
          key={repo.id}
          image={repo.owner.avatar_url}
          header={repo.name}
          meta={repo.owner.login}
          description={repo.description}
        />
      ))}
    </Card.Group>
  );
}

export default ReposResults;
