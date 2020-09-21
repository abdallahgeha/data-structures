import { useState, useRef } from "react";
import DoublyLinked from '../../components/doublyLinked'

export interface StackProps {

}

type DoublyLink = { 
  value: string | number, 
  visible: boolean ,
  next?: string,
  previous? : string
}

const Stack: React.SFC<StackProps> = () => {

  const [stack, changeStack] = useState<DoublyLink[]>([
    { value: "2", visible: true },
    { value: "1", visible: true },
    { value: "5", visible: true }])

  const [staValue, setStaValue] = useState<string | number>("");
  const [topValue, setTopValue] = useState<string | number>("")

  const inputRef = useRef<HTMLInputElement>(null);

  const popFromStack = () => {
    let newStack = [...stack]
    if (newStack[stack.length - 1]) { newStack[stack.length - 1].visible = false }
    changeStack(newStack)
    setTimeout(() => {
      changeStack(stack.splice(0, stack.length - 1))
    }, 350)


  }
  const pushToStack = (staValue: string | number) => {

    if (staValue) {
      changeStack([...stack, { value: staValue, visible: true }])
      setStaValue("")
      inputRef.current?.focus()
    }
  }
  const changeValue = (val: React.ChangeEvent<HTMLInputElement>) => {
    setStaValue(val.target.value)
  }

  const keypressEnter = (e: React.KeyboardEvent) => {
    if (e.key == "Enter") {
      pushToStack(staValue)
    }
  }

  const peek = () => {
    let toppestVal = stack[stack.length - 1]?.value || '';
    setTopValue(toppestVal)
  }

  const unPeek = () => {
    setTopValue("")
  }


  return (
    <div className="page">
      <div id="stackDash">
        <button onClick={popFromStack}>POP</button>

        <div className="push">
          <button onClick={() => pushToStack(staValue)}>PUSH</button>
          <input onChange={(e) => changeValue(e)}
            value={staValue}
            type="text"
            ref={inputRef}
            onKeyDown={keypressEnter}
          />

        </div>

        <div className="peek">
          <button onMouseDown={peek} onMouseUp={unPeek} >PEEK</button>
          <h3>{topValue}</h3>
        </div>


      </div>

      <DoublyLinked stack={stack} />

    </div>
  );
}

export default Stack;