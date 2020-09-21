import Link from 'next/link'
import { aboutText } from '../constant/about'

export default function About() {
  let aboutProps = aboutText
  return (
    <div className="page">
      <h1>{aboutProps.title}</h1>
      <p>{aboutProps.paragraph}</p>
      <Link href="/"><a>Home</a></Link>
    </div>
  )
}