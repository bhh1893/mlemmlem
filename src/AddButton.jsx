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
import { Label } from "@/components/ui/label"

export function AddButton({ addRating }) {
  const [newRestaurant, setNewRestaurant] = useState('Milky Treats')
  const [newScore, setNewScore] = useState('S')
  const [open, setOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault()
    addRating(newRestaurant, newScore)
    setOpen(!open)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Add Rating</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-white">
        <DialogHeader>
          <DialogTitle>Add Rating</DialogTitle>
          <DialogDescription>
            Type in a restaurant name and give it a score of:  S, A, B, C, or F 
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Restaurant
            </Label>
            <Input
              className='col-span-3 text-black'
              value={newRestaurant}
              onChange={e => setNewRestaurant(e.target.value)}
              type='text'
              id='item'
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Score
            </Label>
            <Input
              className='col-span-3 text-black'
              value={newScore}
              onChange={e => setNewScore(e.target.value)}
              type='text'
              id='item'
            />
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
