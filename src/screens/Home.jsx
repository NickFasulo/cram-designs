import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 100rem;
  padding: 0 1rem;
  margin: 9rem auto 5rem;

  h2 {
    margin: 2rem 0;
    text-align: center;
    font-family: 'Concert One', Sans-serif;
  }

  img {
    margin: 0.5rem;
    border-radius: 1rem;
  }

  @media (max-width: 750px) {
    margin: 7.5rem auto;

    h2 {
      font-size: larger;
    }
  }
`

export default function Home() {
  return (
    <Wrapper>
      <h2>Check out these custom made shirts!</h2>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          <img src='/images/design-1.png' />
          <img src='/images/design-3.png' />
          <img src='/images/design-4.png' />
          <img src='/images/design-5.png' />
          <img src='/images/design-6.png' />
          <img src='/images/design-7.png' />
          <img src='/images/design-8.png' />
          <img src='/images/design-9.png' />
          <img src='/images/design-10.png' />
          <img src='/images/design-11.png' />
          <img src='/images/design-12.png' />
          <img src='/images/design-13.png' />
          <img src='/images/design-14.png' />
          <img src='/images/design-15.png' />
          <img src='/images/design-16.png' />
          <img src='/images/design-17.png' />
          <img src='/images/design-18.png' />
        </Masonry>
      </ResponsiveMasonry>
    </Wrapper>
  )
}
