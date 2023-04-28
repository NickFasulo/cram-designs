import { useState } from 'react'
import styled from 'styled-components'
import NavLink from './NavLink'
import Menu from './Menu'

const Wrapper = styled.div`
  top: 0;
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0;
  background: #f6edd6;

  @media (max-width: 750px) {
    justify-content: space-between;
  }
`

const LinkSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 3rem;
  width: 30rem;

  @media (max-width: 750px) {
    display: none;
  }
`

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuIcon = styled.img`
  height: 1.5rem;
  margin-right: 1.75rem;

  @media (min-width: 751px) {
    display: none;
  }
`

const CloseIcon = styled.img`
  height: 2rem;
  margin-right: 1.75rem;

  @media (min-width: 751px) {
    display: none;
  }
`

const Logo = styled.div`
  display: flex;
  margin-left: 3rem;

  img:nth-child(1),
  img:nth-child(2) {
    height: 5rem;
  }

  h1 {
    margin: 0.25rem 0 0 1rem;
    width: 7.5rem;
  }

  @media (max-width: 750px) {
    margin-left: 1.5rem;

    img:nth-child(1) {
      display: none;
    }

    img:nth-child(2) {
      height: 3.5rem;
    }

    h1 {
      font-size: 1.33rem;
    }
  }
`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <Wrapper>
      <HeaderSection>
        <Header>
          <Logo>
            <img src='/images/cram-it-up.svg' />
            <img src='/images/tinfoil-troll.png' />
            <h1>Cram Designs</h1>
          </Logo>
          {!open ? (
            <MenuIcon
              src='/images/menu-icon.svg'
              onClick={() => setOpen(true)}
            />
          ) : (
            <CloseIcon
              src='/images/close-icon.svg'
              onClick={() => setOpen(false)}
            />
          )}
        </Header>
        {open && <Menu />}
      </HeaderSection>
      <LinkSection>
        <NavLink href={'/'} text={'Home'} />
        <NavLink href={'/about'} text={'About'} />
        <NavLink href={'/contact'} text={'Contact'} />
      </LinkSection>
    </Wrapper>
  )
}
