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
    <>
      <div id="stackDash">
        <button onClick={popFromStack}>POP</button>
        <div className="push">
          <button onClick={() => pushToStack(staValue)}>PUSH</button>
          <input onChange={(e) => changeValue(e)}
            value={staValue}
            type="text"
            ref={inputRef}
            onKeyDown={keypressEnter} />
        </div>
        <div className="peek">
          <button onMouseDown={peek} onMouseUp={unPeek} >PEEK</button>
          <h3>{topValue}</h3>
        </div>
      </div>
      <style jsx>{`
  #stackDash {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #4CAF50;
    margin-top: 10px;
  }
  
  #stackDash .peek, #stackDash .push{
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  #stackDash h3 {
    font-size: larger;
    color: white;
    text-align: center;
    width: 100px;
  }
  
  #stackDash button {
    height: 40px;
    width: 120px;
    background: #ffffff;
    border: none;
    color : #03641b;
    font-weight: bolder;
    border-radius: 8px;
  }
  
  #stackDash button:hover {
    color : #ffffff;
    background: rgb(38, 107, 55);
    cursor: pointer;
  }
  
  #stackDash button:active {
    outline: none;
    border: none;
  }
  
  #stackDash input {
    padding: 5px;
    margin-left: 5px;
    color: #03641b;
    font-weight: bold;
    border-radius: 8px;
    box-shadow: none;
    padding-left: 10px;
  }
  `}</style>
    </>
  );
}

export default StackDash;