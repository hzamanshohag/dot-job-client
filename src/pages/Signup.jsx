import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Signup = () => {
  const { handleSignUp, googleLogin } = useContext(AuthContext);

  const handleNewUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    handleSignUp(email, password)
      .then((data) => {
        const user = data.user;
        console.log(user);
      toast("User Create Successfully!");
      })
      .catch((err) => {
        toast(err.message);
      });
  };

  const handleGoogle = () => {
    googleLogin()
    .then(data =>{
      const user = data.user;
      console.log(user);
    })
    .catch(err =>{
      const errorMessage = err.code;
      console.log(errorMessage);
    })
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white font-sans mx-auto my-8 md:my-10">
      <h1 className="backdrop-blur-sm text-4xl pb-8">Sign Up</h1>
      {/* Input fields and the form started */}
      <form onSubmit={handleNewUser} className="space-y-6">
        <div className="space-y-2 text-sm">
          <label htmlFor="username" className="block ">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Username"
            name="name"
            className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
          />
        </div>
        <div className="space-y-2 text-sm">
          <label htmlFor="username" className="block ">
            Your photo
          </label>
          <input
            type="text"
            placeholder="Photo"
            name="photo"
            className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
          />
        </div>
        <div className="space-y-2 text-sm">
          <label htmlFor="username" className="block ">
            Your email
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
          />
        </div>
        <div className="space-y-2 text-sm">
          <label htmlFor="password" className="block ">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
          />
        </div>
        {/* Sign in Button */}
        <button className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
          Sign Up
          <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
            Let&apos;s go
          </span>
          <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
          <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
          <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
          <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-2">
        <div className="flex-1 h-px bg-gray-300"></div>
        <p className="text-sm text-gray-600">Signup with social accounts</p>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
      {/* Social icons */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleGoogle}
          aria-label="Log in with Google"
          className="p-3 rounded-full hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>
        <button
          aria-label="Log in with Twitter"
          className="p-3 rounded-full hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-6 h-6 fill-current"
          >
            <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
          </svg>
        </button>
        <button
          aria-label="Log in with GitHub"
          className="p-3 rounded-full hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
          </svg>
        </button>
      </div>
      <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
        Already have an account?
        <Link to="/login" className="underline hover:text-indigo-600">
          Log in
        </Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Signup;
