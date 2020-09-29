import Link from 'next/link';
import DropDown from './dropDown';
import { dataStructuresList } from '../../constant/dataStructures'
import { useRef, useState } from 'react';

const NavBar: React.FC = () => {
  const [isdroped, drop] = useState(false)
  const checkBoxRef = useRef<HTMLInputElement>(null) !;

  const dropdown = () => {
    drop(!isdroped)
    let status = checkBoxRef?.current?.checked
    if(checkBoxRef?.current) {
      checkBoxRef.current.checked = !status
    }
  }

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    drop(!isdroped)
  }


  return (<>
    <header>
      <Link href="/"><a className="logo">GWAB</a></Link>
      <input ref={checkBoxRef} type="checkbox" id="nav-toggle" className="nav-toggle"></input>
      <nav>
        <ul>
          <li><Link href="/about"><a>About</a></Link></li>
          <li> <Link href="/learnmore"><a>Learn More</a></Link></li>
          <li><Link href="/contact"><a>Contact</a></Link></li>
          <li className="dropdown">
            <button onClick={(e) => handleButtonClick(e)} className="dropbtn">Data Structures</button>
            {isdroped ? <DropDown rollUp={dropdown} drop={dropdown} dataStructures={dataStructuresList} /> : null}
          </li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </header>
    <style jsx>{`

      .dropdown:hover .dropbtn {background-color: #3e8e41;}
      .dropdown {
        position: relative;
        display: inline-block;
      }

      .dropbtn {
        background-color: #4CAF50;
        color: white;
        padding: 0;
        font-weight: bolder;
        border: none;
        height: 70px;
        padding: 0 0.5rem;
        width: 100%;
      }

      header {
        background: #f3f3f3;
        text-align: center;
        position: fixed;
        top: 0;
        z-index: 999;
        width: 100%;
      }

      .logo {
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        text-decoration: none;
        font-size: 1rem;
        text-transform: uppercase;
      }

      li:hover {
        background: rgba(76, 175, 80, 0.5);
      }

      .nav-toggle {
        position: absolute !important;
        top: -9999px !important;
        left: -9999px !important;
      }
      
      .nav-toggle:focus ~ .nav-toggle-label {
        outline: 3px solid rgba(lightblue, .75);
      }
      
      .nav-toggle-label {
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 1em;
        height: 100%;
        display: flex;
        align-items: center;
      }
      
      .nav-toggle-label span,
      .nav-toggle-label span::before,
      .nav-toggle-label span::after {
        display: block;
        background: #4CAF50;
        height: 2px;
        width: 2em;
        border-radius: 2px;
        position: relative;
      }
      
      .nav-toggle-label span::before,
      .nav-toggle-label span::after {
        content: '';
        position: absolute;
      }
      
      .nav-toggle-label span::before {
        bottom: 7px;
      }
      
      .nav-toggle-label span::after {
        top: 7px;
      }
      
      nav {
        position: absolute;
        text-align: left;
        top: 100%;
        left: 0;
        background: #f3f3f3;
        width: 100%;
        transform: scale(1, 0);
        transform-origin: top;
        transition: transform 400ms ease-in-out;
      }
      
      nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      
      nav li {
        margin-bottom: 1em;
        margin-left: 0.6em;
        height: 70px;
        padding: 0 0.5rem;
        display: flex;
        justidy-content: center;
        align-items: center;
      }

      .logo{
        color: black;
        text-decoration: none;
        font-size: 1.1rem;
        text-transform: uppercase;
        font-weight: bold;
      }

      nav a {
        color: black;
        text-decoration: none;
        font-size: 1.1rem;
        font-weight: bold;
        text-transform: uppercase;
        opacity: 0;
        transition: opacity 150ms ease-in-out;
        display: flex;
        justidy-content: center;
        align-items: center;
      }
      
      nav a:hover {
        color: #000;
      }
      
      .nav-toggle:checked ~ nav {
        transform: scale(1,1);
      }
      
      .nav-toggle:checked ~ nav a {
        opacity: 1;
        transition: opacity 250ms ease-in-out 250ms;
      }

      nav li.dropdown button {
        font-size: 1.2rem;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
      }
      
      @media screen and (min-width: 800px) {
        .nav-toggle-label {
          display: none;
        }

        li > a {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
      
        header {
          display: grid;
          grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;
        }
        
        .logo {
          grid-column: 2 / 3;
        }
        
        nav {
          // all: unset; /* this causes issues with Edge, since it's unsupported */
          
          /* the following lines are not from my video, but add Edge support */
          position: relative;
          text-align: left;
          transition: none;
          transform: scale(1,1);
          background: none;
          top: initial;
          left: initial;
          /* end Edge support stuff */
          
          grid-column: 3 / 4;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        
        nav ul {
          display: flex;
        }
        
        nav li {
          
          margin-bottom: 0;
          height: 70px;
          padding: 0 0.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        nav a {
          opacity: 1;
          position: relative;
        }
        
        nav a::before {
          content: '';
          display: block;
          height: 5px;
          background: black;
          position: absolute;
          top: -.75em;
          left: 0;
          right: 0;
          transform: scale(0, 1);
          transition: transform ease-in-out 250ms;
        }
        
        nav a:hover::before {
          transform: scale(1,1);
        }

        nav li.dropdown button {
          font-size: 1.2rem;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          max-width: 140px;
        }

        nav li.dropdown {
          padding: 0;
        }
      }

    `}</style>

  </>);
}

export default NavBar;