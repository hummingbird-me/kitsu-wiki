import React, { createContext, useReducer, ReactElement } from 'react';

const EditContext: React.Context<Record<string, unknown>> = createContext({});

const reducer = (
  initialState: any,
  field: any,
  parentDispatch: any,
  parentValidate: any
) => (state: any, action: any): Record<string, any> => {
  if (action === 'reset') {
    return initialState;
  }

  const { field: subField, value, validate } = action;

  if (field && parentDispatch) {
    parentDispatch({
      field,
      value: { ...state.value, [subField]: value },
      validate: parentValidate,
    });
  }

  const dirty = initialState.value[subField] !== value;
  const errors = validate ? validate(value) : [];
  return {
    ...state,
    dirty: { ...state.dirty, [subField]: dirty },
    value: { ...state.value, [subField]: value },
    errors: { ...state.errors, [subField]: errors },
  };
};

const EditProvider = ({
  field,
  dispatch: parentDispatch,
  validate: parentValidate,
  initialValue,
  children,
}: {
  field: any;
  dispatch: any;
  validate: any;
  initialValue: any;
  children: any;
}): ReactElement => {
  // const initialState = Object.keys(initialValue).reduce(
  //   (acc, field) => ({
  //     dirty: { ...acc.dirty, [field]: false },
  //     errors: { ...acc.errors, [field]: [] },
  //   }),
  //   {}
  // );

  // initialState.value = initialValue;
  // initialState.initialValue = initialValue;

  // const [state, dispatch] = useReducer(
  //   reducer(initialState, field, parentDispatch, parentValidate),
  //   initialState
  // );

  return (
    <div></div>
    // <EditContext.Provider value={{ state, dispatch }}>
    //   {children}
    // </EditContext.Provider>
  );
};

export default EditProvider;
export { EditContext };
