import { RefObject } from "react";

export interface StackDashProps {
  popFromStack: () => void,
  staValue: string | number,
  pushToStack: (staValue: string | number) => void,
  changeValue: (val: React.ChangeEvent<HTMLInputElement>) => void,
  inputRef: RefObject<HTMLInputElement>,
  keypressEnter: (e: React.KeyboardEvent) => void,
  peek: () => void,
  unPeek: () => void,
  topValue: string | number
}

const StackDash: React.FC<StackDashProps> = (
  { popFromStack,
    staValue,
    pushToStack,
    changeValue,
    inputRef,
    keypressEnter,
    peek,
    unPeek,
    topValue }
) => {

  return (
    <div id="stackDash">
      <button onClick={popFromStack}>POP</button>
      <div className="push">
        <button onClick={() => pushToStack(staValue)}>PUSH</button>
        <input onChange={(e) => changeValue(e)}
          value={staValue}
          type="text"
          ref={inputRef}
          onKeyDown={keypressEnter}/>
      </div>
      <div className="peek">
        <button onMouseDown={peek} onMouseUp={unPeek} >PEEK</button>
        <h3>{topValue}</h3>
      </div>
    </div>
  );
}

export default StackDash;