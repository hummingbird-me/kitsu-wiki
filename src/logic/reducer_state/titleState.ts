import { cloneDeep } from 'lodash';
import { TitlesChange } from 'src/types/mediaChange';

interface RequiredKeys {
  titles?: TitlesChange;
}

export class TitleState<T extends RequiredKeys> {
  #currentState: T;
  #titles: TitlesChange;
  #fieldName: keyof TitlesChange;
  #newValue: string | any;
  #action: string;

  constructor(currentState: T, fieldName: string, newValue: any, action = 'add') {
    this.#currentState = cloneDeep(currentState);
    this.#titles = this.#currentState.titles || {};
    this.#fieldName = fieldName as keyof TitlesChange;
    this.#newValue = newValue;
    this.#action = action;
  }

  update(): T {
    switch (this.#fieldName) {
      case 'alternatives': {
        if (this.#action === 'add') {
        } else if (this.#action === 'remove') {
        } else {
          // raise some error?
        }
        break;
      }
      default:
        this.#currentState.titles = {
          ...this.#titles,
          [this.#fieldName]: this.#newValue,
        };
        break;
    }

    return this.#currentState;
  }
}
