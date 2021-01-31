import { Media } from 'reactstrap';
import { cloneDeep } from 'lodash';
import { MediaChange, TitlesChange } from 'src/types/mediaChange';

export class TitleState {
  #currentState: MediaChange;
  #titles: TitlesChange;
  #fieldName: string;
  #newValue: string | any;

  constructor(currentState: MediaChange, fieldName: string, newValue: any) {
    this.#currentState = cloneDeep(currentState);
    this.#titles = this.#currentState.titles || {};
    this.#fieldName = fieldName;
    this.#newValue = newValue;
  }

  update(): MediaChange {
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
