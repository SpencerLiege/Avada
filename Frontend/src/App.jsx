// libraries import
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// components import
import Header from "./components/Header"
// pages import
import Home from "./pages/Home"
import MenuScreen from './pages/MenuScreen'
import MenuItemScreen from "./pages/MenuItemScreen"
import TakeoutScreen from "./pages/TakeoutScreen"
import CartScreen from "./pages/CartScreen"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>

    <Router >
      <main className="relative">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuScreen />}/>
          <Route path="/menu/:id" element={<MenuItemScreen />}/>
          <Route path="/menu/:id/takeout" element={<TakeoutScreen />}/>
          <Route path="/cart" element={<CartScreen />}/>
        </Routes>
      <Footer />
      </main>
    </Router>

    </>
  )
}
