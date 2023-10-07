import { useState } from 'react'
import { TierList } from './TierList'
import { getLevel, tierListSize } from './constants/getLevel'
import { AddButton } from './AddButton'
import toast, { Toaster } from 'react-hot-toast';
import { TierList2 } from './TierList2';

import './index.css'

function App() {
  const [todos, setTodos] = useState([...Array(tierListSize)].map(e => Array()))
  const notify = () => toast('Rating Added!', {
    duration: 750,
    position: 'bottom-right',
  });

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
      <p className='text-center pt-5 text-5xl font-bold'> Restaurant Tier List </p>
      <form className='new-item-form'>
        <div className='text-center p-5'>
          <AddButton addRating={addRating} toaster={notify} />
          <Toaster />
        </div>
      </form>
      {/* <TierList todoList={todos} /> */}
      <TierList2 todoList={todos} />
    </div>
  )
}

export default App
