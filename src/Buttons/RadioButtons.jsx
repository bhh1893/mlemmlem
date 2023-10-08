import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { getLevel, tierListSize, getColor } from '../constants/getLevel'

export function RadioButtons() {
  return (
    <RadioGroup defaultValue="option1">
      <div className="flex flex-nowrap">
      {[...Array(tierListSize)].map((x, i) => {
        let curLevel = getLevel(i)
        let curColor = getColor(i)
        let desc = 'option' + i
        return (
          <div key={i} className={curColor}>
            <div className="flex p-3 m-3 border border-spacing-5 items-center space-x-2">
              <RadioGroupItem value={desc} id={desc} />
              <Label htmlFor={desc}>{curLevel}</Label>
            </div>
          </div>
        )
      })} 
      </div>
    </RadioGroup>
  )
}
