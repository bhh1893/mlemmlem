import { getLevel, tierListSize } from './constants/getLevel'
import { OneTier } from './OneTier'

export function TierList({ todoList }) {
  return (
    <>
      <h1 className='header'>Tier List</h1>
      {[...Array(tierListSize)].map((x, i) => {
        let curLevel = getLevel(i)
        return (
          <div key={i}>
            <OneTier todoList={todoList} level={i}/>
          </div>
        )
      })}
    </>
  );
}
