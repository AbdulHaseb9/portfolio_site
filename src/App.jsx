import { Route, Routes } from 'react-router-dom'
import Comingsoon from './components/Comingsoon'
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<Comingsoon />} />
          <Route path='haseebsheikh' element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
