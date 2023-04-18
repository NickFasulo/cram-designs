import styled from 'styled-components'
import Link from './Link'

const Nav = styled.div`
  top: 0;
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0 0.75rem;
  background: #f6edd6;

  @media (max-width: 750px) {
    justify-content: space-between;
  }
`

const LinkSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20rem;

  @media (max-width: 750px) {
    display: none;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    height: 5rem;
  }

  h1 {
    margin: 0.25rem 0 0 1rem;
    width: 7.5rem;
  }

  @media (max-width: 750px) {
    img:nth-child(1) {
      display: none;
    }

    img:nth-child(2) {
      margin-left: 1rem;
      height: 3.5rem;
    }

    h1 {
      font-size: 1.33rem;
    }
  }
`

const MenuIcon = styled.img`
  height: 1.5rem;
  margin-right: 1.5rem;

  @media (min-width: 751px) {
    display: none;
  }
`

export default function Navbar() {
  return (
    <Nav>
      <Header>
        <img src='/images/cram-it-up.svg' />
        <img src='/images/tinfoil-troll.png' />
        <h1>Cram Designs</h1>
      </Header>
      <LinkSection>
        <Link href={'/'} text={'Home'} />
        <Link href={'/about'} text={'About'} />
        <Link href={'/contact'} text={'Contact'} />
      </LinkSection>
      <MenuIcon src='/images/menu-icon.svg' />
    </Nav>
  )
}
