import { Link, NavLink } from "react-router-dom";

import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";

const Navbar = () => {

  const {logOut , user} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(user =>{
      console.log(user);
    })
    .catch(err =>{
      console.log(err);
    })
  }
  
    return (
      <div className="navbar bg-base-100">
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
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/findjob">Find Job</NavLink>
              </li>
              {user ? (
                <>
                  <li>
                    <NavLink to="/addjob">Add Job</NavLink>
                  </li>
                  <li>
                    <NavLink to="/myjob/">My Job</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mybids/">My Bids</NavLink>
                  </li>
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            Dot Job
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/findjob">Find Job</NavLink>
            </li>
            {user ? (
              <>
                <li>
                  <NavLink to="/addjob">Add Job</NavLink>
                </li>
                <li>
                  <NavLink to="/myjob/">My Job</NavLink>
                </li>
                <li>
                  <NavLink to="/mybids/">My Bids</NavLink>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <p>{user?.displayName}</p>
                </li>
                <li>
                  <p>{user?.email}</p>
                </li>
                <li>
                  <Link onClick={handleLogOut}>Logout</Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    );
};

export default Navbar;