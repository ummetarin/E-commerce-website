import { Link } from "react-router-dom";
import { TbLogin2 } from "react-icons/tb";
import { BiSolidCartAdd } from "react-icons/bi";
const Navbar = () => {
    return (
        <div className="navbar fixed z-30 bg-opacity-90 bg-black text-white font-bold">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Menu</a>
                <ul className="p-2 text-black ">
              <Link to='/men'>    <li><a>Men</a></li></Link>
                 <Link to={'/wom'}> <li><a>Women</a></li></Link>
                 <Link to='/teen'>    <li><a>Teen</a></li></Link>
                 <Link to={'/sport'}> <li><a>Sport</a></li></Link>
                 <Link to='/child'>    <li><a>Child</a></li></Link>
                 <Link to={'/acs'}> <li><a>Acceceries</a></li></Link>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
        
        <div className="flex flex-row justify-center items-center w-[200px]">
        <img className="h-24 " src="https://i.ibb.co/ypcs3mp/6dcd95192542125-Y3-Jvc-Cwy-NTU2-LDIw-MDAs-Mj-Ix-LDA-removebg-preview.png" alt="" />
          <a className=" text-2xl text-yellow-600">Xport</a>
        </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
         <Link to={'/'}>   <li><a>Home</a></li></Link>
            <li>
              <details>
                <summary>MENU</summary>
                <ul className="p-2 text-black ">
              <Link to='/men'>    <li><a>Men</a></li></Link>
                 <Link to={'/wom'}> <li><a>Women</a></li></Link>
                 <Link to='/teen'>    <li><a>Teen</a></li></Link>
                 <Link to={'/sport'}> <li><a>Sport</a></li></Link>
                 <Link to='/child'>    <li><a>Child</a></li></Link>
                 <Link to={'/acs'}> <li><a>Acceceries</a></li></Link>
                </ul>
              </details>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div className="navbar-end gap-1">
       
          <a className="btn bg-yellow-700 text-white"><TbLogin2 /></a>
          <a className="btn bg-white text-black"> <BiSolidCartAdd /></a>
        </div>
      </div>
    );
};

export default Navbar;