import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkStyles = styled(Link)`
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

  @media (max-width: 750px) {
    width: 4.75rem;
    height: 1.75rem;
    font-size: 1rem;
    padding-top: 0.33rem;
  }
`

export default function NavLink({ ...props }) {
  return <LinkStyles to={props.href}>{props.text}</LinkStyles>
}
