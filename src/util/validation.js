import { useContext } from 'react';
import { EditContext } from '../components/ui/edit/EditProvider';

const useValidation = field => {
  const { state } = useContext(EditContext);

  const {
    dirty: { [field]: dirty },
    errors: { [field]: errors }
  } = state;

  const valid = dirty && errors && errors.length === 0;
  const validClass = dirty ? (valid ? 'is-valid' : 'is-invalid') : '';
  return { dirty, valid, validClass, errors };
};

export default useValidation;
