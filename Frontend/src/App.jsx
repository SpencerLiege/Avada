// libraries import
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// components import
import Header from "./components/Header"
// pages import
import Home from "./pages/Home"
import MenuScreen from './pages/MenuScreen'
import MenuItemScreen from "./pages/MenuItemScreen"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
    <Router>
      <Header />
      <main className="">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuScreen />}/>
          <Route path="/menu/:id" element={<MenuItemScreen />}/>
        </Routes>
      </main>
      <Footer />
    </Router>
    
    </>
  )
}
