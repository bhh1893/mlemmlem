import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { RadioButtons } from './RadioButtons'

export function AddButton({ addRating }) {
  const [newRestaurant, setNewRestaurant] = useState('Milky Treats')
  const [newScore, setNewScore] = useState('S')
  const [open, setOpen] = useState(false);

  function updateScore(option) {
    setNewScore(option)
  }

  function handleSubmit(e) {
    e.preventDefault()
    addRating(newRestaurant, newScore)
    setOpen(!open)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='bg-black'>Add Rating</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[500px] bg-black text-white">
        <DialogHeader>
          <DialogTitle>Add Rating</DialogTitle>
          <DialogDescription>
            Choose:  S, A, B, C, or F
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <div className='text-sm font-medium leading-none text-right'>
              Restaurant
            </div>
            <Input
              className='col-span-3 text-black'
              value={newRestaurant}
              onChange={e => setNewRestaurant(e.target.value)}
              type='text'
              id='item'
            />
          </div>
          <div className="grid grid-cols-6 items-center gap-4">
            <div className='text-sm font-medium leading-none text-right'>
              Score
            </div>
            <div className='col-span-5'>
              <RadioButtons
                updateScore={updateScore}
                start={'S'}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={handleSubmit}
          >
            Add Rating</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
