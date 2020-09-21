import Link from 'next/link'

export interface DropDownProps {
  dataStructures: { name: String, link: String, img: String }[]
  drop: (event: React.MouseEvent<HTMLDivElement>) => void
}

const DropDown: React.SFC<DropDownProps> = ({ dataStructures, drop }) => {
  return (
    <div className="dropdown-content" onClick={drop}>
      {dataStructures.map((dataStructure, i) => (
        <Link key={i} href={`/dataStructure${dataStructure.link}`}>
          <a className="dataStructuesLink" >{dataStructure.name}</a>
        </Link>
      ))}

      <style>{`
        .dropdown-content {
          position: absolute;
          background-color: #f1f1f1;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1;
        }
        
        .dropdown-content .dataStructuesLink {
          color: black;
          padding: 12px 16px;
          font-weight: 300;
          text-decoration: none;
          display: block;
        }
        
        .dropdown-content .dataStructuesLink:hover {background-color: #ddd;}

        .closed {display: none;}
        .open {display: block;}
        
        `}</style>

    </div>
  );
}

export default DropDown;