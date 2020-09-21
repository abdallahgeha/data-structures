import Link from 'next/link';

const LearnMore: React.SFC = () => {
  return ( 
    <div className="page">
      <h1>Learn More</h1>
      <h4>This project was heavily influenced by <Link href="https://itnext.io/algorithms-and-data-structures-in-javascript-a71548f902cb"><a>Oleksii Trekhleb's "Algorithms and Data Structures in JavaScript"</a></Link></h4>
    </div>
   );
}
 
export default LearnMore;