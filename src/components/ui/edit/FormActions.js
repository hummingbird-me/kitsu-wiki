import React, { useContext } from 'react';
import { EditContext } from './EditProvider';

const FormActions = ({ onSave }) => {
  const { state, dispatch } = useContext(EditContext);

  return (
    <div className="row justify-content-between">
      <div className="col-md-auto">
        <button
          type="reset"
          className="btn btn-warning mr-2"
          onClick={() => {
            dispatch('reset');
          }}>
          Reset
        </button>
      </div>
      <div className="col-md-auto">
        <button
          type="submit"
          className="btn btn-primary mr-2"
          onClick={event => {
            event.preventDefault();
            onSave(state);
          }}>
          Save
        </button>
        <button type="submit" className="btn btn-info mr-2">
          Save and Add Another
        </button>
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default FormActions;
