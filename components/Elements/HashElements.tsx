type Hash = { key: string, value: (string | number), visible: boolean, randIndex: number };

export interface HashElementProps {
  hashTable: Hash[]
}

const HashElement: React.FC<HashElementProps> = ({ hashTable }) => {

  const values = () => {
    const randomized = hashTable.sort((a, b) => (a.randIndex - b.randIndex))

    return randomized.map((hashT, i) => {
      return (
        <div key={`allval ${i}`} className="value">
          <div key={`index ${i}`} className='index'>{hashT.randIndex}</div>
          <div key={`value ${i}`} className={hashT.visible ? "val" : "staDelete"}>{hashT.value}</div>
        </div>
      )
    })
  }

  return (
    <div className="hash">
      <div id="stack">{
        hashTable.map((hashT, i) => (
          <div key={`key ${i}`} className={hashT.visible ? "sta" : "staDelete"}>{hashT.key}</div>
        ))
      }</div>
      <div className="blackBox">BLACK BOX</div>
      <div className="hashMap">{values()}</div>
    </div>


  );
}

export default HashElement;