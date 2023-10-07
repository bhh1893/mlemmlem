import { useState } from 'react'
import { TierList } from './TierList'
import { getLevel, tierListSize } from './constants/getLevel'
import { AddButton } from './AddButton'

import './index.css'

function App() {
  const [todos, setTodos] = useState([...Array(tierListSize)].map(e => Array()))

  function addRating(restaurant, score) {
    setTodos(prevTodo => {
      const board = [...prevTodo]
      if (restaurant === '') {
        return board
      }
      const curScore = getLevel(score)
      board[curScore] = [...board[curScore], restaurant]
      return board
    })
    console.log(todos)
  }

  return (
    <div className='fixed h-full w-full bg-slate-800 text-white'>
      <p className='text-center p-5 text-5xl font-bold'> Restaurant Tier List </p>
      <form className='new-item-form'>
        <div className='text-center'>
          <AddButton addRating={addRating}/>
        </div>
      </form>
      <TierList todoList={todos} />
    </div>
  )
}

export default App
