export interface Todo {
  todo: string
  isCheck: boolean
}

export interface CountState {
  value: number
}

export enum CountActionType {
  ADD_COUNT = 'ADD_COUNT',
}
export type CountAction = CountActionType

export interface CountActionInterface {
  type: CountAction
  payload: any
}
