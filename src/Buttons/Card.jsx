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
import { DeleteButton } from './DeleteButton'
import { EditButton } from './EditButton'

export function Card({ r, addRating, deleteRating }) {
  const [cardOpen, setCardOpen] = useState(false);
  const title = r['title']

  return (
    <Dialog open={cardOpen} onOpenChange={setCardOpen}>
      <DialogTrigger asChild>
        <Button 
          variant='default'
          size='lg'
          className='h-4/6 w-40 my-auto mx-3 border-solid text-center bg-blue-500 border-2
                   border-gray-400 text-gray-200'
        >
          {title}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[500px] bg-black text-white">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            View/Edit Restaurant Details
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <EditButton
            r={r}
            cardOpen={cardOpen} 
            setCardOpen={setCardOpen} 
            addRating={addRating}
            deleteRating={deleteRating}
          />
          <DeleteButton 
            r={r}
            cardOpen={cardOpen} 
            setCardOpen={setCardOpen} 
            deleteRating={deleteRating}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}