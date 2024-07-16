import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Comingsoon from './components/Comingsoon'
import './App.css'
import Home from './pages/Home'
import Aos from 'aos'
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])
  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<Comingsoon />} />
          <Route path='haseebsheikh'>
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
