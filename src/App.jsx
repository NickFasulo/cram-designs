import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
