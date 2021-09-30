import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
   return (
      <div>
         <h1 className="text-center text-success my-3">Welcome To Family Business</h1>
         <ul className="d-flex bg-dark py-3 mb-0">

            <NavLink
               className="text-decoration-none ms-3 list-style-none text-light"
               to="/home"
               activeStyle={{
                  fontWeight: "bold",
                  color: "red"
               }}
               activeClassName="selected">
               Home
            </NavLink>

            <NavLink
               className="text-decoration-none ms-3 list-style-none text-light"
               to="/restaurent"
               activeStyle={{
                  fontWeight: "900",
                  color: "red"
               }}
               activeClassName="selected">
               Restaurent
            </NavLink>

            <NavLink
               className="text-decoration-none ms-3 list-style-none text-light"
               to="/shop"
               activeStyle={{
                  fontWeight: "900",
                  color: "red"
               }}
               activeClassName="selected">
               Shop
            </NavLink>

            <NavLink
               className="text-decoration-none ms-3 list-style-none text-light"
               to="/about"
               activeStyle={{
                  fontWeight: "bold",
                  color: "red"
               }}
               activeClassName="selected">
               About
            </NavLink>
         </ul>



      </div>
   );
};

export default Header;