import { RefObject } from "react";

export interface QueuePrioDashProps {
    dequeue: () => void,
    queValue: string | number,
    enqueue: (queValue: string | number) => void,
    changeValue: (val: React.ChangeEvent<HTMLInputElement>) => void,
    changePrioValue: (val: React.ChangeEvent<HTMLInputElement>) => void,
    inputRef: RefObject<HTMLInputElement>,
    keypressEnter: (e: React.KeyboardEvent) => void,
    peek: () => void,
    unPeek: () => void,
    topValue: string | number,
    quePriority: number
}

const QueuePrioDash: React.FC<QueuePrioDashProps> = (
    { dequeue,
        queValue,
        enqueue,
        changeValue,
        inputRef,
        keypressEnter,
        changePrioValue,
        peek,
        unPeek,
        topValue,
        quePriority }
) => {

    return (
        <>
            <div id="queueDash">
                <button onClick={dequeue}>DEQUEUE</button>
                <div className="push">
                    <button onClick={() => enqueue(queValue)}>ENQUEUE</button>
                    <input onChange={(e) => changeValue(e)}
                        value={queValue}
                        type="text"
                        ref={inputRef}
                        onKeyDown={keypressEnter} />
                    <input 
                        className="prio"
                        onChange={(e) => changePrioValue(e)}
                        value={quePriority}
                        type="number"
                        onKeyDown={keypressEnter} />
                </div>
                <div className="peek">
                    <button onMouseDown={peek} onMouseUp={unPeek} >PEEK</button>
                    <h3>{topValue}</h3>
                </div>
            </div>
            <style jsx>{`
  #queueDash {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #4CAF50;
    margin-top: 10px;
  }
  
  #queueDash .peek, #queueDash .push{
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  #queueDash h3 {
    font-size: larger;
    color: white;
    text-align: center;
    width: 100px;
  }
  
  #queueDash button {
    height: 40px;
    width: 120px;
    background: #ffffff;
    border: none;
    color : #03641b;
    font-weight: bolder;
    border-radius: 8px;
  }
  
  #queueDash button:hover {
    color : #ffffff;
    background: rgb(38, 107, 55);
    cursor: pointer;
  }
  
  #queueDash button:active {
    outline: none;
    border: none;
  }
  
  #queueDash input {
    padding: 5px;
    padding-left: 10px;
    margin-left: 5px;
    color: #03641b;
    font-weight: bold;
    border-radius: 8px;
    box-shadow: none;
  }

  #queueDash input.prio {
      width: 30px;
  }
  `}</style>
        </>
    );
}

export default QueuePrioDash;