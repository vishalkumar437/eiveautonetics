import React from 'react';
import { Container } from './Container/index';
import contact from '../../public/contact.svg';
import { Wrapper, Details, Thumbnail} from './styles';
import ContactForm from './ContactForm/index';
import './Contact.css';
import Image from "next/image";

function Contact(){
  return(
    <div>
      <h1 className='Contact-head'>Contact Us</h1>
    <Wrapper as={Container} id="contact">
      
      <Details>
        <ContactForm/>
      </Details>
      <Thumbnail>
        <Image className='Contact-image' src={contact} alt="Lets Talk" />
      </Thumbnail>
    </Wrapper>
    </div>
    
  );
};

export default Contact;
