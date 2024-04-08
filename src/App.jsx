import { Route, Routes } from 'react-router-dom'
import { Home } from "./components/home"
import { FourOFour } from "./components/error"
import { Navbar } from "./components/navbar.jsx"
import './App.css'
import { About } from './components/about'
import { Navbar2 } from './components/Navbar2.jsx'
import { OrdersSummary } from './components/OrdersSummary.jsx'

function App() {
  

  return (
    <div>


      <Navbar/>
      <br />
      <br />
      <br />

      <Navbar2/>
        <Routes>

          {/* so basically routes and then route */}
          <Route path='/' element={<Home/>}/>
          {/* then there are mainly two attributes path and element */}
          <Route path='/about' element={<About/>}/>
          <Route path='/order-summary' element={<OrdersSummary/>}/>

          {/* the star stands for the 404 page in react router dom */}
          <Route path='*' element={<FourOFour/>}/>
        </Routes>
    </div>
  )
}

export default App
