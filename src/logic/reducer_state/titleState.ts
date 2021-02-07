import { cloneDeep } from 'lodash';
import { TitlesChange } from 'src/types/mediaChange';

interface RequiredKeys {
  titles?: TitlesChange;
}

export class TitleState<T extends RequiredKeys> {
  #currentState: T;
  #titles: TitlesChange;
  #fieldName: string;
  #newValue: string | any;

  constructor(currentState: T, fieldName: string, newValue: any) {
    this.#currentState = cloneDeep(currentState);
    this.#titles = this.#currentState.titles || {};
    this.#fieldName = fieldName;
    this.#newValue = newValue;
  }

  update(): T {
    switch (this.#fieldName) {
      default:
        this.#currentState.titles = {
          ...this.#titles,
          [this.#fieldName]: this.#newValue,
        };
    }

    return this.#currentState;
  }
}
