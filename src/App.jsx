import { useState } from 'react'
import { TierList } from './TierList'
import { AddButton } from './Buttons/AddButton'
import { getLevel, tierListSize } from './constants/getLevel'
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"


import './index.css'

function App() {
  const [todos, setTodos] = useState([...Array(tierListSize)].map(e => Array()))
  const [count, setCount] = useState(0)
  const { toast } = useToast()

  function addRating(restaurant, score) {
    setTodos(prevTodo => {
      const board = [...prevTodo]
      console.log('use toast')
      toast({
        title: 'Rating Added!',
        description: 'None'
      })
      if (restaurant.trim() === '') {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'Restaurant needs to have a name',
          className: 'bg-black text-white'
        })
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
          toast({
            title: 'Uh oh! Something went wrong.',
            description: 'There is already a restaurant with this name.',
            className: 'bg-black text-white'
          })
          return board
        }
      }
      board[curScore] = [...board[curScore], restaurant]
      toast({
        title: 'Rating added.',
        description: 'for restaurant',
        className: 'bg-black text-white'
      })
      return board
    })
  }

  function deleteRating(restaurant) {
    setTodos(prevTodo => {
      const board = [...prevTodo]
      for (let i = 0; i < board.length; i++) {
        let b = board[i];
        if (b.includes(restaurant)) {
          const index = b.indexOf(restaurant);
          b.splice(index, 1)
          return board
        }
      }
    })
  }

  return (
    <>
      <Toaster/>
      <div
        className='fixed h-full w-full bg-slate-900 text-white mb-32
                overflow-x-auto scroll-smooth no-scrollbar snap-always snap-start'
      >
        <p className='text-center pt-5 text-5xl font-bold'> Restaurant Tier List </p>
        <form className='new-item-form'>
          <div className='text-center p-5'>
            <AddButton addRating={addRating} />
          </div>
        </form>
        <TierList todoList={todos} deleteRating={deleteRating} />
      </div>
    </>
  )
}

export default App
