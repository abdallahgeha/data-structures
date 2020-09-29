import { RefObject } from "react";

export interface HashTableDashProps {
  hashKey: string,
  hashValue: string | number,
  inputKeyRef: RefObject<HTMLInputElement>,
  addNewEntry: (hashKey: string, hashValue: string | number) => void,
  changeKey: (changeVal: React.ChangeEvent<HTMLInputElement>) => void,
  changeValue: (changeKey: React.ChangeEvent<HTMLInputElement>) => void,
  keypressEnter: (e: React.KeyboardEvent) => void,
}

const HashTableDash: React.FC<HashTableDashProps> = (
  { hashKey,
    hashValue,
    inputKeyRef,
    addNewEntry,
    changeKey,
    changeValue,
    keypressEnter }
) => {

  return (
    <>
      <div id="HashTableDash">
        <div className="push">
          <button onClick={() => addNewEntry(hashKey, hashValue)}>Add Entry</button>
          <input onChange={(e) => changeKey(e)}
            value={hashKey}
            type="text"
            ref={inputKeyRef}
            onKeyDown={keypressEnter} />
          <input onChange={(e) => changeValue(e)}
            value={hashValue}
            type="text"
            onKeyDown={keypressEnter} />
        </div>
      </div>
      <style jsx>{`
  #HashTableDash {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #4CAF50;
    margin-top: 10px;
  }
  
  #HashTableDash .peek, #HashTableDash .push{
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  #HashTableDash h3 {
    font-size: larger;
    color: white;
    text-align: center;
    width: 100px;
  }
  
  #HashTableDash button {
    height: 40px;
    width: 120px;
    background: #ffffff;
    border: none;
    color : #03641b;
    font-weight: bolder;
    border-radius: 8px;
  }
  
  #HashTableDash button:hover {
    color : #ffffff;
    background: rgb(38, 107, 55);
    cursor: pointer;
  }
  
  #HashTableDash button:active {
    outline: none;
    border: none;
  }
  
  #HashTableDash input {
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

export default HashTableDash;