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
import { Label } from "@/components/ui/label"
import { DeleteButton } from './Buttons/DeleteButton'
import { EditButton } from './Buttons/EditButton'

export function SingleObj({ name, deleteRating }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant='default'
          size='lg'
          className='h-4/6 my-auto mx-3 border-solid text-center bg-blue-500 border-2
                   border-gray-400 text-gray-200'
        >
          {name}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[500px] bg-black text-white">
        <DialogHeader>
          <DialogTitle>View Details</DialogTitle>
          <DialogDescription>
            View/Edit Restaurant
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              {name}
            </Label>
          </div>
        </div>
        <DialogFooter>
          <EditButton
            parentOpen={open} 
            setParentOpen={setOpen} 
            restaurant={name}
          />
          <DeleteButton 
            parentOpen={open} 
            setParentOpen={setOpen} 
            deleteRating={deleteRating}
            restaurant={name}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}