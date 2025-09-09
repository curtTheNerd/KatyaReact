import Navbar from "./Components/02 constants/Navbar/Navbar"
import Footer from "./Components/02 constants/Footer/Footer"

import { Outlet } from "react-router"

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout