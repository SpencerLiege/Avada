// libraries import
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// components import
import Header from "./components/Header"
// pages import
import Home from "./pages/Home"

export default function App() {
  return (
    <>
    <Router>
      <Header />
      <main className="">
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
    
    </>
  )
}
