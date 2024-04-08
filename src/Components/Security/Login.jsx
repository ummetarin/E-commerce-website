import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

export const Login = () => {
    const { signIn, gogglesignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const location=useLocation()
    const from=location.state?.from?.pathname || "/";

    const handlelog = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;

        signIn(email, pass)
        .then(res => {
            const user = res.user;
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully Login",
                showConfirmButton: false,
                timer: 1500
            });
  
            const { from } = location.state || { from: { pathname: "/" } }; 
            navigate(from, { replace: true }); 
        })
        .catch(error => {
            console.error("Error signing in:", error);
        });
    }
    const handlegoggle=()=>{
        gogglesignIn()
        .then(result =>{
            const userifo={
                email:result.user?.email,
                name:result.user?.displayName
            }
            axios.post('http://localhost:5000/users',userifo)
            .then(res=>{
             Swal.fire({
               position: "top-center",
               icon: "success",
               title: "User Added Done",
               showConfirmButton: false,
               timer: 1500
             });
            })
        })
    }
       


    return (
        <div className="pt-36 pb-24">
            <div className="w-full mx-auto lg:w-[800px] shadow-lg bg-white flex  group text-[#0095ff]">
                <div className="w-1/2 min-h-full bg-[#0095ff] relative overflow-hidden hidden lg:block">
                    <img src="https://i.ibb.co/TLSXPry/bbfb4b3d9818f6854b8bd72a697e05b7.jpg" alt="" />
                </div>
               <div>
               
                <form onSubmit={handlelog} className="p-8 flex-1">
                    <h1 className="text-4xl pb-4 font-bold text-black">Login</h1>
                    <div className="space-y-5">
                        <label htmlFor="email_"  className="block">Email</label>
                        <input id="email_" name="email" required type="email" placeholder="example@example.com" className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#040405]"/>
                        <label htmlFor="password_" className="block">Password</label>
                        <input id="password_" required name="pass" type="password" placeholder=".............." min={5} className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-[#121517]"/>
                    </div>
                    <button type="submit" className="py-2 px-5 mb-4 mt-8 overflow-hidden shadow-lg border-2 rounded-md border-dashed border-[#16181a] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#d1e1ec] before:hover:translate-x-0  before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0c0c0c] relative inline-block hover:text-white z-50">Login</button>
                </form>

                <div className="py-5">
                  <button onClick={handlegoggle} type="button" className="py-1 px-5  mt-5 mx-auto block shadow-lg border rounded-md border-black"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current inline-block mr-2"><path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path></svg>Continue with Google</button>
                  </div>
               </div>
               
            </div>
        </div>
    );
};

export default Login;
