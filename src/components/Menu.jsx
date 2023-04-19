import styled from 'styled-components'
import NavLink from './NavLink'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.25rem 0 0.75rem;
  background: #f6edd6;

  @media (max-width: 750px) {
    justify-content: space-evenly;
  }

  @media (min-width: 750px) {
    display: none;
  }
`

export default function Menu() {
  return (
    <Wrapper>
      <NavLink href={'/'} text={'Home'} />
      <NavLink href={'/about'} text={'About'} />
      <NavLink href={'/contact'} text={'Contact'} />
    </Wrapper>
  )
}
