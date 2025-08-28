import { BrowserRouter, Link } from "react-router-dom"
import "./App.css"
import Login from "./auth/Login.jsx"
import Signup from "./auth/Signup.jsx"
import RegisterPage from "./pages/RegisterPage.jsx"

function App() {
  return (
    <BrowserRouter>
      <RegisterPage />
    </BrowserRouter>
  )
}

export default App
