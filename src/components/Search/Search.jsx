import PropTypes from 'prop-types';
import { Input, Label } from './Search.styled';

export default function Filter({ value, onChange }) {
  return (
    <Label htmlFor="filter">
      Find contact by name:
      <Input name="filter" type="text" value={value} onChange={e => onChange(e.target.value)} />
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
