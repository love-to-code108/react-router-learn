import { Route, Routes } from 'react-router-dom'
import { Home } from "./components/home"
import { FourOFour } from "./components/error"
import { Navbar } from "./components/navbar.jsx"
import './App.css'
import { About } from './components/about'
import { Navbar2 } from './components/Navbar2.jsx'
import { OrdersSummary } from './components/OrdersSummary.jsx'
import { Products } from './components/products.jsx'
import { NewProducts } from './components/NewProducts.jsx'
import { Featured } from './components/Featured.jsx'
import { Users } from './components/Users.jsx'
import { UsersDetails } from './components/UsersDetails.jsx'
import { Admin } from './components/Admin.jsx'

function App() {


  return (
    <div>


      <Navbar />
      <br />
      <br />
      <br />

      <Navbar2 />
      <Routes>

        {/* so basically routes and then route */}
        <Route path='/' element={<Home />} />
        {/* then there are mainly two attributes path and element */}
        <Route path='/about' element={<About />} />
        <Route path='/order-summary' element={<OrdersSummary />} />
        <Route path='/products' element={<Products />}>
          <Route index element={<Featured />} />
          <Route path='featured' element={<Featured />} />
          <Route path='newProducts' element={<NewProducts />} />
        </Route>
        <Route path='/users' element={<Users />}>
          <Route path='admin' element={<Admin />} />
          <Route path=':userId' element={<UsersDetails />} />
        </Route>
        {/* the star stands for the 404 page in react router dom */}
        <Route path='*' element={<FourOFour />} />
      </Routes>
    </div>
  )
}

export default App
