export interface IUser {
  todo: string
  isCheck: boolean
}

export interface AuthState {
  user: IUser | undefined
  loading: boolean
}

export enum AuthActionType {
  SET_USER = 'SET_USER',
  SET_LOADING_AUTH = 'SET_LOADING_AUTH',
}
export type AuthAction = AuthActionType

export interface AuthActionInterface {
  type: AuthAction
  payload: any
}
