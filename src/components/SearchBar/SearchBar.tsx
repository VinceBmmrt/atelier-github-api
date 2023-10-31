import { Form, Input, Segment } from 'semantic-ui-react';

function SearchBar() {
  return (
    <Segment>
      <Form>
        <Form.Field>
          <Input
            name="search"
            icon="search"
            placeholder="React..."
            iconPosition="left"
          />
        </Form.Field>
      </Form>
    </Segment>
  );
}

export default SearchBar;
