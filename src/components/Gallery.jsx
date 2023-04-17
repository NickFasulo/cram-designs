import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import styled from 'styled-components'

const ImgStyles = styled.img`
  margin: 0.5rem;
`

export default function Gallery() {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      style={{ margin: '1rem' }}
    >
      <Masonry>
        <ImgStyles src='/images/design-1.png' />
        <ImgStyles src='/images/design-2.png' />
        <ImgStyles src='/images/design-3.png' />
        <ImgStyles src='/images/design-4.png' />
        <ImgStyles src='/images/design-5.png' />
        <ImgStyles src='/images/design-6.png' />
        <ImgStyles src='/images/design-7.png' />
        <ImgStyles src='/images/design-8.png' />
        <ImgStyles src='/images/design-9.png' />
        <ImgStyles src='/images/design-10.png' />
        <ImgStyles src='/images/design-11.png' />
        <ImgStyles src='/images/design-12.png' />
      </Masonry>
    </ResponsiveMasonry>
  )
}
