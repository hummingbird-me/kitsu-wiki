import { SetChange } from 'src/types/media-change';
import { ReducerPayload } from 'src/types/reducer';
import { chosenAction } from './set-state';

describe('#chosenAction', () => {
  let currentState: SetChange = {};
  const fieldName = 'alternatives';
  const updatedValue = 'hello';
  const payload: ReducerPayload = { value: updatedValue };

  beforeEach(() => {
    // Reset the currentState before each test.
    currentState = {
      add: [],
      remove: [],
    };
  });

  describe('when it is an add action', () => {
    const action = 'add';

    test('it should add the value to the add array', () => {
      const result = chosenAction(action, currentState, fieldName, payload);

      expect(result.add).toStrictEqual([updatedValue]);
    });

    test('it should remove the value from the remove array if present', () => {
      currentState.remove = [updatedValue];

      const result = chosenAction(action, currentState, fieldName, payload);

      expect(result.remove).toStrictEqual([]);
      expect(result.add).toStrictEqual([]);
    });
  });

  describe('when it is a remove action', () => {
    const action = 'remove';

    test('it should add the value to the remove array', () => {
      const result = chosenAction(action, currentState, fieldName, payload);

      expect(result.remove).toStrictEqual([updatedValue]);
    });

    test('it should remove the value from the add array if present', () => {
      currentState.add = [updatedValue];

      const result = chosenAction(action, currentState, fieldName, payload);

      expect(result.remove).toStrictEqual([]);
      expect(result.add).toStrictEqual([]);
    });
  });

  describe('when it is an invalid action', () => {
    const action = 'invalid-action';

    test('it should return the current state without modifying it.', () => {
      const result = chosenAction(action, currentState, fieldName, payload);

      expect(result).toStrictEqual<SetChange>(currentState);
    });
  });
});
