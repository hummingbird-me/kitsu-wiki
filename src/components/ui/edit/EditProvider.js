import React, { createContext, useReducer } from 'react';

const EditContext = createContext({});

const reducer = (initialState, field, parentDispatch, parentValidate) => (
  state,
  action
) => {
  if (action === 'reset') {
    return initialState;
  }

  const { field: subField, value, validate } = action;

  if (field && parentDispatch) {
    parentDispatch({
      field,
      value: { ...state.value, [subField]: value },
      validate: parentValidate
    });
  }

  const dirty = initialState.value[subField] !== value;
  const errors = validate ? validate(value) : [];
  return {
    ...state,
    dirty: { ...state.dirty, [subField]: dirty },
    value: { ...state.value, [subField]: value },
    errors: { ...state.errors, [subField]: errors }
  };
};

const EditProvider = ({
  field,
  dispatch: parentDispatch,
  validate: parentValidate,
  value,
  children
}) => {
  const initialState = Object.keys(value).reduce(
    (acc, field) => ({
      dirty: { ...acc.dirty, [field]: false },
      errors: { ...acc.errors, [field]: [] }
    }),
    {}
  );

  initialState.value = value;

  const [state, dispatch] = useReducer(
    reducer(initialState, field, parentDispatch, parentValidate),
    initialState
  );

  return (
    <EditContext.Provider value={{ state, dispatch }}>
      {children}
    </EditContext.Provider>
  );
};

export default EditProvider;
export { EditContext };
