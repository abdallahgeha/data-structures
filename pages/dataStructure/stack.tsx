import { useState, useRef } from "react";
import useLocalStorage from '../../hooks/useLocalStorage'
import StackDash from '../../components/DashBoard/StackDash'

type Sta = { value: (string | number), visible: boolean };
type stackLocalStorage = [Sta[], (value: Sta[]) => void];

const Stack: React.FC = () => {
  const [stack, changeStack] = useLocalStorage<Sta[]>('sta', [
    { value: "2", visible: true },
    { value: "1", visible: true },
    { value: "5", visible: true }]) as stackLocalStorage;

  const [staValue, setStaValue] = useState<string | number>("");
  const [topValue, setTopValue] = useState<string | number>("");

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
      <StackDash
        popFromStack={popFromStack}
        staValue={staValue}
        pushToStack={pushToStack}
        changeValue={changeValue}
        inputRef={inputRef}
        keypressEnter={keypressEnter}
        peek={peek}
        unPeek={unPeek}
        topValue={topValue} />
      <div id="stack">{stacks}</div>
    </div>
  );
}

export default Stack;