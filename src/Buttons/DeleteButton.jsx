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
import { useToast } from "@/components/ui/use-toast"


export function DeleteButton({ r, cardOpen, setCardOpen, deleteRating }) {
  const [delOpen, setDelOpen] = useState(false);
  const { toast } = useToast()
  const title = r['title']

  function backOne() {
    setDelOpen(!delOpen)
  }

  function handleDelete() {
    const errMessage = "" + title + " has been deleted."
    deleteRating(title)
    setCardOpen(!cardOpen)
    toast({
      title: 'Rating Deleted.',
      description: errMessage,
      className: 'bg-black text-white'
    })
  }

  return (
    <>
      <Dialog open={delOpen} onOpenChange={setDelOpen}>
        <DialogTrigger asChild>
          <Button>
            Delete
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[500px] bg-slate-700 text-white">
          <DialogHeader>
            <DialogTitle>Are you sure you want to remove {title}?</DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={handleDelete}> Yes </Button>
            <Button onClick={backOne}> No </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}