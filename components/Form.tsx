import { useState } from "react";

export interface FormProps {

}



const Form: React.FC<FormProps> = () => {
  const [status, setStatus] = useState<string>("")

  const errorMsg = (<p>Ooops! There was an error.</p>);
  const successMsg = (<p>Thanks!</p>);
  const submitBtn = (<button>Submit</button>);


  const submitForm = async (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const url = `https://formspree.io/mpzozrbe`;
    const postMessage = {
      method: 'POST',
      headers: { "Accept": "application/json" },
      body: data
    }
    const res = await fetch(url, postMessage);

    if (res.status === 200) {
      form.reset();
      setStatus("SUCCESS");
    } else {
      setStatus("ERROR");
    }

  }

  return (
    <>
    <form
      onSubmit={submitForm}
      action="https://formspree.io/mpzozrbe"
      method="POST"
      id='contactForm'
    >
      <div className="submitElement">
      <h1>Contact Me</h1>
      </div>

      <div className="inputElement">
        <label>Email</label>
        <input type="email" name="email" />
      </div>
      <div className="inputElement">
        <label>Name</label>
        <input type="text" name="name" />
      </div>
      <div className="inputElement">
        <label>Last Name</label>
        <input type="text" name="lastName" />
      </div>
      <div className="inputElement">
        <label>Message</label>
        <textarea required form="contactForm" name="message" />
      </div>

      <div className="submitElement">
        {status === "SUCCESS" ? successMsg : submitBtn}
        {status === "ERROR" && errorMsg}
      </div>

    </form>
  <style>{`
    #contactForm {
      width: 50%;
      background-color: #f3f3f3;
      border-radius: 20px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      padding: 1rem 0.5rem 0.5rem 0.5rem;
      box-shadow: 0px 25px 30px 0px rgba(0,0,0,0.5);
      margin-left: 30px;
    }
    
    .inputElement {
      display: flex;
      flex-flow: column;
      width: 90%;
      margin: 0.3rem 0;
      font-weight: bold;
      border-radius: 8px;
    }
    
    .inputElement input {
      border: 1px solid #acacac;
      height: 1.5rem;
      border-radius: 3px;
      padding: 0.2rem 0.6rem;
      margin-top: 0.2rem;
    }
    
    .submitElement {
      width: 90%;
      margin: 0.3rem 0;
      font-weight: bold;
      padding: 0.3rem;
      border-radius: 8px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .submitElement button {
      width: 170px;
      height: 40px;
      font-size: 1.2rem;
      font-weight: bold;
      color: white;
      background-color: #4CAF50;
      border: none;
      border-radius: 8px;
    }
    
    .submitElement button:hover {
      cursor: pointer;
      background-color: #03641b;
    }

    textarea {
      margin-top: 0.2rem;
      border: 1px solid #acacac;
      border-radius: 3px;
      resize: none;
      height: 3rem;
    }
    
    form h1 {
      margin: 0.4rem 0;
    }
  `}</style>
    </>
  );
}

export default Form;