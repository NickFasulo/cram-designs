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
          <img src='/images/design-1.webp' />
          <img src='/images/design-3.webp' />
          <img src='/images/design-4.webp' />
          <img src='/images/design-5.webp' />
          <img src='/images/design-6.webp' />
          <img src='/images/design-7.webp' />
          <img src='/images/design-8.webp' />
          <img src='/images/design-9.webp' />
          <img src='/images/design-10.webp' />
          <img src='/images/design-11.webp' />
          <img src='/images/design-12.webp' />
          <img src='/images/design-13.webp' />
          <img src='/images/design-14.webp' />
          <img src='/images/design-15.webp' />
          <img src='/images/design-16.webp' />
          <img src='/images/design-17.webp' />
          <img src='/images/design-18.webp' />
        </Masonry>
      </ResponsiveMasonry>
    </Wrapper>
  )
}
