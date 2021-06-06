import { RootState } from '..'

export function getValue(state: RootState) {
  return state.count.value
}
