import { useState } from 'react'
import { TierList } from './TierList'
import { AddButton } from './Buttons/AddButton'
import { getLevel, tierListSize } from './constants/getLevel'
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Button } from './components/ui/button'
import './index.css'

function App() {
  const initial_map = {
    'S': [],
    'A': [],
    'B': [],
    'C': [],
    'F': [],
  }
  const { toast } = useToast()
  const [restaurants, setRestaurants] = useState(initial_map)
  const [clicked, setClicked] = useState(0)
  const [restaurantSet, setRestaurantSet] = useState(new Set())

  function addDummyShort(e) {
    e.preventDefault()
    if (clicked === 0) {
      setRestaurants(prev => {
        const board = prev
        board['S'].push({
          'title': 'Five Guys',
          'score': 'S'
        })
        return board
      })
      setRestaurantSet(prev => {
        const rset = prev
        rset.add('Five Guys')
        return rset
      })
      setClicked(1)
    }
  }

  function addDummy(e) {
    e.preventDefault()
    if (clicked === 0) {
      for (let i = 0; i < 6; i++) {
        const rname = `Restaurant-${i}`
        setRestaurants(prev => {
          const board = prev
          board['S'].push({
            'title': rname,
            'score': 'S'
          })
          return board
        })
        setRestaurantSet(prev => {
          const rset = prev
          rset.add(rname)
          return rset
        })
      }
      setClicked(1)
    }
  }

  function addRating(rname, score) {
    setRestaurants(prev => {
      const board = prev
      if (rname.trim() === '') {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'Restaurant needs to have a name',
          className: 'bg-black text-white'
        })
        return board
      }
      if (restaurantSet.has(rname)) {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There is already a restaurant with this name.',
          className: 'bg-black text-white'
        })
        return board
      }
      board[score].push({
        'title': rname,
        'score': score,
      })
      toast({
        title: 'Rating added!',
        description: `Milky treats is ${score} tier.`,
        className: 'bg-black text-white'
      })
      setRestaurantSet(prev => {
        const rset = prev
        rset.add(rname)
        return rset
      })
      return board
    })
  }

  function deleteRating(rname) {
    setRestaurants(prev => {
      const board = prev
      for (let [key, val] of Object.entries(board)) {
        board[key] = val.filter(function (r) { return r.title != rname; });
      }
      return board
    })
    restaurantSet.delete(rname)
  }

  return (
    <>
      <Toaster />
      <div
        className='fixed h-full w-full bg-slate-900 text-white mb-32
                overflow-x-auto scroll-smooth no-scrollbar snap-always snap-start'
      >
        <p className='text-center pt-5 text-5xl font-bold'> Restaurant Tier List </p>
        <form className='new-item-form'>
          <div className='text-center p-5'>
            <AddButton addRating={addRating} />
            <Button onClick={addDummy}> Add Dummy Data </Button>
            <Button onClick={addDummyShort}> Add Dummy Short </Button>
          </div>
        </form>
        <TierList restaurants={restaurants} deleteRating={deleteRating} />
      </div>
    </>
  )
}

export default App
