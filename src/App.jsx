import {Navbar} from "./components"
import {Banner, WhyVaccinate, Registration, Symptoms, Feedback, Footer} from "./sections"
import './App.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <WhyVaccinate />
      <Registration />
      <Symptoms />
      <Feedback />
      <Footer />
    </div>
  )
}

export default App
