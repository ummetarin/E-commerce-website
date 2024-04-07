import { Link, Outlet } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { BiSolidCartAlt } from "react-icons/bi";
import { MdRateReview } from "react-icons/md";
import { MdOutlineAddCircle } from "react-icons/md";

const DashBoard = () => {
    return (
        <div className="flex flex-row  ">
            <div className="w-[20%] text-white bg-slate-800 min-h-screen ">
                <h1 className="text-center text-xl py-6 font-bold">Dashboard</h1>

                <div>
                    <Link to={'/'}><p className="flex gap-2 items-center ml-6 py-2"><FaHome className="text-2xl text-orange-600"></FaHome> Home</p></Link>
                    <Link to={'/dash/ord'}> <p className="flex gap-2 items-center ml-6 py-2 "><FaCartArrowDown className="text-2xl text-orange-600" />My Order List</p></Link>
                    <Link to={'/dash/rev'}><p className="flex gap-2 items-center ml-6 py-2"><MdReviews className="text-2xl text-orange-600" /> My reviews</p></Link>
                </div>
                <div>
                    <p className="flex gap-2 items-center ml-6 py-2"><FaUserPlus className="text-2xl text-orange-600"  />All User</p>
                <Link to={'/dash/allorder'}> <p className="flex gap-2 items-center ml-6 py-2 "><BiSolidCartAlt  className="text-2xl text-orange-600"/>All Orders</p></Link>   
                    <p className="flex gap-2 items-center ml-6 py-2 "><MdRateReview  className="text-2xl text-orange-600" />All reviews</p>
                    <p className="flex gap-2 items-center ml-6 py-2 "><MdOutlineAddCircle  className="text-2xl text-orange-600" />Add Items</p>
                </div>
             
              
            </div>
            <div className="w-full">
              <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default DashBoard;