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

export function EditButton({ parentOpen, setParentOpen, restaurant }) {
  const [open, setOpen] = useState(false);

  function backOne() {
    setOpen(!open)
  }

  function handleDelete() {
    console.log('implement edit')
    const editMessage = "Updated " + restaurant + "!"
    //TODO: Update to new toast
    //notifyUpdate(editMessage)
    setParentOpen(!parentOpen)
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
          <DialogDescription>
            Foods:
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
          <Button onClick={handleDelete}> Update </Button>
          <Button onClick={backOne}> Cancel </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}