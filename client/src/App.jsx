import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Sining from './pages/Signin'
import Profile from './pages/Profile'
import About from './pages/About'
import Header from './components/Header'
import SignUp from './pages/SignUp'
export default function App() {
  return (
    <BrowserRouter className="text-blue-400 text-center">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<Sining/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}
