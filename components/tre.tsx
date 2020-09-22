import { ArcherContainer, ArcherElement } from 'react-archer';
const rowStyle = { margin: '0', display: 'flex', justifyContent: 'space-between' }
const columnStyle = { width:'70%', margin: '0', display: 'flex', flexFlow: 'column', alignItems:'center', justifyContent: 'space-between', }
const evenBoxStyle = { marginTop: '0px', color: 'white', background: '#4CAF50', height: '60px', width: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bolder' as const };
const oddBoxStyle = { marginTop: '140px', color: 'white', background: '#4CAF50', height: '60px', width: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bolder' as const };
const borderBoxStyle = { marginRight: '100px' ,marginTop: '50px', color: 'white', background: '#3d3d3d', height: '60px', width: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bolder' as const };
const arrow = { strokeColor: '#03641b', strokeWidth: 3 };


export interface LinkList {
  value: (string | number),
  visible: boolean
}

export interface LinkedProps {
  stack: LinkList[]
}


const Tree: React.FC<LinkedProps> = ({ stack }) => {
  return (
    <div id="link">
      <ArcherContainer strokeColor='red' >
          <div style={columnStyle}>

            <ArcherElement
              id="Root"
              relations={[
                  {
                  targetId: 'Child_1',
                  targetAnchor: 'top',
                  sourceAnchor: 'bottom',
                  style: arrow,
                  label: <div style={{ marginTop: '-20px' }}></div>,
                },
                {
                  targetId: 'Child_2',
                  targetAnchor: 'top',
                  sourceAnchor: 'bottom',
                  style: arrow,
                  label: <div style={{ marginTop: '-20px' }}></div>,
                }
              ]}
            >
              <div style={borderBoxStyle}>Root</div>
            </ArcherElement>
            <div className="second" style={rowStyle}>
              <ArcherElement
                id="Child_1"
                relations={[
                  //   {
                  //   targetId: (stack.length !== 0 ) ? 'element1' : 'NULL',
                  //   targetAnchor: 'left',
                  //   sourceAnchor: 'right',
                  //   style: arrow,
                  //   label: <div style={{ marginTop: '-20px' }}></div>,
                  // }
                ]}
              >
                <div style={borderBoxStyle}>Child 1</div>
              </ArcherElement>

              <ArcherElement
                id="Child_2"
                relations={[
                  //   {
                  //   targetId: (stack.length !== 0 ) ? 'element1' : 'NULL',
                  //   targetAnchor: 'left',
                  //   sourceAnchor: 'right',
                  //   style: arrow,
                  //   label: <div style={{ marginTop: '-20px' }}></div>,
                  // }
                ]}
              >
                <div style={borderBoxStyle}>Child 2</div>
              </ArcherElement>

            </div>

          </div>
      </ArcherContainer>

    </div>
  );
}

export default Tree;