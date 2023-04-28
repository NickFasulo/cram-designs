import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 1.25rem 0;
  font-family: 'Concert One', Sans-serif;
  position: absolute;
  bottom: -5rem;

  img:nth-child(1) {
    height: 1.5rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 10.5rem;
  }

  @media (max-width: 425px) {
    img:nth-child(1) {
      height: 1rem;
    }

    span {
      display: none;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 6.5rem;
    }
  }
`

export default function Footer() {
  return (
    <Wrapper>
      <img src='/images/marc-fasulo-designs.png' />
      <div>
        <span>Follow Me:</span>
        <a href='https://www.tiktok.com/@marcfasulo728' target='_blank'>
          <img
            className='tiktok-icon'
            src='/images/tiktok-icon.svg'
            style={{ transform: 'scale(1.25)' }}
          />
        </a>
        <a href='https://www.facebook.com/MarcFasuloDesigns' target='_blank'>
          <img
            className='facebook-icon'
            src='/images/facebook-icon.svg'
            style={{ transform: 'scale(1.25)' }}
          />
        </a>
      </div>
    </Wrapper>
  )
}
