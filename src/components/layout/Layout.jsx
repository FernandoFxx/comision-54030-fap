import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import Footer from "../pages/footer/Footer"


const Layout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout