import './App.css'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import Hero from './Component/Hero/Hero'
import Navbar from './Component/Navbar/Navbar'
import Program from './Component/Program/Program'
import Studentrev from './Component/StudentReview/Studentrev'
import Titlebar from './Component/Titlebar/Titlebar'


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
          <Titlebar subTitle = 'our program' title='what we offer'/>
          <Program />
          <About />
          <Titlebar subTitle = 'Gallery' title='Campus photos'/>
          <Campus />
          <Titlebar subTitle = 'Testimonials' title='What students says'/>
          <Studentrev />
          <Titlebar subTitle = 'Contact us' title='Get in touch'/>
          <Contact />
          <Footer />
      </div>
    </>
  )
}

export default App
