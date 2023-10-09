import { useEffect } from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { getLevel, tierListSize, getColor } from '../constants/getLevel'

export function RadioButtons({ updateScore, start }) {
  const numLevel = getLevel(start)
  const startValue = `option${numLevel}`
  useEffect(() => {
    updateScore(start)
  }, []);


  function handleChange(e) {
    const num = e.replace(/\D/g, '');
    updateScore(getLevel(num))
  }

  return (
    <RadioGroup
      defaultValue={startValue}
      onValueChange={e => handleChange(e)}
    >
      <div className="flex rounded-md bg-slate-600 px-1">
        {[...Array(tierListSize)].map((x, i) => {
          let curLevel = getLevel(i)
          let curColor = getColor(i)
          let desc = 'option' + i
          let opts = `flex-1 my-2 mx-1 text-center bg-black ${curColor}`
          return (
            <div key={i} className={opts}>
              <div className="justify-self-auto">
                <div className='relative w-full'>
                  {curLevel}
                  <RadioGroupItem
                    value={desc}
                    curlevel={curLevel}
                    className="absolute inset-0 w-full text-black z-10">
                  </RadioGroupItem>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </RadioGroup>
  )
}
