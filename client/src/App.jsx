import Footer from './component/Footer/Footer'
import Navbar from './component/Navbar/Navbar'
import { Routes, Route } from 'react-router'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import StudyAbroad from './component/StudyAbroad/StudyAbroad'
import ContactUs from './pages/ContactUs/ContactUs'
import Partnerships from './pages/Partnership/Partnerships'
import Fqa from './pages/FQA/Fqa'
import CareerCoaching from './pages/CareerCoaching/CareerCoaching'
import LiberalArts from './pages/LiberalArts/LiberalArts'
import Blog from './pages/Blog/Blog'

function App() {

  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/study-abroad' element={<StudyAbroad/>}/>
        <Route path='/contact-us' element={<ContactUs formHead={"Contact MGTM"}/>}/>
        <Route path='/partnerships' element={<Partnerships/>}/>
        <Route path='/faq' element={<Fqa/>}/>
        <Route path='/career-coaching' element={<CareerCoaching/>}/>
        <Route path='/liberal-arts' element={<LiberalArts/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
