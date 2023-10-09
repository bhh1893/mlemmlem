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
import { RadioButtons } from './RadioButtons';
import { useToast } from "@/components/ui/use-toast"

export function EditButton({ r, cardOpen, setCardOpen, addRating, deleteRating }) {
  const [open, setOpen] = useState(false);
  const [newScore, setNewScore] = useState('S')
  const { toast } = useToast()

  function updateScore(option) {
    setNewScore(option)
  }

  function backOne() {
    setOpen(!open)
  }

  function handleEdit() {
    const editMessage = "Updated " + r['title'] + "!"
    deleteRating(r['title'])
    addRating(r['title'], newScore)
    toast({
      title: 'Rating Updated.',
      description: editMessage,
      className: 'bg-black text-white'
    })
    setCardOpen(!cardOpen)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[500px] bg-slate-800 text-white">
        <DialogHeader>
          <DialogTitle>Edit Restaurant</DialogTitle>
          <DialogDescription>
            Update rating or add another food item.
          </DialogDescription>
          <RadioButtons 
            updateScore={updateScore}
            start={r['score']}
          />
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleEdit}> Update </Button>
          <Button onClick={backOne}> Cancel </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}