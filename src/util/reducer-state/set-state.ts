import { ReducerPayload } from 'src/types/reducer';

export function setAction<T>(
  action: string,
  currentState: T,
  fieldName: string,
  payload: ReducerPayload
): T {
  switch (action) {
    case 'add': {
      break;
    }
    case 'remove': {
      break;
    }
  }

  return currentState;
}

export function add<T>(currentState: T, fieldName: string, payload: ReducerPayload): T {
  return currentState;
}

// export function remove() => {

// }
