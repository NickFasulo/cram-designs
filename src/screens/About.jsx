import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7.5rem 0 5rem;

  h1 {
    margin: 2rem 0 1rem;
    text-align: center;
    font-family: 'Concert One', Sans-serif;
  }

  img {
    width: 20rem;
    border: 2px solid #1c1c1c;
    border-radius: 1rem;
    box-shadow: -4px 4px 0 1px #000;
  }

  p {
    font-family: 'Concert One', Sans-serif;
    font-size: larger;
    margin: 0 1rem 2rem;
    width: 20rem;
    text-align: center;
  }

  @media (max-width: 320px) {
    img,
    p {
      width: 18rem;
    }
  }
`

export default function About() {
  return (
    <Wrapper>
      <h1>About Cram Designs</h1>
      <p>
        Hi, I'm Marc Fasulo. I am on the autism spectrum and I'm starting a
        small T-Shirt business making and selling custom shirts.
      </p>
      <img src='/images/shirt-press.png' />
    </Wrapper>
  )
}
