import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';



function Contact() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i4dk4qn', 'template_g7v5ipj', form.current, 'lHwyIBmSrlw3_sE-z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>anoopkiranam@gmail.com</h5>
            <a href="mailto:anoopkiranam@gmail.com" target="_blank">Send an Message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>anoopkiranam facebook</h5>
            <a href="https://m.me/anoop.kiran.79" target="_blank">Send an facebook Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whats App</h4>
            <h5>Anoop Kiran A M</h5>
            <a href="https://api.whatsapp.com/send?phone=+919844387253" target="_blank">Send an Message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" placeholder='Your Message' rows="10" required></textarea>
          <button type='submit' className='btn btn-primary'> Send Your Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact