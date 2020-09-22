import { useState, useRef } from "react";
import Linked from '../../components/linked'
import useLocalStorage from "../../hooks/useLocalStorage";

type Link = { 
  value: string | number, 
  visible: boolean ,
  next?: string
}
type stackLocalStorage = [Link[], (value: Link[]) => void];


const LinkedList: React.FC = () => {

  const [links, changeLinks] = useLocalStorage<Link[]>('links', [
    { value: "2", visible: true },
    { value: "1", visible: true },
    { value: "5", visible: true }]) as stackLocalStorage

  const [staValue, setStaValue] = useState<string | number>("");
  const [topValue, setTopValue] = useState<string | number>("")

  const inputRef = useRef<HTMLInputElement>(null);

  const popFromLinks = () => {
    let newLinks = [...links]
    if (newLinks[links.length - 1]) { newLinks[links.length - 1].visible = false }
    changeLinks(newLinks)
    setTimeout(() => {
      changeLinks(links.splice(0, links.length - 1))
    }, 350)


  }
  const pushToLinks = (staValue: string | number) => {

    if (staValue) {
      changeLinks([...links, { value: staValue, visible: true }])
      setStaValue("")
      inputRef.current?.focus()
    }
  }
  const changeValue = (val: React.ChangeEvent<HTMLInputElement>) => {
    setStaValue(val.target.value)
  }

  const keypressEnter = (e: React.KeyboardEvent) => {
    if (e.key == "Enter") {
      pushToLinks(staValue)
    }
  }

  const peek = () => {
    let toppestVal = links[links.length - 1]?.value || '';
    setTopValue(toppestVal)
  }

  const unPeek = () => {
    setTopValue("")
  }


  return (
    <div className="page">
      <div id="stackDash">
        <button onClick={popFromLinks}>POP</button>

        <div className="push">
          <button onClick={() => pushToLinks(staValue)}>PUSH</button>
          <input onChange={(e) => changeValue(e)}
            value={staValue}
            type="text"
            ref={inputRef}
            onKeyDown={keypressEnter}
          />

        </div>

        <div className="peek">
          <button onMouseDown={peek} onMouseUp={unPeek} >PEEK</button>
          <h3>{topValue}</h3>
        </div>


      </div>

      <Linked links={links}/>

    </div>
  );
}

export default LinkedList;