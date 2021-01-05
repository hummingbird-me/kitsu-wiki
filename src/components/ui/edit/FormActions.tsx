import React, { ReactElement, useContext } from 'react';
import { EditContext } from './EditProvider';

const FormActions = ({
  onReset,
  onSave,
  onDelete,
}: {
  onReset: any;
  onSave: any;
  onDelete: any;
}): ReactElement => {
  const { state, dispatch } = useContext(EditContext);

  // const dirty = !!Object.keys(state.dirty).find((field) => state.dirty[field]);
  // const invalid = !!Object.keys(state.errors).find(
  //   (field) => state.errors[field].length > 0
  // );

  return (
    <div className="row justify-content-between mb-3">
      <div className="col-md-auto">
        {/* <button
          type="reset"
          className="btn btn-warning mr-2"
          disabled={!dirty}
          onClick={() => (onReset ? onReset() : dispatch('reset'))}>
          Reset
        </button> */}
      </div>
      <div className="col-md-auto">
        {/* <button
          type="submit"
          className="btn btn-primary mr-2"
          disabled={!dirty || invalid}
          onClick={(event) => {
            event.preventDefault();
            onSave(state);
          }}>
          Save
        </button> */}
        <button type="button" className="btn btn-danger" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default FormActions;
