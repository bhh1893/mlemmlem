import { getLevel } from './constants/getLevel'

export function OneTier({ todoList, level }) {
  return (
    <>
      <h3 className="header">Tier {getLevel(level)}</h3>
      {todoList[level].map(todo => {
        return (
          <li key={todo}>
            <label>
              {todo}
            </label>
          </li>
        );
      })}
    </>
  )
}