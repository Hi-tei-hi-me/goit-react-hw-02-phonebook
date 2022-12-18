import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1.5px solid gray;
  border-radius: 10px;
  padding: 15px;
`;

export const Label = styled.label``;

export const Input = styled(Field)``;

export const AddButton = styled.button`
  margin: 15px auto 0 auto;
`;
