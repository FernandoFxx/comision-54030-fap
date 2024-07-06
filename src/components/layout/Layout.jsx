import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import Footer from "../pages/footer/Footer"
import Banner from "../pages/banner/Banner"


const Layout = () => {
  return (
    <>
        <Navbar />
        <Banner />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout