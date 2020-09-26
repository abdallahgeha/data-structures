import { RefObject } from "react";

export interface LinkedListProps {
  addAtHead: (headValue: string | number) => void,
  addAtTail: (tailValue: string | number) => void,
  popFromHead: () => void,
  popFromTail: () => void,
  find: (lookUpVal: string | number) => void,
  unFind: () => void,
  changeHeadValue: (val: React.ChangeEvent<HTMLInputElement>) => void,
  changeTailValue: (val: React.ChangeEvent<HTMLInputElement>) => void,
  changeLookValue: (val: React.ChangeEvent<HTMLInputElement>) => void,
  keypressHead: (e: React.KeyboardEvent) => void,
  keypressTail: (e: React.KeyboardEvent) => void,
  keypressLook: (e: React.KeyboardEvent) => void,
  headValue: string | number,
  tailValue: string | number,
  lookUpVal: string | number,
  inputHeadRef: RefObject<HTMLInputElement>
  inputTailRef: RefObject<HTMLInputElement>
  inputLookRef: RefObject<HTMLInputElement>
}

const LinkedDash: React.FC<LinkedListProps> = (
  { addAtHead,
    addAtTail,
    popFromHead,
    popFromTail,
    find,
    unFind,
    changeHeadValue,
    changeTailValue,
    changeLookValue,
    keypressHead,
    keypressTail,
    keypressLook,
    headValue,
    tailValue,
    lookUpVal,
    inputHeadRef,
    inputTailRef,
    inputLookRef
  }
) => {

  return (
    <>
      <div id="linkedDash">
        <div className="left">
          <div className="lineDash">
            <button onClick={popFromHead}>Remove Head</button>
            <div className="push">
              <button onClick={() => addAtHead(headValue)}>Add At Head</button>
              <input onChange={(e) => changeHeadValue(e)}
                value={headValue}
                type="text"
                ref={inputHeadRef}
                onKeyDown={keypressHead} />
            </div>
          </div>
          <div className="lineDash">
            <button onClick={popFromTail}>Remove Tail</button>
            <div className="push">
              <button onClick={() => addAtTail(tailValue)}>Add At Tail</button>
              <input onChange={(e) => changeTailValue(e)}
                value={tailValue}
                type="text"
                ref={inputTailRef}
                onKeyDown={keypressTail} />
            </div>
          </div>
        </div>

        <div className="lineDash rightDash">
          <div className="push">
            <button onMouseUp={unFind} onMouseDown={() => find(lookUpVal)}>Find</button>
            <input onChange={(e) => changeLookValue(e)}
              value={lookUpVal}
              type="text"
              ref={inputLookRef}
              onKeyDown={keypressLook}
            />
          </div>
        </div>

      </div>
      <style jsx>{`
      
  .left {
    
  }

  .lineDash {
    width: 98%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #4CAF50;
    margin-top: 10px;
    border-radius: 5px;
  }
  
  .lineDash .peek, .lineDash .push{
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .lineDash h3 {
    font-size: larger;
    color: white;
    text-align: center;
    width: 100px;
  }
  
  .lineDash button {
    height: 40px;
    width: 120px;
    background: #ffffff;
    border: none;
    color : #03641b;
    font-weight: bolder;
    border-radius: 8px;
  }

  #linkedDash {
    display: grid;
    grid-template-columns: 57% 43%;
  }

  #linkedDash button:hover {
    color : #ffffff;
    background: rgb(38, 107, 55);
    cursor: pointer;
  }
  
  #linkedDash button:active {
    outline: none;
    border: none;
  }
  
  #linkedDash input {
    padding: 5px;
    padding-left: 10px;
    margin-left: 5px;
    color: #03641b;
    font-weight: bold;
    border-radius: 8px;
    box-shadow: none;
  }

  .rightDash{
    height: 95%
  } 
  `}</style>
    </>
  );
}

export default LinkedDash;