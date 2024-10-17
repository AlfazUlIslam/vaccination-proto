import {Navbar} from "./components"
import {Banner, WhyVaccinate} from "./sections"
import './App.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <WhyVaccinate />
    </div>
  )
}

export default App
