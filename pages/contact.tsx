import Link from 'next/link';
import Form from '../components/Form';
import LinkContact from '../components/Contacts/LinkContact'
import { contactText } from '../constant/about'

export default function About() {
  let aboutProps = contactText
  return (
    <div className="page">
      <h1>{aboutProps.title}</h1>
      <div className="contacting">
        <LinkContact />
        <Form />
      </div>
      <style jsx>{`
        .contacting{
            width: 100%;
            display: flex;
        }

        h1{
          font-size: 56px;
          padding-left: 20px;
        }
      `}
      </style>
    </div>
  )
}