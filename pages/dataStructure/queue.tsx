import { useState, useRef } from "react";
import QueueDash from '../../components/DashBoard/QueueDash';
import useLocalStorage from "../../hooks/useLocalStorage";

type Que = { value: string | number, visible: boolean }
type queueLocalStorage = [Que[], (value: Que[]) => void];

const Queue: React.FC = () => {

  const [que, changeQue] = useLocalStorage<Que[]>('queue', [
    { value: "2", visible: true },
    { value: "1", visible: true },
    { value: "5", visible: true }]) as queueLocalStorage

  const [queValue, setQueValue] = useState<string | number>("");
  const [topValue, setTopValue] = useState<string | number>("")

  const inputRef = useRef<HTMLInputElement>(null);

  let queues = que.map((qu, i) => (
    <div key={`queue ${i}`} className={qu.visible ? "que" : "queDelete"}>{qu.value}</div>
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

  const enqueue = (queValue: string | number) => {
    if (queValue) {
      changeQue([...que, { value: queValue, visible: true }])
      setQueValue("")
      inputRef.current?.focus()
    }
  }

  const changeValue = (val: React.ChangeEvent<HTMLInputElement>) => {
    setQueValue(val.target.value)
  }

  const keypressEnter = (event: React.KeyboardEvent) => {
    if (event.key == "Enter") {
      enqueue(queValue)
    }
  }

  const peek = () => {
    let toppestVal = que[que.length - 1]?.value || '';
    setTopValue(toppestVal)
  }

  const unPeek = () => {
    setTopValue("")
  }

  return (
    <div className="page">
      <QueueDash
        dequeue={dequeue}
        queValue={queValue}
        enqueue={enqueue}
        changeValue={changeValue}
        inputRef={inputRef}
        keypressEnter={keypressEnter}
        peek={peek}
        unPeek={unPeek}
        topValue={topValue} />
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
          justify-content: center;
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
        
        .queDelete {
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
        `}
      </style>
    </div>
  );
}

export default Queue;