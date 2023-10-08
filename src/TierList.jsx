import { SingleObj } from './SingleObj';
import { getLevel, tierListSize, getColor } from './constants/getLevel'

export function TierList({ todoList, deleteRating }) {
  function handleScroll(e) {
    // here im handling the horizontal scroll inline, without the use of hooks
    const strength = Math.abs(e.deltaY);
    if (e.deltaY === 0) return;

    const el = e.currentTarget;
    if (
      !(el.scrollLeft === 0 && e.deltaY < 0) &&
      !(
        el.scrollWidth -
        el.clientWidth -
        Math.round(el.scrollLeft) ===
        0 && e.deltaY > 0
      )
    ) {
    }
    el.scrollTo({
      left: el.scrollLeft + e.deltaY,
      // large scrolls with smooth animation behavior will lag, so switch to auto
      behavior: strength > 70 ? "auto" : "smooth",
    });
  }

  return (
    <>
      {[...Array(tierListSize)].map((x, i) => {
        let curLevel = getLevel(i)
        let curColor = getColor(i)
        return (
          <div className="flex flex-nowrap bg-gray-800 border-b-4 border-black" key={i}>
            <div 
              className='flex flex-none w-14 h-auto text-center p-5 m-5 snap-x snap-proximity
                        text-lg font-bold {curColor}'
            >
              <div className={curColor}>
                {curLevel}
              </div>
            </div>
            <div className='flex flex-none w-1 h-fill bg-black mr-3'></div>
            <div 
              className='flex flex-nowrap border-solid 
                         overflow-x-auto scroll-smooth no-scrollbar snap-always snap-start'
              onWheel={handleScroll}
            >
              {todoList[i].map(todo => {
                return (
                  <SingleObj name={todo} deleteRating={deleteRating} key={todo}/>
                );
              })}
            </div>
            <div className='flex flex-none w-2'></div>
          </div>
        )
      })}
    </>
  )
}