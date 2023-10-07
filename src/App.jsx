import { useState } from 'react'
import { TierList } from './TierList'
import { getLevel, tierListSize } from './constants/getLevel'
import './index.css'

function App() {
  const [newRestaurant, setNewRestaurant] = useState('')
  const [newScore, setNewScore] = useState('')
  const [todos, setTodos] = useState([...Array(tierListSize)].map(e => Array()))

  function handleSubmit(e) {
    e.preventDefault()

    setTodos(prevTodo => {
      const board = [...prevTodo]
      if (newRestaurant === '') {
        return board
      }
      const score = getLevel(newScore)
      board[score] = [...board[score], newRestaurant]
      return board
    })
    console.log(todos)
  }

  return (
    <div className='fixed h-full w-full bg-slate-800 text-white'>
      <p className='text-center text-green-500 font-bold'> Add Item </p>
      <form className='new-item-form'>
        <div className='text-center'>
          <label htmlFor='item'>New Item:</label>
          <div className='p-5'>
            <input
              className='mx-5 px-1 outline outline-1 text-black'
              value={newRestaurant}
              onChange={e => setNewRestaurant(e.target.value)}
              type='text'
              id='item'
            />
            <input
              className='mx-5 px-1 outline outline-1 text-black'
              value={newScore}
              onChange={e => setNewScore(e.target.value)}
              type='text'
              id='item'
            />
          </div>
        </div>
        <div className='text-center'>
          <button
            className='text-center border-solid border-2 px-3 border-sky-500'
            onClick={handleSubmit}
            >Add</button>
        </div>
      </form>
      <TierList todoList={todos} />
    </div>
  )
}

export default App
