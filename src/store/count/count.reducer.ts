import { CountState, CountActionType, CountActionInterface } from './count.type'

const initialState: CountState = {
  value: 0,
}

export function countReducer(
  state = initialState,
  action: CountActionInterface,
): CountState {
  switch (action.type) {
    case CountActionType.ADD_COUNT:
      return { ...state, value: state.value + action.payload }

    default:
      return state
  }
}
