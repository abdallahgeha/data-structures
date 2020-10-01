import { ArcherContainer, ArcherElement } from 'react-archer';
const rowStyle = { margin: '0', display: 'flex', justifyContent: 'space-between', }
const foundOddBoxStyle = { marginTop: '0px', color: 'white', background: 'red', height: '60px', width: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bolder' as const };
const foundEvenBoxStyle = { marginTop: '140px', color: 'white', background: 'red', height: '60px', width: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bolder' as const };
const oddBoxStyle = { marginTop: '0px', color: 'white', background: '#4CAF50', height: '60px', width: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bolder' as const };
const evenBoxStyle = { marginTop: '140px', color: 'white', background: '#4CAF50', height: '60px', width: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bolder' as const };
const borderBoxStyle = { marginTop: '50px', color: 'white', background: '#3d3d3d', height: '60px', width: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bolder' as const };
const arrow = { strokeColor: '#03641b', strokeWidth: 3 };


export interface DoubleLinkList {
  value: (string | number),
  visible: boolean,
  found: boolean
}

export interface DoublyLinkedProps {
  links: DoubleLinkList[]
}

const DoublyLinked: React.FC<DoublyLinkedProps> = ({ links }) => {

  function setStyle(e: DoubleLinkList, i: number) {
    if (e.found && (i % 2 == 0)) return foundEvenBoxStyle
    if (e.found && (i % 2 != 0)) return foundOddBoxStyle
    if (!e.found && (i % 2 == 0)) return evenBoxStyle
    if (!e.found && (i % 2 != 0)) return oddBoxStyle
  }

  return (
    <div id="link">
      <ArcherContainer strokeColor='red' >

        <div style={rowStyle}>
          <ArcherElement
            id="HEAD"
            relations={[{
              targetId: (links.length !== 0) ? 'element1' : 'NULL',
              targetAnchor: 'left',
              sourceAnchor: 'right',
              style: arrow,
              label: <div style={{ marginTop: '-20px' }}></div>,
            }]}
          >
            <div style={borderBoxStyle}>HEAD</div>
          </ArcherElement>

          {links.map((e, i, list) => (
            <ArcherElement
              key={`archerelement${i}`}
              id={`element${i + 1}`}
              relations={[{
                targetId: (i !== (list.length - 1)) ? `element${i + 2}` : 'NULL',
                targetAnchor: 'left',
                sourceAnchor: 'right',
                style: arrow,
                label: <div style={{ marginTop: '-20px' }}></div>,
              }, {
                targetId: (i == 0) ? 'HEAD' : `element${i}`,
                targetAnchor: 'right',
                sourceAnchor: 'left',
                style: arrow,
                label: <div style={{ marginTop: '-20px' }}></div>,
              }]}
            >
              <div style={setStyle(e, i)}>{e.value}</div>
            </ArcherElement>
          ))}

          <ArcherElement
            id="NULL"
            relations={[{
              targetId: (links.length !== 0) ? `element${links.length}` : 'HEAD',
              targetAnchor: 'right',
              sourceAnchor: 'left',
              style: arrow,
              label: <div style={{ marginTop: '-20px' }}></div>,
            }]}
          >
            <div style={borderBoxStyle}>∅</div>
          </ArcherElement>
        </div>
      </ArcherContainer>

    </div>
  );
}

export default DoublyLinked;