import Head from 'next/head';
import Link from 'next/link';
import { dataStructuresList } from '../constant/dataStructures'

export default function Home() {
  return (
    <>
    <div id="hero" >
      <h1>Welcome to GWAB</h1>
      <h3>Where we learn Data Structures and algorithms</h3>
    </div>
    <div className="page">
      <div id="DataGrid">
        {dataStructuresList.map((dataStructure, i) => {
          if (dataStructure.available) {
            return (<Link key={i} href={`/dataStructure${dataStructure.link}`}>
              <a className="dataStructuesHomeLink" >{dataStructure.name}</a>
            </Link>)
          } else {
            return (
              <a key={i} className="dataStructuesHomeLinkSoon" >{dataStructure.name}</a>
            )
          }
        })}
      </div>
      
    </div>
    <style jsx>{`
      #hero {
        display: flex;
        flex-flow: column;
        width: 100vw;
        background-color: #4CAF50;
        height: 100vh;
        justify-content : center;
        align-items: center;
      }

      h1{
        color: white;
        font-size: 92px;
        font-weight: bolder;
        padding-left: 20px;
      }

      h3{
        color: white;
        font-size: 56px;
        padding-left: 20px;
      }

      #DataGrid {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: minmax(100px, auto);
        grid-gap: 15px;
        margin: 100px 0;
        padding-bot: 100px;
      }
      
      .dataStructuesHomeLink {
        color: #fff;
        font-size: 28px;
        font-weight: bolder;
        width: 100%;
        height: 22vh;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        background-color: #4CAF50;
        border-radius: 15px;
        animation: fadeIn 1.5s ease-in-out;
      }
      
      .dataStructuesHomeLink:hover {
        background-color: #03641b;
      }
      
      .dataStructuesHomeLinkSoon {
        color: #fff;
        font-size: 28px;
        font-weight: bolder;
        width: 100%;
        height: 22vh;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        background-color: #415c42;
        border-radius: 15px;
      }
      
      .dataStructuesHomeLinkSoon::after {
        content: "Comming soon";
        color: #999999;
        font-size: 22px;
      }

      @keyframes fadeIn {
        0% {
            transform: scale(0);
            opacity: 0.0;       
        }
        60% {
            transform: scale(1.1);  
        }
        80% {
            transform: scale(0.9);
            opacity: 1; 
        }   
        100% {
            transform: scale(1);
            opacity: 1; 
        }       
    }
        
        `}</style>
    </>
  )
}
