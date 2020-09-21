import { ArcherContainer, ArcherElement } from 'react-archer';
const rowStyle = { margin: '0', display: 'flex', justifyContent: 'space-between', }
const evenBoxStyle = { marginTop: '0px', color: 'white', background: '#4CAF50', height: '60px', width: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bolder' as const };
const oddBoxStyle = { marginTop: '140px', color: 'white', background: '#4CAF50', height: '60px', width: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bolder' as const };
const borderBoxStyle = { marginTop: '50px', color: 'white', background: '#3d3d3d', height: '60px', width: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bolder' as const };
const arrow = { strokeColor: '#03641b', strokeWidth: 3 };


export interface LinkList {
  value: (string | number),
  visible: boolean
}

export interface LinkedProps {
  stack: LinkList[]
}


const Linked: React.SFC<LinkedProps> = ({ stack }) => {
  return (
    <div id="link">
      <ArcherContainer strokeColor='red' >

        <div style={rowStyle}>
          <ArcherElement
            id="HEAD"
            relations={[{
              targetId: (stack.length !== 0 ) ? 'element1' : 'NULL',
              targetAnchor: 'left',
              sourceAnchor: 'right',
              style: arrow,
              label: <div style={{ marginTop: '-20px' }}></div>,
            }]}
          >
            <div style={borderBoxStyle}>HEAD</div>
          </ArcherElement>

          {stack.map((e,i,list) => (
            <ArcherElement
            key={`archerelement${i}`}
            id={`element${i+1}`}
            relations={[{
              targetId: (i !== (list.length - 1) ) ? `element${i+2}` : 'NULL' ,
              targetAnchor: 'left',
              sourceAnchor: 'right',
              style: arrow,
              label: <div style={{ marginTop: '-20px' }}></div>,
            }]}
          >
            <div style={(i % 2 == 0) ? oddBoxStyle : evenBoxStyle}>{e.value}</div>
          </ArcherElement>
          ))}


          <ArcherElement
            id="NULL"
            relations={[]}
          >
            <div style={borderBoxStyle}>∅</div>
          </ArcherElement>
        </div>
      </ArcherContainer>

    </div>
  );
}

export default Linked;