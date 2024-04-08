import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";


const Register = () => {
      
    const{createUser,updateProfile, gogglesignIn}=useContext(AuthContext)

     const handleres=e=>{
        e.preventDefault();
        const form=e.target
        const name=form.name.value
        const pass=form.pass.value
        const email=form.email.value
        console.log(name,pass,email);
        createUser(email,pass)
        .then(result=>{
            const loguser=result.user;
            axios.post('http://localhost:5000/users',loguser)
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

     const handlegoggle=()=>{
        gogglesignIn()
        .then(result =>{
            const userifo={
                email:result.user?.email,
                name:result.user?.displayName
            }
            axios.post('http://localhost:5000/users')
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
        <div className="pt-24">
            <div className="flex h-screen items-center justify-center bg-[#8EA7E9]/20 p-6 md:p-0">
            <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md  md:h-[90%] md:w-[80%] lg:h-[80%]">
                {/* register design side  */}
                <div className="relative hidden h-full items-center justify-center  md:flex md:w-[60%] lg:w-[40%]">
                   <div className="h-full">
                    <img className="h-full" src="https://i.ibb.co/F8vtrm8/1.jpg" alt="" />
                   </div>
                  
                </div>
                {/* input side  */}
                <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
                    <h2 className="pb-5 text-center text-3xl font-bold text-black">Register Here</h2>
                    <form onSubmit={handleres} className="flex  w-full flex-col items-center justify-center gap-4">
                        <input  className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]" type="text" placeholder="Name" name="name" required/>
                        <input required className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]" type="email" placeholder="Email" name="email"/>
                        <input required className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]" type="password" placeholder="Password" name="pass"/>
                        <p className="text-[14px] text-gray-400">Do not have an account ? <Link to={'/log'}><a className="text-[#8EA7E9] ">Login</a></Link></p>
                        <input className="w-[80%] rounded-lg bg-[#8EA7E9] px-6 py-2 font-medium text-white md:w-[60%]" type="submit" />
                    </form>
                  <div>
                  <button onClick={handlegoggle} type="button" className="py-1 px-5  mt-5 mx-auto block shadow-lg border rounded-md border-black"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current inline-block mr-2"><path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path></svg>Continue with Google</button>
                  </div>
                  
                  
                </div>
            </div>
        </div>
        </div>

    );
};

export default Register;