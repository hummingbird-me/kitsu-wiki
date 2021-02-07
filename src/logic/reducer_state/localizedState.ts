import { cloneDeep, merge } from 'lodash';

export class LocalizedState<T> {
  #currentState: T;
  #language: string;
  #fieldName: string;
  #newValue: string | any;

  constructor(currentState: T, fieldName: string, language: string, newValue: any) {
    this.#currentState = cloneDeep(currentState);
    this.#fieldName = fieldName;
    this.#language = language;
    this.#newValue = newValue;
  }

  // NOTE: This is hardcoded for `set?` for now.
  // Will need to handle remove later on.
  update(): T {
    // how to use fieldName instead of hardcoded description.
    this.#currentState[this.formattedKey] = merge(this.#currentState[this.formattedKey], {
      set: { [this.#language]: this.#newValue },
    });

    return this.#currentState;
  }

  private get formattedKey(): keyof T {
    return this.#fieldName as keyof T;
  }
}
