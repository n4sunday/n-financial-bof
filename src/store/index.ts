import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { countReducer } from './count/count.reducer'
import { todoReducer } from './todo/todo.reducer'

const enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const rootReducer = combineReducers({
  todo: todoReducer,
  count: countReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const store = createStore(rootReducer, enhancer)

  return store
}
