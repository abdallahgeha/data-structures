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
  );
}

export default Form;