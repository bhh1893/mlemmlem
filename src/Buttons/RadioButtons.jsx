import { Label } from "@/components/ui/label"
import { useEffect } from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { getLevel, tierListSize, getColor } from '../constants/getLevel'

export function RadioButtons({ updateScore }) {
  const startValue = 'option0'
  useEffect(() => {
    updateScore('S')
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
      <div className="flex flex-nowrap">
        {[...Array(tierListSize)].map((x, i) => {
          let curLevel = getLevel(i)
          let curColor = getColor(i)
          let desc = 'option' + i
          return (
            <div key={i} className={curColor}>
              <div className="w-12 h-12 m-3 bg-gray-200 flex justify-center items-center">
                <div className="bg-gray-600 w-12 h-12 relative flex justify-center items-center z-0">
                  {curLevel}
                  <RadioGroupItem
                    value={desc}
                    curlevel={curLevel}
                    className="absolute text-yellow-500 inset-0 flex justify-center 
                               w-12 h-12 items-center z-10">
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
