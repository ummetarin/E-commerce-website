import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";

export const Login = () => {
    const { signIn } = useContext(AuthContext);
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

            // Extract the necessary data for navigation
            const { from } = location.state || { from: { pathname: "/" } }; // Default to home
            navigate(from, { replace: true }); // Navigate to the specified location
        })
        .catch(error => {
            console.error("Error signing in:", error);
            // Handle sign-in error, if needed
        });
    }

    return (
        <div className="pt-36">
            <div className="w-full mx-auto lg:w-[800px] shadow-lg bg-white flex group text-[#0095ff]">
                <div className="w-1/2 min-h-full bg-[#0095ff] relative overflow-hidden hidden lg:block">
                    <img src="https://i.ibb.co/TLSXPry/bbfb4b3d9818f6854b8bd72a697e05b7.jpg" alt="" />
                </div>
                <form onSubmit={handlelog} className="p-8 flex-1">
                    <h1 className="text-4xl pb-4 font-bold text-black">Login</h1>
                    <div className="space-y-5">
                        <label htmlFor="email_" className="block">Email</label>
                        <input id="email_" name="email" type="email" placeholder="example@example.com" className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#040405]"/>
                        <label htmlFor="password_" className="block">Password</label>
                        <input id="password_" name="pass" type="password" placeholder=".............." min={5} className="p-3 block w-full shadow-lg outline-none border-2 rounded-md border-dashed invalid:border-red-700 valid:border-[#121517]"/>
                    </div>
                    <button type="submit" className="py-2 px-5 mb-4 mt-8 overflow-hidden shadow-lg border-2 rounded-md border-dashed border-[#16181a] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#d1e1ec] before:hover:translate-x-0  before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0c0c0c] relative inline-block hover:text-white z-50">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
