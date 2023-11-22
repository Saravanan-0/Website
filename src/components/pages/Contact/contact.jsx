import React from 'react';
import './contact.css';
import img11 from "./images/img11.svg";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
// import { faUnderline } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a8zk5ob",
        "template_lccw8mk",
        form.current,
        "pJ6N7VlbQOU1Q0_ql"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setButtonText('Sent Successfully :)');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [phone, setPhone] = useState('');
  const [comp, setComp] = useState('');
  const [message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState('Submit');
  const handleSendMessage = () => {
    setTimeout(() => {
      setName('');
      setemail('');
      setPhone('');
      setComp('');
      setMessage('');
      // You can reset other form fields as needed
    }, 900);
  }
  return (
    <div id='contact' className='fullbox'>

      <div className="innerbox">
        <div className="content1">
          <h1 className='heading'><span style={{ borderBottom: "5px solid #143274", borderRadius: 3 }}>Let's</span> Work Together</h1>
          <p className='content'>Know what you want? Great.<br />Got questions? Even better.</p>
          <div className='location-icon'>
            <img className="icon100" src={img11} />
            <p77 className='location'> Office Address</p77>
          </div>
          <p className='addres'>
            8A, Tharabarathy street, Jaya nagar,<br />
            Puzhuthivakkam, Chennai - 600091</p>
          <ul className='underlist'>
            <li className='underlist1'> <a href='tel:91-44-3581-4445'><span style={{ color: '#000000' }}>+91-44-3581-4445</span></a></li>
            <li className='underlist1'><a href='mailto:info@digamend.com'><span style={{ color: '#000000' }}>info@digamend.com</span> </a></li>
          </ul>
        </div>
        <div class="container">
          <h1 className='tellus'>Tell Us  About You</h1>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Your name*" name="name" id="name" required value={name} onChange={(e) => setName(e.target.value)}></input>
            <input type="text" placeholder="Your Email*" name="email" id="email" required value={email} onChange={(e) => setemail(e.target.value)}></input>
            <input type="text" placeholder="Your company name" name="comp_name" id="name" value={comp} onChange={(e) => setComp(e.target.value)}></input>
            <input type="tel" placeholder="Your phone number" name="number" id="name" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
            <textarea cols="80" rows="5" placeholder="What design tasks do you have?" name="para" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button type="Submit" class="Submit" value="Submit" onClick={handleSendMessage}>{buttonText}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact