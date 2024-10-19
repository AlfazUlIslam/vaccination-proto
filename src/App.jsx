import {Navbar} from "./components"
import {Banner, WhyVaccinate, Symptoms, Feedback} from "./sections"
import './App.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <WhyVaccinate />
      <Symptoms />
      <Feedback />
      <div className="py-[30rem] bg-darkPurple"></div>
    </div>
  )
}

export default App
