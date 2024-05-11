import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navv = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/Login");
  };
  return (
     <div >
          <img 
          alt="logo"
          className="logo"
          src="https://img.freepik.com/premium-vector/bus-logo-fit-bus-logo-travel-transportation-logo-vector-illustration-flat-color-style_7297-377.jpg?w=2000" />
    {auth ?<ul className="Nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>

       <li>
        <Link to="/Booking">Booking</Link>
       </li>
         <li> <Link onClick={logout} to="/Login">
            Logout
          </Link></li>
          </ul>
        : 
          <ul className="Nav nav-right">
            <li> <Link to="/Login">Register</Link></li>
            
             <li> <Link to="/SignUp">Login</Link></li>
            
      </ul>
}
    </div>
  );
};
export default Navv;
