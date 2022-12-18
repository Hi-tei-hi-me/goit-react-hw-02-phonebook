import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { FormContainer, Label, Input, AddButton } from './ContactForm.styled';

export default function ContactForm({ contacts, onFormSubmit }) {
  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    onFormSubmit(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormContainer autoComplete="of">
        <Label htmlFor="name">
          Name:
          <Input
            type="text"
            id="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor="number">
          Phone №:
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <AddButton type="submit">Add contact</AddButton>
      </FormContainer>
    </Formik>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};
