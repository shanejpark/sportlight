import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

function HomeCheckboxes() {
    return (
        <div>
            <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="basketball-switch"
        label="Basketball"
      />
      <Form.Check // prettier-ignore
        type="switch"
        id="football-switch"
        label="Football"
      />
      <Form.Check // prettier-ignore
        type="switch"
        id="soccer-switch"
        label="Soccer"
      />
      <Form.Check // prettier-ignore
        type="switch"
        id="hockey-switch"
        label="Hockey"
      />
    </Form>
    <Button className="mt-2" variant="secondary" size="sm">Apply</Button>{' '}
        </div>
  );   
    }
export default HomeCheckboxes;