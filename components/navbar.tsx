import Link from 'next/link';
import DropDown from './dropDown';
import { dataStructuresList } from '../constant/dataStructures'
import { useState } from 'react';

const NavBar: React.FC = () => {
  const [isdroped, drop] = useState(false)

  const dropdown = () => drop(!isdroped)

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    drop(!isdroped)
  }

  return (
    <nav>
      <div className="left">
        <Link href="/"><a>Home</a></Link>
      </div>
      <div className="right">
        <Link href="/about"><a>About</a></Link>
        <Link href="/learnmore"><a>Learn More</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
        <div className="dropdown">
          <button onClick={(e) => handleButtonClick(e)} className="dropbtn">Data Structures</button>
          {isdroped ? <DropDown rollUp={dropdown} drop={dropdown} dataStructures={dataStructuresList} /> : null}
        </div>
      </div>
      <style jsx>{`
      
      nav{
        width: 100vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #f3f3f3;
        font-weight: bolder;
      }

      .right{
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      .dropbtn {
        background-color: #4CAF50;
        color: white;
        padding: 0;
        font-weight: bolder;
        border: none;
      }
      
      .dropdown {
        position: relative;
        display: inline-block;
      }

      .dropdown:hover .dropbtn {background-color: #3e8e41;}

      nav > div > a , .dropbtn{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        width: 100px;
      }
      a:hover {
        background: rgba(76, 175, 80, 0.5);
      }

    `}</style>

    </nav>);
}

export default NavBar;