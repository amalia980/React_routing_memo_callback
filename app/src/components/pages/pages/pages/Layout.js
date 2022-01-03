import {Outlet} from "react-router-dom";
import Navbar from "../general/Navbar";
import './Layout.css';

const Layout = () => {
    return (
        <>
        <Navbar />
        <div className="wrapper"></div>
        <Outlet />
        </>
    );
}

export default Layout;