import Link from 'next/link';
import Form from '../components/Form'
import { aboutText } from '../constant/about'

export default function About() {
  let aboutProps = aboutText
  return (
    <div className="page">
      <h1>{aboutProps.title}</h1>
      <Form />
    </div>
  )
}