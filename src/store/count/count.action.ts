import { CountActionType } from './count.type'

export const CountAction = {
  addCount: (data: number) => (dispatch: any, getState: any) => {
    dispatch({ type: CountActionType.ADD_COUNT, payload: data })
  },
}
