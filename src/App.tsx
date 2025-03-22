
// import InsertUser from "./components/InsertUser"
// import UsersList from "./components/UsersList"
// import About from "./components/About"
// import Navbar from "./components/Navbar"
// import SendMessage from "./components/SendMessage"
import Wrapper from "./pages/Wrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
// import WelcomePage from "./components/WelcomePage"
const App = () => {
  return (
    <Router>
      <div className="">
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/" element={<SendMessage />} />
          <Route path="/about" element={<About />} />
          <Route path="/welcomepage" element={<WelcomePage />} /> */}
          <Route
            path="/"
            element={<Home />}>
          </Route>

          <Route
            path="/register"
            element={<Register />}
          >
          </Route>

          <Route
            path="/login"
            element={<Login />}
          >
          </Route>

          <Route
            path="/dashboard"
            element={
              <Wrapper>
                <Dashboard />
              </Wrapper>
            }

          >
          </Route>

        </Routes>
      </div>
    </Router>
  )
}

export default App
