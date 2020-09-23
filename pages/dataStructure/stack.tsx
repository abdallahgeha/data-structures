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
      <style>
        {`

        #stack {
          border-radius: 15px;
          width: 400px;
          height: 55vh;
          display: flex;
          flex-flow: column-reverse;
          justify-content: flex-start;
          align-items: center;
          background: #f3f3f3;
          margin-top: 10px;
          margin-bottom: 100px;
          padding-bottom: 20px;
        }

        .sta {
          height: 11%;
          margin-top: 5px;
          border-radius: 8px;
          width: 340px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #4CAF50;
          transition: transform 1.5s 0s, opacity 1.25s 0s;
          transform: translateX(0);
          animation-duration: 500ms;
          transition-duration: 500ms;
          opacity: 1;
          color: white;
          font-weight: bolder;
        }
        
        .staDelete {
          height: 40px;
          margin-top: 5px;
          border-radius: 8px;
          width: 340px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #4CAF50;
          transition: transform 1.5s 0s, opacity 1.25s 0s;
          transform: translateX(0);
          animation-duration: 500ms;
          transition-duration: 500ms;
          transform: translateX(-50%);
          opacity: 0;
        }
        
        .sta{
          animation: fallDown 500ms cubic-bezier(.68,-0.55,.27,1.55);
        }

        @keyframes fallDown {
          0% {
              transform: translateY(-50px);
              opacity: 0.0;       
          }   
          100% {
              transform: translateY(0);
              opacity: 1; 
          }  
        `}
      </style>
    </div>
  );
}

export default Stack;