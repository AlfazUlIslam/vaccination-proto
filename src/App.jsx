import {Navbar} from "./components"
import {Banner, WhyVaccinate, Symptoms} from "./sections"
import './App.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <WhyVaccinate />
      <Symptoms />
    </div>
  )
}

export default App
