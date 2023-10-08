import { useState } from 'react'
import { TierList } from './TierList'
import { TierList2 } from './TierList2';
import { AddButton } from './AddButton'
import { Toaster } from 'react-hot-toast';
import { getLevel, tierListSize } from './constants/getLevel'
import { notifyAdded, notifyDup, notifyEmpty } from './constants/toastNotify';

import './index.css'

function App() {
  const [todos, setTodos] = useState([...Array(tierListSize)].map(e => Array()))
  const [count, setCount] = useState(0)

  function addRating(restaurant, score) {
    setTodos(prevTodo => {
      const board = [...prevTodo]
      if (restaurant === '') {
        notifyEmpty()
        return board
      }
      const curScore = getLevel(score)
      if (count === 0) {
        board[curScore] = [...board[curScore], restaurant, 'Five Guys', 'McDonalds', 'Popeyes', 'Churches', 'bbq. Chicken', 'Moge Tee']
        setCount(count + 1)
      }
      for (let i = 0; i < board.length; i++) {
        let b = board[i];
        if (b.includes(restaurant)) {
          notifyDup()
          return board
        }
      }
      board[curScore] = [...board[curScore], restaurant]
      notifyAdded()
      return board
    })
  }

  return (
    <div className='fixed h-full w-full bg-slate-800 text-white mb-32'>
      <p className='text-center pt-5 text-5xl font-bold'> Restaurant Tier List </p>
      <form className='new-item-form'>
        <div className='text-center p-5'>
          <AddButton addRating={addRating} />
          <Toaster />
        </div>
      </form>
      {/* <TierList todoList={todos} /> */}
      <TierList2 todoList={todos} />
    </div>
  )
}

export default App
