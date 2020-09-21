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

  let queues = que.map((sta, i) => (
    <div key={`stack ${i}`} className={sta.visible ? "sta" : "staDelete"}>{sta.value}</div>
  ))

  const dequeue = () => {
    let newStack = [...que]
    if (newStack[que.length - 1]) { newStack[que.length - 1].visible = false }
    changeQue(newStack)
    setTimeout(() => {
      changeQue(que.splice(0, que.length - 1))
    }, 350)

  }

  const enqueue = (queValue: string | number) => {
    if (queValue) {
      changeQue([{ value: queValue, visible: true }, ...que])
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
    </div>
  );
}

export default Queue;