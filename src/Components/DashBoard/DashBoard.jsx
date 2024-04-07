import { Link, Outlet } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { BiSolidCartAlt } from "react-icons/bi";
import { MdRateReview } from "react-icons/md";
import { MdOutlineAddCircle } from "react-icons/md";
import { FaPersonHalfDress } from "react-icons/fa6";

const DashBoard = () => {
    return (
        <div className="flex flex-row  ">
            <div className="md:w-[20%] w-[15%] text-white bg-slate-800 min-h-screen ">
                <h1 className="text-center text-xl py-6 font-bold">Dashboard</h1>

                <div>
                    <Link to={'/'}><p className="flex gap-2 items-center ml-6 md:flex-row flex-col  text-sm py-2"><FaHome className="md:text-2xl text-orange-600"></FaHome> Home</p></Link>
                    <Link to={'/dash/ord'}> <p className="flex md:flex-row flex-col  text-sm gap-2 items-center ml-6 py-2 "><FaCartArrowDown className="md:text-2xl  text-orange-600" />My Order List</p></Link>
                    <Link to={'/dash/rev'}><p className="flex gap-2 md:flex-row flex-col  text-sm items-center ml-6 py-2"><MdReviews className="md:text-2xl text-orange-600" /> My reviews</p></Link>
                </div>
                <div>
                    <p className="flex gap-2 items-center ml-6 md:flex-row flex-col  text-sm py-2"><FaUserPlus className="md:text-2xl text-orange-600"  />All User</p>
                <Link to={'/dash/allorder'}> <p className="flex gap-2 md:flex-row flex-col  text-sm items-center ml-6 py-2 "><BiSolidCartAlt  className="md:text-2xl text-orange-600"/>All Orders</p></Link>   
                    <Link to={'/dash/allrev'}><p className="flex gap-2 md:flex-row flex-col  text-sm items-center ml-6 py-2 "><MdRateReview  className="md:text-2xl text-orange-600" />All reviews</p></Link>
                  <Link to={'/dash/add'}>  <p className="flex gap-2 items-center md:flex-row flex-col  text-sm  ml-6 py-2 "><MdOutlineAddCircle  className="md:text-2xl text-orange-600" />Add Items</p></Link>
                  <Link to={'/dash/allitem'}>  <p className="flex gap-2 items-center md:flex-row flex-col  text-sm  ml-6 py-2 "><FaPersonHalfDress className="md:text-2xl text-orange-600" />ALL Items</p></Link>
                </div>
             
              
            </div>
            <div className="w-full">
              <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default DashBoard;