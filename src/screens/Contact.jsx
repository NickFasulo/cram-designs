import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8rem 0 3rem;
  font-family: 'Concert One', Sans-serif;

  h2 {
    margin: 0.25rem;
  }

  header {
    margin: 0.5rem 0;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    border: 2px solid #1c1c1c;
    border-radius: 1rem;
    box-shadow: -4px 4px 0 1px #000;
    padding: 1rem 2rem 2rem;
  }

  input,
  textarea {
    width: 18rem;
    padding: 0.5rem;
    border: 2px solid #1c1c1c;
    border-radius: 0.5rem;
  }

  input[type='submit'] {
    width: 100%;
    margin-top: 2rem;
    font-family: 'Concert One', Sans-serif;
  }

  .disabled {
    cursor: not-allowed;
  }

  .active {
    cursor: pointer;
  }

  .active:hover {
    background: #85eba8;
  }

  label {
    margin: 1rem 0 0.25rem;
  }

  @media (max-width: 375px) {
    input,
    textarea {
      width: 13rem;
      padding: 0.5rem;
      border: 2px solid #1c1c1c;
      border-radius: 0.5rem;
    }

    h2 {
      font-size: larger;
    }
  }
`

export default function Contact() {
  const [disabled, setDisabled] = useState(false)
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_4p5u1ou',
        'template_bql7xps',
        form.current,
        'cieQI-6jYknU9CVGm'
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )

    setDisabled(true)
  }

  return (
    <Wrapper>
      <header>
        <h2>Get in touch to have yours made!</h2>
        <h2>marcfasulodesigns@gmail.com</h2>
      </header>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type='text' name='sender_name' />
        <label>Email</label>
        <input type='email' name='sender_email' />
        <label>Message</label>
        <textarea name='message' rows={6} />
        {disabled ? (
          <input className='disabled' type='submit' disabled value={'Sent!'} />
        ) : (
          <input className='active' type='submit' value={'Send'} />
        )}
      </form>
    </Wrapper>
  )
}
