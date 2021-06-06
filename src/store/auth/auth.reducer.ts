import { AuthState, AuthActionType, AuthActionInterface } from './auth.type'

const initialState: AuthState = {
  user: undefined,
  loading: false,
}

export function authReducer(state = initialState, action: AuthActionInterface): AuthState {
  switch (action.type) {
    case AuthActionType.SET_USER:
      return { ...state, user: action.payload }
    case AuthActionType.SET_LOADING_AUTH:
      return { ...state, loading: action.payload }

    default:
      return state
  }
}
