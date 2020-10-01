type Sta = { value: (string | number), visible: boolean };

export interface StackElementProps {
  stack: Sta[]
}

const StackElement: React.FC<StackElementProps> = ({ stack }) => {
  return (<div id="stack">
    {stack.map((sta, i) => (
      <div key={`stack ${i}`} className={sta.visible ? "sta" : "staDelete"}>{sta.value}</div>
    ))}
  </div>);
}

export default StackElement;