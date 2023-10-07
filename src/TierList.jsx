import { getLevel, tierListSize } from './constants/getLevel'
import { OneTier } from './OneTier'
import './index.css'

export function TierList({ todoList }) {
  return (
    <div className='m-5'>
      <h1 className='text-center m-3 text-3xl font-bold'>Tier List</h1>
      <div>
        {[...Array(tierListSize)].map((x, i) => {
          let curLevel = getLevel(i)
          return (
            <div key={i}>
              <OneTier todoList={todoList} level={i}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}
