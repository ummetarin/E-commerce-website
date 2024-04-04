import { Outlet } from "react-router-dom";
import Navbar from "../navber/Navbar";
import Footer from "../Footer/Footer";


const Mainpage = () => {
   
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainpage;