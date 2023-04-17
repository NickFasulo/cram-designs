import styled from 'styled-components'

const ImgStyles = styled.img`
  max-height: 20rem;
`

export default function StyledImg({ ...props }) {
  return <ImgStyles src={props.src} />
}
