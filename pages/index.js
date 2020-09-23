import Head from 'next/head';
import Link from 'next/link';
import { dataStructuresList } from '../constant/dataStructures'

export default function Home() {
  return (
    <div className="page">
      <h1>Welcome to Data Structures</h1>
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
      <style jsx>{`

      h1{
        font-size: 72px;
        padding-left: 20px;
      }
        
        `}</style>
    </div>
  )
}
