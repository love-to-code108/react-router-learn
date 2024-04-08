import { Route, Routes } from 'react-router-dom'
import { Home } from "./components/home"
import './App.css'
import { About } from './components/about'

function App() {
  

  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<About/>}/>
        </Routes>
    </div>
  )
}

export default App
