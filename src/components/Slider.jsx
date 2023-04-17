import Carousel from 'nuka-carousel'
import StyledImg from './StyledImg'

export default function Slider() {
  return (
    <Carousel autoplay wrapAround>
      <StyledImg src='/images/design-one.png' />
      <StyledImg src='/images/design-two.png' />
      <StyledImg src='/images/design-three.png' />
      <StyledImg src='/images/design-four.png' />
      <StyledImg src='/images/design-five.png' />
      <StyledImg src='/images/design-six.png' />
    </Carousel>
  )
}
