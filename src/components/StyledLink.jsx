import styled from 'styled-components'

const LinkStyles = styled.a`
  padding: 20px 50px;
  border: 2px solid #1c1c1c;
  border-radius: 20px;
  box-shadow: -4px 4px 0 1px #000;
  color: #000;
  cursor: pointer;
  font-size: 1.125rem;
  line-height: 130%;
  font-weight: 700;
  text-align: center;
  text-decoration: none;

  &:hover {
    background: #85eba8;
  }
`

export default function StyledLink({ ...props }) {
  return <LinkStyles href={props.href}>{props.text}</LinkStyles>
}
