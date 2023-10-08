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
import { useToast } from "@/components/ui/use-toast"


export function DeleteButton({ parentOpen, setParentOpen, deleteRating, restaurant }) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast()

  function backOne() {
    setOpen(!open)
  }

  function handleDelete() {
    const errMessage = "" + restaurant + " has been deleted."
    deleteRating(restaurant)
    setParentOpen(!parentOpen)
    toast({
      title: 'Rating Deleted.',
      description: errMessage,
      className: 'bg-black text-white'
    })
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            Delete
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[500px] bg-slate-700 text-white">
          <DialogHeader>
            <DialogTitle>Are you sure you want to remove {name}?</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                {name}
              </Label>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleDelete}> Yes </Button>
            <Button onClick={backOne}> No </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}