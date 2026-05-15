import Footer from './component/Footer/Footer'
import Navbar from './component/Navbar/Navbar'
import { Routes, Route } from 'react-router'
import Home from './pages/Home/Home'

function App() {

  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
