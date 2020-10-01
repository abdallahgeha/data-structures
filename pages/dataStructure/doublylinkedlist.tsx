import { useState, useRef } from "react";
import DoublyLinked from '../../components/Elements/doublyLinked';
import LinkedDash from '../../components/DashBoard/LinkedListDash'

type DoublyLink = {
  value: string | number,
  visible: boolean,
  found: boolean
}

type DoublyLinkLocalStorage = [DoublyLink[], (value: DoublyLink[]) => void];

const DoublyLinkedList: React.FC = () => {

  const [links, changeLinks] = useState<DoublyLink[]>([
    { value: "2", visible: true, found: false },
    { value: "1", visible: true, found: false },
    { value: "5", visible: true, found: false }]) as DoublyLinkLocalStorage

  const [headValue, setHeadValue] = useState<string | number>("");
  const [tailValue, setTailValue] = useState<string | number>("");
  const [lookUpVal, setLookUpVal] = useState<string | number>("");

  const inputHeadRef = useRef<HTMLInputElement>(null);
  const inputTailRef = useRef<HTMLInputElement>(null);
  const inputLookRef = useRef<HTMLInputElement>(null);

  const popFromHead = () => {
    let newLinks = [...links]
    if (newLinks[0]) { newLinks[0].visible = false }
    changeLinks(newLinks)
    setTimeout(() => {
      let update = newLinks.slice(1, newLinks.length)
      changeLinks(update)
    }, 350)
  }

  const popFromTail = () => {
    let newLinks = [...links]
    if (newLinks[links.length - 1]) { newLinks[links.length - 1].visible = false }
    changeLinks(newLinks)
    setTimeout(() => {
      changeLinks(links.splice(0, links.length - 1))
    }, 350)
  }

  const addAtTail = (tailValue: string | number) => {

    if (tailValue) {
      changeLinks([...links, { value: tailValue, visible: true, found: false }])
      setTailValue("")
      inputTailRef.current?.focus()
    }
  }

  const addAtHead = (headValue: string | number) => {
    if (headValue) {
      changeLinks([{ value: headValue, visible: true, found: false }, ...links])
      setHeadValue("")
      inputHeadRef.current?.focus()
    }
  }

  const changeHeadValue = (val: React.ChangeEvent<HTMLInputElement>) => {
    setHeadValue(val.target.value)
  }

  const changeTailValue = (val: React.ChangeEvent<HTMLInputElement>) => {
    setTailValue(val.target.value)
  }

  const changeLookValue = (val: React.ChangeEvent<HTMLInputElement>) => {
    setLookUpVal(val.target.value)
  }
  
  const find = (lookUpValue: string | number) => {
    const foundLinks = [...links]
    for (const link of links) {
      if(link.value == lookUpValue){
        link.found = true
      }
    }
    
    changeLinks(foundLinks)
    inputLookRef.current?.focus()
  }
  
  const unFind = () => {
    const foundLinks = [...links]
    for (const link of links) {
      link.found = false
    }
    
    changeLinks(foundLinks)
  }

  const keypressHead = (e: React.KeyboardEvent) => {
    if (e.key == "Enter") {
      addAtHead(headValue)
    }
  }

  const keypressTail = (e: React.KeyboardEvent) => {
    if (e.key == "Enter") {
      addAtTail(tailValue)
    }
  }
  
  const keypressLook = (e: React.KeyboardEvent) => {
    if (e.key == "Enter") {
      find(lookUpVal)
    }
  }


  return (
    <div className="page">
      <LinkedDash
        addAtHead={(headValue) => addAtHead(headValue)}
        addAtTail={(tailValue) => addAtTail(tailValue)}
        popFromHead={popFromHead}
        popFromTail={popFromTail}
        find={(lookUpVal) => find(lookUpVal)}
        unFind={unFind}
        changeHeadValue={changeHeadValue}
        changeTailValue={changeTailValue}
        changeLookValue={changeLookValue}
        keypressHead={keypressHead}
        keypressTail={keypressTail}
        keypressLook={keypressLook}
        headValue={headValue}
        tailValue={tailValue}
        lookUpVal={lookUpVal}
        inputHeadRef={inputHeadRef}
        inputTailRef={inputTailRef}
        inputLookRef={inputLookRef}
      />

      <DoublyLinked links={links} />

    </div>
  );
}

export default DoublyLinkedList;