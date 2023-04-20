import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import styled from 'styled-components'

const Img = styled.img`
  margin: 0.5rem;
  border-radius: 1rem;
`

const Wrapper = styled.div`
  max-width: 100rem;
  padding: 0 1rem;
  margin: 7.5rem auto 5rem;

  h2 {
    margin: 2rem 0;
    text-align: center;
    font-family: 'Concert One', Sans-serif;
  }

  @media (max-width: 750px) {
    margin: 5.5rem auto;

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
          <Img src='/images/design-1.png' />
          <Img src='/images/design-2.png' />
          <Img src='/images/design-3.png' />
          <Img src='/images/design-4.png' />
          <Img src='/images/design-5.png' />
          <Img src='/images/design-6.png' />
          <Img src='/images/design-7.png' />
          <Img src='/images/design-8.png' />
          <Img src='/images/design-9.png' />
          <Img src='/images/design-10.png' />
          <Img src='/images/design-11.png' />
          <Img src='/images/design-12.png' />
          <Img src='/images/design-13.png' />
          <Img src='/images/design-14.png' />
          <Img src='/images/design-15.png' />
          <Img src='/images/design-16.png' />
        </Masonry>
      </ResponsiveMasonry>
    </Wrapper>
  )
}
