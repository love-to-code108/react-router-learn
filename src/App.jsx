import { Route, Routes } from 'react-router-dom'
import { Home } from "./components/home"
import { FourOFour } from "./components/error"
import { Navbar } from "./components/navbar.jsx"
import './App.css'
import { About } from './components/about'

function App() {
  

  return (
    <div>


      <Navbar/>
        <Routes>

          {/* so basically routes and then route */}
          <Route path='/' element={<Home/>}/>
          {/* then there are mainly two attributes path and element */}
          <Route path='/about' element={<About/>}/>

          {/* the star stands for the 404 page in react router dom */}
          <Route path='*' element={<FourOFour/>}/>
        </Routes>
    </div>
  )
}

export default App
