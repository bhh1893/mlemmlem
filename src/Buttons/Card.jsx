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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Card({ r, addRating, deleteRating }) {
  const [cardOpen, setCardOpen] = useState(false);
  const title = r['title']
  const imageUrl = new URL('./rr.jpg', import.meta.url).href

  return (
    <Dialog open={cardOpen} onOpenChange={setCardOpen}>
      <DialogTrigger asChild>
        <Button
          variant='card'
          size='card'
          className='h-4/6 w-44 my-auto mx-2 border-solid items-left justify-left overflow-hidden bg-blue-500 border-2
                   border-gray-400 text-gray-200'
        >
          <Avatar className='border-2 border-black'>
            {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
            <AvatarImage src={imageUrl} />
            <AvatarFallback>IMG</AvatarFallback>
          </Avatar>
          <div className='rounded-xl inset-0 px-1.5 text-white'>
            {title}
          </div>
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