import { useState, useRef } from "react";
import QueuePrioDash from '../../components/DashBoard/QueuePrioDash';
import useLocalStorage from "../../hooks/useLocalStorage";

type Que = { value: string | number, visible: boolean, priority: number }
type queueLocalStorage = [Que[], (value: Que[]) => void];

const Queue: React.FC = () => {

  const [que, changeQue] = useLocalStorage<Que[]>('Prioqueue', [
    { value: "2", visible: true, priority: 3 },
    { value: "1", visible: true, priority: 2  },
    { value: "5", visible: true, priority: 1  }]) as queueLocalStorage

  const [queValue, setQueValue] = useState<string | number>("");
  const [quePriority, setQueValuePriority] = useState<number>(0);

  const [topValue, setTopValue] = useState<string | number>("")

  const inputRef = useRef<HTMLInputElement>(null);
  

  let queues = que.map((qu, i) => (
    <div key={`queue ${i}`} className={!qu.visible ? "queDelete" :"que" }>
      <div className="queVal" >{qu.value}</div>
      <p>{qu.priority}</p>
    </div>
  ))

  const dequeue = () => {
    let newQueue = [...que]
    if (newQueue[0]) { newQueue[0].visible = false }
    changeQue(newQueue)
    setTimeout(() => {
      let update = newQueue.slice(1, newQueue.length)
      changeQue([])
      changeQue(update)
    }, 500)

  }

  const enqueue = (queValue: string | number, quePriority : number) => {
    const newQue = { value: queValue, visible: true, priority: quePriority }
    const updateQue = [...que]
    for (let i = 0; i <= updateQue.length ; i++ ) {
      if(!updateQue[i] || updateQue[i]?.priority < newQue.priority){
        updateQue.splice(i, 0, newQue)
        changeQue(updateQue)
        break
      }else{
        changeQue([...updateQue, newQue])
      }
    }
    setQueValue("")
    setQueValuePriority(0)
    inputRef.current?.focus()
  }

  const changeValue = (val: React.ChangeEvent<HTMLInputElement>) => {
    setQueValue(val.target.value)
  }

  const changePrioValue = (val: React.ChangeEvent<HTMLInputElement>) => {
    setQueValuePriority(val.target.valueAsNumber)
  }

  const keypressEnter = (event: React.KeyboardEvent) => {
    if (event.key == "Enter") {
      enqueue(queValue, quePriority )
    }
  }

  const peek = () => {
    let toppestVal = que[0]?.value || "";
    setTopValue(toppestVal)
  }

  const unPeek = () => {
    setTopValue("")
  }

  return (
    <div className="page">
      <QueuePrioDash
        dequeue={dequeue}
        queValue={queValue}
        enqueue={() => enqueue(queValue, quePriority)}
        changeValue={changeValue}
        inputRef={inputRef}
        keypressEnter={keypressEnter}
        peek={peek}
        unPeek={unPeek}
        topValue={topValue} 
        quePriority={quePriority}
        changePrioValue={changePrioValue} />
      <div id="queue">
        {queues}
      </div>

      <style>
        {`

        #queue {
          border-radius: 15px;
          width: 400px;
          height: 55vh;
          display: flex;
          flex-flow: column;
          justify-content: flex-start;
          align-items: center;
          background: #f3f3f3;
          margin-top: 10px;
          margin-bottom: 100px;
          padding-bottom: 20px;
        }

        .que {
          height: 11%;
          margin-top: 5px;
          border-radius: 8px;
          width: 340px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          background: #4CAF50;
          transition: transform 1.5s 0s, opacity 1.25s 0s;
          transform: translateX(0);
          animation: queueUp 500ms cubic-bezier(.68,-0.55,.27,1.55);
          transition-duration: 500ms;
          opacity: 1;
          color: white;
          font-weight: bolder;
        }

        .queVal{
          flex-grow: 8 ;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .queVal + p {
          flex: 0 0 40px;
          display: flex;
          height: 100%;
          margin: 0;
          justify-content: center;
          align-items: center;
          background-color: rgb(38, 107, 55);
          border-radius: 8px;
        }
        
        .queDelete {
          height: 40px;
          margin-top: 5px;
          border-radius: 8px;
          width: 340px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          background: #4CAF50;
          transition: transform 1.5s 0s, opacity 1.25s 0s;
          transform: translateX(0);
          animation-duration: 500ms;
          transition-duration: 500ms;
          transform: translateX(-50%);
          color: white;
          opacity: 0;
        }

        @keyframes queueUp {
          0% {
              transform: translateY(50px);
              opacity: 1;       
          }   
          100% {
              transform: translateY(0);
              opacity: 1; 
          }  

          @keyframes queueIn {
            0% {
                transform: translateX(50px);
                opacity: 0;       
            }   
            100% {
                transform: translateX(0);
                opacity: 1; 
            } 
        `}
      </style>
    </div>
  );
}

export default Queue;