import { useState, useRef } from "react";
import Linked from '../../components/linked'

export interface LinkedListProps {

}

type Link = { 
  value: string | number, 
  visible: boolean ,
  next?: string
}


const LinkedList: React.SFC<LinkedListProps> = () => {

  const [stack, changeStack] = useState<Link[]>([
    { value: "2", visible: true },
    { value: "1", visible: true },
    { value: "5", visible: true }])

  const [staValue, setStaValue] = useState<string | number>("");
  const [topValue, setTopValue] = useState<string | number>("")

  const inputRef = useRef<HTMLInputElement>(null);

  let stacks = stack.map((sta, i) => (
    <div key={`stack ${i}`} className={sta.visible ? "sta" : "staDelete"}>{sta.value}</div>
  ))

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

      <Linked stack={stack}/>

    </div>
  );
}

export default LinkedList;