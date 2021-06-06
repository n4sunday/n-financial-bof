import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AuthAction } from '../store/action'
import { geAuth } from '../store/selector'

export const useAuth = () => {
  const { user, loading } = useSelector(geAuth)

  const actions = bindActionCreators({ ...AuthAction }, useDispatch())

  return {
    // value
    user,
    loading,

    // func
    signin: (email: string, password: string) => actions.signin(email, password),
  }
}

export default {}
