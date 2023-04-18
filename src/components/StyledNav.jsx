import styled from 'styled-components'
import StyledLink from './StyledLink'

const NavStyles = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 0.5rem;
`

const LinksStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20rem;
`

const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    height: 5rem;
  }

  h1 {
    margin: 0.25rem 0 0 1rem;
    width: 7rem;
  }
`

export default function StyledNav() {
  return (
    <NavStyles>
      <HeaderStyles>
        <img src='/images/cram-it-up.svg' />
        <img src='/images/tinfoil-troll.png' />
        <h1>Cram Designs</h1>
      </HeaderStyles>
      <LinksStyles>
        <StyledLink href={'/'} text={'Home'} />
        <StyledLink href={'/about'} text={'About'} />
        <StyledLink href={'/contact'} text={'Contact'} />
      </LinksStyles>
    </NavStyles>
  )
}
