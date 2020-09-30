import { useState, useRef } from "react";
import useLocalStorage from '../../hooks/useLocalStorage'
import ArrayDash from '../../components/DashBoard/ArrayDash'

type arrayElement = { value: (string | number), visible: boolean };
type arrayLocalStorage = [arrayElement[], (value: arrayElement[]) => void];

const Array: React.FC = () => {

  const [theArray, settheArray] = useLocalStorage<arrayElement[]>('array', [
    { value: "John", visible: true },
    { value: "Adam", visible: true },
    { value: "Lisa", visible: true }]) as arrayLocalStorage;

  const [elementVal, setElementVal] = useState<string | number>("");

  const inputValRef = useRef<HTMLInputElement>(null);

  let values = theArray.map((element, i) =>
    (<div key={`allval ${i}`} className={element.visible ? "value" : "staDelete"}>
      <div key={`index ${i}`} className='index'>{i}</div>
      <div key={`value ${i}`} className="val">{element.value}</div>
    </div>))

  const popFromArray = () => {
    const newArray = [...theArray]
    if (newArray[newArray.length - 1]) {
      newArray[newArray.length - 1].visible = false
      settheArray(newArray)
      setTimeout(() => {
        newArray.pop()
        settheArray([...newArray])
      }, 500)
    }
  }

  const shiftFromArray = () => {
    const newArray = [...theArray]
    if (newArray[0]) {
      newArray[0].visible = false
      settheArray(newArray)
      setTimeout(() => {
        newArray.shift()
        settheArray([...newArray])
      }, 500)
    }
  }

  const changeValue = (val: React.ChangeEvent<HTMLInputElement>) => {
    setElementVal(val.target.value)
  }

  const pushToArray = (elementVal: string | number) => {
    if (elementVal) {
      const newArray = [...theArray]
      newArray.push({ value: elementVal, visible: true })
      settheArray(newArray)
      setElementVal("")
    }
  }

  const keypressEnter = (e: React.KeyboardEvent) => {
    if (e.key == "Enter") {
      pushToArray(elementVal)
    }
  }


  return (
    <div className="page">
      <ArrayDash
        popFromArray={popFromArray}
        shiftFromArray={shiftFromArray}
        elementVal={elementVal}
        pushToArray={pushToArray}
        changeValue={changeValue}
        inputRef={inputValRef}
        keypressEnter={keypressEnter}
      />
      <div className="hash">
        <div className="hashMap">{values}</div>
      </div>
      <style>
        {`

        .value {
          width: 100%;
          height: 11%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 5px;
          animation: fallDown 1000ms cubic-bezier(.68,-0.55,.27,1.55);
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
          width: 100%;
          height: 11%;
          margin-top: 5px;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: translateX(0);
          transition-duration: 500ms;
          transform: translateX(-50%);
          opacity: 0;
        }
        

        @keyframes fallDown {
          0% {
              transform: translateX(50px);
              opacity: 0.0;       
          }   
          100% {
              transform: translateX(0);
              opacity: 1; 
          } 
        }
        `}
      </style>
    </div>
  );
}

export default Array;