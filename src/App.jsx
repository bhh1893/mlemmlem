import { useState } from 'react'
import './App.css'
import { TierList } from './TierList'
import { getLevel, tierListSize } from './constants/getLevel'

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
    <>
      <form className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>New Item:</label>
          <input
            value={newRestaurant}
            onChange={e => setNewRestaurant(e.target.value)}
            type='text'
            id='item'
          />
          <input
            value={newScore}
            onChange={e => setNewScore(e.target.value)}
            type='text'
            id='item'
          />
        </div>
        <button 
          onClick={handleSubmit}
          className='btn'>Add</button>
      </form>
      <TierList todoList={todos}/>
    </>
  )
}

export default App
