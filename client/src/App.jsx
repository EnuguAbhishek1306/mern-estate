import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Headers from "./components/Headers"
function App() {
 

  return (
    <BrowserRouter>
    <Headers/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
