import { cloneDeep } from 'lodash';
import { SetChange } from 'src/types/mediaChange';
import { ReducerPayload } from 'src/types/reducer';

const defaultSetChange: SetChange = {
  add: [],
  remove: [],
};

export function chosenAction(
  action: string,
  currentState: SetChange = defaultSetChange,
  fieldName: string,
  payload: ReducerPayload
): SetChange {
  currentState = cloneDeep(currentState);

  switch (action) {
    case 'add': {
      return add(currentState, fieldName, payload.value);
    }
    case 'remove': {
      return remove(currentState, fieldName, payload.value);
    }
    default: {
      return currentState;
    }
  }
}

export function add(currentState: SetChange, fieldName: string, value: string): SetChange {
  currentState = cloneDeep(currentState);

  if (currentState.remove?.includes(value)) {
    currentState.remove = currentState.remove.filter((item) => item !== value);
  } else {
    currentState.add ??= [];
    currentState.add.push(value);
  }

  return currentState;
}

export function remove(currentState: SetChange, fieldName: string, value: string): SetChange {
  currentState = cloneDeep(currentState);

  if (currentState.add?.includes(value)) {
    currentState.add = currentState.add.filter((item) => item !== value);
  } else {
    currentState.remove ??= [];
    currentState.remove.push(value);
  }

  return currentState;
}
