import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "./Components/About"
import Achievment from "./Components/Achievment"
import Blog from "./Components/Blog"
import Course from "./Components/Course"
import Events from "./Components/Events"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import NavBar from "./Components/NavBar"
import Register from "./Components/Register"
import Teachers from "./Components/Teachers"

AOS.init();

function App() {

  return (
    <div className="overflow-x-hidden">
       <NavBar/>
       <Hero/>
       <About/>
       <Course/>
       <Achievment/>
       <Teachers/>
       <Events/>
       <Register/>
       <Blog/>
       <Footer/>

       {/* 
       <NavBar/>
       <Hero/>
       <About/>
       <Course/>
       <Achievment/>
       <Teachers/>
       <Events/>
       <Register/>
       <Blog/>
       <Footer/> 
       */}
    </div>
  )
}

export default App
