type Que = { value: string | number, visible: boolean }

export interface QueueElementsProps {
  queue: Que[]
}

const QueueElements: React.FC<QueueElementsProps> = ({ queue }) => {
  return (<div id="queue">
    {queue.map((qu, i) => (
      <div key={`queue ${i}`} className={qu.visible ? "que" : "queDelete"}>{qu.value}</div>
    ))}
  </div>);
}

export default QueueElements;