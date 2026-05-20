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
import BookCounseling from './pages/Book Counseling/BookCounseling'
import JoinUs from './pages/JoinUs/JoinUs'
import { ToastContainer } from 'react-toastify'
import PublicLayout from './layout/publicLayout'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/AdminPages/Dashboard/AdminDashboard'

function App() {

  return (
    <div className="app">
      <Routes>
        {/* Public routes */}
        <Route element={<PublicLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/study-abroad' element={<StudyAbroad/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
          <Route path='/partnerships' element={<Partnerships/>}/>
          <Route path='/faq' element={<Fqa/>}/>
          <Route path='/career-coaching' element={<CareerCoaching/>}/>
          <Route path='/liberal-arts' element={<LiberalArts/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/book-counseling' element={<BookCounseling/>}/>
          <Route path='/join-us' element={<JoinUs/>}/>
        </Route>

        {/* Adimin Route */}
        <Route path='/admin' element={<AdminLayout/>}>
          <Route index element={<AdminDashboard />} />
        </Route>
      </Routes>
     
      <ToastContainer/>
    </div>
  )
}

export default App
