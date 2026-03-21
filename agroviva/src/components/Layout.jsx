import Navbar from "./navbar";
import Footer from "./footer/footer";

import { Outlet } from "react-router-dom"

function Layout(){
   return(
    <>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
   )
}

export default Layout;
