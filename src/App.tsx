import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodoState, getValue } from './store/selector'
import { CountAction } from './store/action'
import { bindActionCreators } from 'redux'

function App() {
  const todos = useSelector(getTodoState)
  const value = useSelector(getValue)
  const actions = bindActionCreators({ ...CountAction }, useDispatch())
  // const dispatch = useDispatch()

  console.log('todos', todos)

  const handleAdd = () => {
    // dispatch({ type: CountActionType.ADD_COUNT, payload: 2 })
    actions.addCount(2)
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <h3>REACT TYPESCRIPT REDUX</h3>
      <div>COUNT: {value}</div>
      <div>
        <button className="text-white bg-green-500 hover:bg-green-600 px-10 py-3" onClick={handleAdd}>
          ADD
        </button>
      </div>
    </div>
  )
}

export default App
