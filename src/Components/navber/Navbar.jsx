import { Link } from "react-router-dom";
import { TbLogin2 } from "react-icons/tb";
import { BiSolidCartAdd } from "react-icons/bi";
import { useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { AuthContext } from "../Security/AuthProvider";
import Swal from "sweetalert2";
import useCarts from "../Hook/useCarts";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cartdata]=useCarts()

  const handlelogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-middle",
          icon: "success",
          title: "Loged Out!!!!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar fixed z-30 bg-opacity-90 bg-black text-white font-bold">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Menu</a>
              <ul className="p-2 text-black ">
                <Link to="/men">
                  {" "}
                  <li>
                    <a>Men</a>
                  </li>
                </Link>
                <Link to={"/wom"}>
                  {" "}
                  <li>
                    <a>Women</a>
                  </li>
                </Link>
                <Link to="/teen">
                  {" "}
                  <li>
                    <a>Teen</a>
                  </li>
                </Link>
                <Link to={"/sport"}>
                  {" "}
                  <li>
                    <a>Sport</a>
                  </li>
                </Link>
                <Link to="/child">
                  {" "}
                  <li>
                    <a>Child</a>
                  </li>
                </Link>
                <Link to={"/acs"}>
                  {" "}
                  <li>
                    <a>Acceceries</a>
                  </li>
                </Link>
              </ul>
            </li>
            <Link to={"/res"}>
              {" "}
              <li>
                <a>Register</a>
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-row justify-center items-center md:w-[200px]">
          <img
            className="md:h-24 h-12 "
            src="https://i.ibb.co/ypcs3mp/6dcd95192542125-Y3-Jvc-Cwy-NTU2-LDIw-MDAs-Mj-Ix-LDA-removebg-preview.png"
            alt=""
          />
          <a className=" md:text-2xl text-xl text-yellow-600">Xport</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to={"/"}>
            {" "}
            <li>
              <a>Home</a>
            </li>
          </Link>
          <li>
            <details>
              <summary>MENU</summary>
              <ul className="p-2 text-black ">
                <Link to="/men">
                  {" "}
                  <li>
                    <a>Men</a>
                  </li>
                </Link>
                <Link to={"/wom"}>
                  {" "}
                  <li>
                    <a>Women</a>
                  </li>
                </Link>
                <Link to="/teen">
                  {" "}
                  <li>
                    <a>Teen</a>
                  </li>
                </Link>
                <Link to={"/sport"}>
                  {" "}
                  <li>
                    <a>Sport</a>
                  </li>
                </Link>
                <Link to="/child">
                  {" "}
                  <li>
                    <a>Child</a>
                  </li>
                </Link>
                <Link to={"/acs"}>
                  {" "}
                  <li>
                    <a>Acceceries</a>
                  </li>
                </Link>
              </ul>
            </details>
          </li>
          <Link to={"/res"}>
            {" "}
            <li>
              <a>Register</a>
            </li>
          </Link>
        </ul>
      </div>
      <div className="navbar-end gap-1">
        {user ? (
          <>
            <img
              onClick={handlelogout}
              className="h-12"
              src="https://i.ibb.co/pLPR3DK/pngtree-vector-logout-icon-png-image-1022628-removebg-preview.png"
              alt=""
            ></img>
            <img src={user?.photoURL} alt="" />
          </>
        ) : (
          <>
            {" "}
            <Link to={"/log"}>
              {" "}
              <a className="btn bg-yellow-700 text-white">
                <TbLogin2 />
              </a>
            </Link>
          </>
        )}
        {/* <a className=" "> <img className="h-12" src="https://i.ibb.co/rmh2m78/images-1-removebg-preview.png" alt="" /></a> */}

        <button className="btn items-center flex justify-center">
        <FaCartArrowDown className="text-2xl" />
          <div className=" rounded-lg font-bold text-red-600 text-sm ">+{cartdata?.length}</div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
