import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { authReducer } from './auth/auth.reducer'

const enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const rootReducer = combineReducers({
  auth: authReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const store = createStore(rootReducer, enhancer)

  return store
}
