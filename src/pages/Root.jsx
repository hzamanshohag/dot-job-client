import Footer from "./Footer";
import Navbar from "./home/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
      <div className="mx-auto md:w-[80%]">
        <Navbar />
        <Outlet/>
        <Footer/>
      </div>
    );
};

export default Root;