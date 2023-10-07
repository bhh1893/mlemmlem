import { getLevel } from './constants/getLevel'
import './index.css'

export function OneTier({ todoList, level }) {
  return (
    <>
      <table className="table-fixed flex">
        <thead className='w-32 outline-dashed place-self-center'>
          <tr>
            <th className='p-5 outline-none'>{getLevel(level)}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {todoList[level].map(todo => {
              return (
                <td className='p-5 outline-double'>
                  <label>
                    {todo}
                  </label>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </>
  )
}