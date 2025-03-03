import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

export const Contact = () => {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    /* Uncomment below if you want to enable the emailJS */

    if (name !== '' && email !== '' && message !== '') {
      const templateParams = {
        name: name,
        email: email,
        message: message
      };

      console.log(templateParams);
      emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Ponte en contacto conmigo</h1>
          <p>Háblame directamente a <strong><a href={"mailto:marco.villalba.012@gmail.com"} > mi correo </a></strong></p>
          {/*<Box*/}
          {/*  ref={form}*/}
          {/*  component="form"*/}
          {/*  noValidate*/}
          {/*  autoComplete="off"*/}
          {/*  className='contact-form'*/}
          {/*>*/}
          {/*  <div className='form-flex'>*/}
          {/*    <TextField*/}
          {/*      required*/}
          {/*      id="outlined-required"*/}
          {/*      label="Nombre"*/}
          {/*      placeholder="Tu nombre"*/}
          {/*      value={name}*/}
          {/*      onChange={(e) => {*/}
          {/*        setName(e.target.value);*/}
          {/*      }}*/}
          {/*      error={nameError}*/}
          {/*      helperText={nameError ? "Por favor ingresa tu nombre" : ""}*/}
          {/*    />*/}
          {/*    <TextField*/}
          {/*      required*/}
          {/*      id="outlined-required"*/}
          {/*      label="Email"*/}
          {/*      placeholder="tuemail@email.com"*/}
          {/*      value={email}*/}
          {/*      onChange={(e) => {*/}
          {/*        setEmail(e.target.value);*/}
          {/*      }}*/}
          {/*      error={emailError}*/}
          {/*      helperText={emailError ? "Por favor ingresa tu email" : ""}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <TextField*/}
          {/*    required*/}
          {/*    id="outlined-multiline-static"*/}
          {/*    label="Mensaje"*/}
          {/*    placeholder="Déjame tu mensaje aquí"*/}
          {/*    multiline*/}
          {/*    rows={10}*/}
          {/*    className="body-form"*/}
          {/*    value={message}*/}
          {/*    onChange={(e) => {*/}
          {/*      setMessage(e.target.value);*/}
          {/*    }}*/}
          {/*    error={messageError}*/}
          {/*    helperText={messageError ? "Por favor ingresa tu mensaje" : ""}*/}
          {/*  />*/}
          {/*  <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>*/}
          {/*    Enviar*/}
          {/*  </Button>*/}
          {/*</Box>*/}
        </div>
      </div>
    </div>
  );
}

export default Contact;
