import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from './../Components/Footer';

const MainLayout = () => {

    return (
        <div className="container mx-auto  min-h-screen">
            <Navbar></Navbar>
            <div className="min-h-screen">    
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;