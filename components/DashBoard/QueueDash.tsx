import { RefObject } from "react";

export interface StackDashProps {
  dequeue: () => void,
  queValue: string | number,
  enqueue: (queValue: string | number) => void,
  changeValue: (val: React.ChangeEvent<HTMLInputElement>) => void,
  inputRef: RefObject<HTMLInputElement>,
  keypressEnter: (e: React.KeyboardEvent) => void,
  peek: () => void,
  unPeek: () => void,
  topValue: string | number
}

const StackDash: React.FC<StackDashProps> = (
  { dequeue,
    queValue,
    enqueue,
    changeValue,
    inputRef,
    keypressEnter,
    peek,
    unPeek,
    topValue }
) => {

  return (
    <div id="stackDash">
      <button onClick={dequeue}>POP</button>
      <div className="push">
        <button onClick={() => enqueue(queValue)}>PUSH</button>
        <input onChange={(e) => changeValue(e)}
          value={queValue}
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