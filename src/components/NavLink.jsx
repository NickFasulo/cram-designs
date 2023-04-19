import styled from 'styled-components'

const LinkStyles = styled.a`
  width: 5rem;
  height: 2rem;
  padding-top: 0.5rem;
  border: 2px solid #1c1c1c;
  border-radius: 1rem;
  box-shadow: -4px 4px 0 1px #000;
  color: #000;
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: 700;
  text-align: center;
  text-decoration: none;

  &:hover {
    background: #85eba8;
  }
`

export default function NavLink({ ...props }) {
  return <LinkStyles href={props.href}>{props.text}</LinkStyles>
}
