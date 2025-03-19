
// import InsertUser from "./components/InsertUser"
// import UsersList from "./components/UsersList"
import About from "./components/About"
import Navbar from "./components/Navbar"
import SendMessage from "./components/SendMessage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import WelcomePage from "./components/WelcomePage"
const App = () => {
  return (
    <Router>
      <div className="bg-[#384B70] h-screen">
        <Navbar />
          <Routes>
            <Route path="/" element={<SendMessage />} />
            <Route path="/about" element={<About />} />
            <Route path="/welcomepage" element={<WelcomePage />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App
