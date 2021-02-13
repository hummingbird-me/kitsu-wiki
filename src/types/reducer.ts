export interface ReducerAction {
  type: string;
  payload: ReducerPayload;
  action?: string;
}

export interface ReducerPayload {
  value: string;
  index?: number;
}
