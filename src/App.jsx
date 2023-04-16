import StyledLink from './components/StyledLink'

export default function App() {
  return (
    <div className='App'>
      <h1>Cram Designs</h1>
      <StyledLink href={'/'} text={'Home'} />
      <StyledLink href={'/about'} text={'About'} />
      <StyledLink href={'/contact'} text={'Contact'} />
    </div>
  )
}
