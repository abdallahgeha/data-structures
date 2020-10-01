import { useState, useRef } from "react";
import HashTableDash from '../../components/DashBoard/HashTableDash';
import HashElement from '../../components/Elements/HashElements'

type Hash = { key: string, value: (string | number), visible: boolean, randIndex: number };

const Stack: React.FC = () => {

  const randomizer = () => Math.floor(Math.random() * 255)

  const [hashTable, changeHashTable] = useState<Hash[]>([
    { key: "First Name", value: "John", visible: true, randIndex: randomizer() },
    { key: "Last Name", value: "Smith", visible: true, randIndex: randomizer() },
    { key: "Age", value: "27", visible: true, randIndex: randomizer() }]);

  const [hashKey, setHashKey] = useState<string>("");
  const [hashValue, setHashValue] = useState<string | number>("");

  const inputKeyRef = useRef<HTMLInputElement>(null);

  const addNewEntry = (hashKey: string, hashValue: string | number) => {
    let hashKeyArray = hashTable.map(e => e.key)
    let isIncluded = hashKeyArray.includes(hashKey)
    if (isIncluded) {
      const tempHashTable = [...hashTable]
      const newHashTable = tempHashTable.map(e => {
        if (e.key == hashKey) {
          e.value = hashValue
        }
        return e
      })
      changeHashTable(newHashTable)
    }
    else if (hashKey && hashValue) {
      changeHashTable([...hashTable, { key: hashKey, value: hashValue, visible: true, randIndex: randomizer() }])
    }
    setHashValue("")
    setHashKey("")
    inputKeyRef.current?.focus()
  }

  const changeKey = (val: React.ChangeEvent<HTMLInputElement>) => {
    setHashKey(val.target.value)
  }

  const changeValue = (val: React.ChangeEvent<HTMLInputElement>) => {
    setHashValue(val.target.value)
  }

  const keypressEnter = (e: React.KeyboardEvent) => {
    if (e.key == "Enter") {
      addNewEntry(hashKey, hashValue)
    }
  }


  return (
    <div className="page">
      <HashTableDash
        hashKey={hashKey}
        hashValue={hashValue}
        inputKeyRef={inputKeyRef}
        addNewEntry={addNewEntry}
        changeKey={changeKey}
        changeValue={changeValue}
        keypressEnter={keypressEnter}
      />

      <HashElement hashTable={hashTable} />

      <style>
        {`

        .value {
          width: 100%;
          height: 11%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 5px;
          animation: showUp 1000ms cubic-bezier(.68,-0.55,.27,1.55);
        }

        .hash {
          width: 100%;
          display: flex;
        }

        .blackBox {
          background: black;
          width: 10%;
          height: 55vh;
          margin-top: 10px;
          margin-bottom: 100px;
          margin-left: 5%;
          margin-right: 5%;
          padding-bottom: 20px;
          border-radius: 15px;
          color: white;
          writing-mode:vertical-lr;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
        }

        #stack, .hashMap {
          border-radius: 15px;
          width: 40%;
          height: 55vh;
          display: flex;
          flex-flow: column;
          justify-content: flex-start;
          align-items: center;
          background: #f3f3f3;
          margin-top: 10px;
          margin-bottom: 100px;
          padding-bottom: 20px;
          position: relative;
        }
        
        #stack {
          justify-content: center
        }

        .sta {
          height: 11%;
          margin-top: 5px;
          border-radius: 8px;
          width: 95%;
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

        .val, .index {
          height: 95%;
          margin-top: 5px;
          border-radius: 8px;
          width: 80%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f3f3f3;
          transition: transform 1.5s 0s, opacity 1.25s 0s;
          transform: translateX(0);
          animation-duration: 500ms;
          transition-duration: 500ms;
          opacity: 1;
          color: black;
          font-weight: bolder;
          border: 1px solid black;
        }

        .index {
          width: 15%;
        }

        .sta:hover {
          cursor: pointer;
        }
        
        .staDelete {
          height: 40px;
          margin-top: 5px;
          border-radius: 8px;
          width: 95%;
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
              transform: translateX(-50px);
              opacity: 0.0;       
          }   
          100% {
              transform: translateX(0);
              opacity: 1; 
          } 
        }
          
        @keyframes showUp {
          0% {
            opacity: 0.0;       
          }   
          100% {
            opacity: 1; 
          } 
        }
        `}
      </style>
    </div>
  );
}

export default Stack;