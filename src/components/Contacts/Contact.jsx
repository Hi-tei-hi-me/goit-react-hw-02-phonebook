import PropTypes from 'prop-types';
import { Item, DeleteButton } from './Contacts.styled';

export default function Contact({ id, name, number, handleCLick }) {
  return (
    <Item>
      <p>
        {name}: <span>{number}</span>
      </p>
      <DeleteButton type="button" onClick={() => handleCLick(id)}>
        Delete
      </DeleteButton>
    </Item>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleCLick: PropTypes.func.isRequired,
};