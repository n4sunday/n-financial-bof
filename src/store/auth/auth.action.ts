import firebase from 'firebase'

import { AuthService } from '../../services'
import { warning, success } from '../../components/Message'
import { AuthActionType } from './auth.type'

export const AuthAction = {
  signin: (email: string, password: string) => async (dispatch: any, getState: any) => {
    dispatch({ type: AuthActionType.SET_LOADING_AUTH, payload: true })

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        dispatch({ type: AuthActionType.SET_USER, payload: data })
        success('Login success')
      })
      .catch((err) => {
        warning(err.message)
      })
      .finally(() => {
        dispatch({ type: AuthActionType.SET_LOADING_AUTH, payload: false })
      })

    let res = await AuthService.getUserByEmail(email)
    console.log('RES USER', res)
    return res
  },
}
