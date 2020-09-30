import { RefObject } from "react";

export interface ArrayDashProps {
  popFromArray: () => void,
  shiftFromArray: () => void,
  elementVal: string | number,
  pushToArray: (elementValue: string | number) => void,
  changeValue: (val: React.ChangeEvent<HTMLInputElement>) => void,
  inputRef: RefObject<HTMLInputElement>,
  keypressEnter: (e: React.KeyboardEvent) => void
}

const ArrayDash: React.FC<ArrayDashProps> = (
  { popFromArray,
    shiftFromArray,
    elementVal,
    pushToArray,
    changeValue,
    inputRef,
    keypressEnter }
) => {

  return (
    <>
      <div id="arrayDash">
        <button onClick={popFromArray}>POP</button>
        <button onClick={shiftFromArray}>SHIFT</button>
        <div className="push">
          <button onClick={() => pushToArray(elementVal)}>PUSH</button>
          <input onChange={(e) => changeValue(e)}
            value={elementVal}
            type="text"
            ref={inputRef}
            onKeyDown={keypressEnter} />
        </div>
      </div>
      <style jsx>{`
  #arrayDash {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #4CAF50;
    margin-top: 10px;
  }
  
  #arrayDash .peek, #arrayDash .push{
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  #arrayDash h3 {
    font-size: larger;
    color: white;
    text-align: center;
    width: 100px;
  }
  
  #arrayDash button {
    height: 40px;
    width: 120px;
    background: #ffffff;
    border: none;
    color : #03641b;
    font-weight: bolder;
    border-radius: 8px;
  }
  
  #arrayDash button:hover {
    color : #ffffff;
    background: rgb(38, 107, 55);
    cursor: pointer;
  }
  
  #arrayDash button:active {
    outline: none;
    border: none;
  }
  
  #arrayDash input {
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

export default ArrayDash;