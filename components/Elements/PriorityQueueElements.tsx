type PriotiryQue = { value: string | number, visible: boolean, priority: number }

export interface PriotiryQueueElementsProps {
  priorityQueue: PriotiryQue[]
}

const PriotiryQueueElements: React.FC<PriotiryQueueElementsProps> = ({ priorityQueue }) => {
  return (
    <div id="queue">
      {priorityQueue.map((qu, i) => (
        <div key={`queue ${i}`} className={!qu.visible ? "queDelete" : "que"}>
          <div className="queVal" >{qu.value}</div>
          <p>{qu.priority}</p>
        </div>
      ))}
    </div>
  );
}

export default PriotiryQueueElements;