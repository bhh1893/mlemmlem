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
              <TableCell className="font-medium">{curLevel}</TableCell>
              {todoList[i].map(todo => {
                return (
                  <TableCell className="font-medium">{todo}</TableCell>
                );
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
