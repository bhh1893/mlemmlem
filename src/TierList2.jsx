import { getLevel, tierListSize } from './constants/getLevel'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function TierList2({ todoList }) {
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
        return (
          <div className="flex flex-nowrap bg-black border-b-4 border-yellow-500" key={i}>
            <div className='flex flex-none w-14 h-auto text-center p-5 m-5 snap-x snap-proximity'>
              {curLevel}
            </div>
            <div className='flex flex-none w-2 h-fill bg-white'></div>
            <div className='flex flex-nowrap border-solid 
                            overflow-x-auto scroll-smooth no-scrollbar snap-always snap-start'
              onWheel={handleScroll}
            >
              {todoList[i].map(todo => {
                return (
                  <HoverCard key={todo}>
                    <HoverCardTrigger 
                      className='p-5 m-3 shrink-0 w-25 border-solid text-center
                                bg-blue-500 border-2 border-white'
                    >
                      {todo}
                    </HoverCardTrigger>
                    <HoverCardContent className='p-0 border-4 text-center border-slate-200 bg-black text-white'>
                      <p> Last Went: </p>
                      <p> Food Eaten: </p>
                      <p> Add more details here? Idk </p>
                      <p> TODO: Change this later </p>
                      <p> La la la </p>
                    </HoverCardContent>
                  </HoverCard>
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