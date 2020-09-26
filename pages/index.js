import className from 'classnames'
import Link from 'next/link';
import { useState } from 'react';
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
                <a
                  className={className("dataStructuesHomeLink")}  >{dataStructure.name}</a>
              </Link>)
            } else {
              return (
                <a key={i} className={className("dataStructuesHomeLinkSoon")} >{dataStructure.name}</a>
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
        opacity: 1; 
      }
      
      
      
      .dataStructuesHomeLink:hover {
        background-color: #03641b;
        transform: scale(0.97)
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
        opacity: 1; 
      }
      
      .dataStructuesHomeLinkSoon::after {
        content: "Comming soon";
        color: #999999;
        font-size: 22px;
      }
      
    }
        
        `}</style>
    </>
  )
}
