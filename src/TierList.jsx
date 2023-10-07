import { getLevel, tierListSize } from './constants/getLevel'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TierList({ todoList }) {
  return (
    <Table>
      <TableHeader>
        <TableRow></TableRow>
      </TableHeader>
      <TableBody>
        {[...Array(tierListSize)].map((x, i) => {
          let curLevel = getLevel(i)
          return (
            <TableRow key={curLevel}>
              <TableCell>
                <div className='w-24 text-center p-6 border-2 border-indigo-500'>
                  {curLevel}
                </div>
                </TableCell>
              {todoList[i].map(todo => {
                return (
                  <TableCell className="border-2 font-medium">{todo}</TableCell>
                );
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
