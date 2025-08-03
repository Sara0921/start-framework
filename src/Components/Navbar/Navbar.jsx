
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Aave, Like, LoginCurve } from "iconsax-reactjs";
import { useState } from "react";
import { Link, NavLink } from "react-router";


export default function AppNavbar() {
  const [Islogin, setIsLogin] = useState(false);
  return (
    <Navbar rounded>
      <NavbarBrand as={Link}>
        <Aave size="32" className="text-blue-400" />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {Islogin ? <div className="flex items-center gap-2">
          <div className="size-10">
          <img src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg" alt="user icon" />
        </div>
        <div className="flex gap-2"><span className="font-bold">Hello</span>
        <span>Sara</span>
        </div>
        <LoginCurve size="26" className="text-red-600"/>
       
        </div>
       
         : <NavLink to={"/login"}>Login</NavLink>}
      </NavbarCollapse>
    </Navbar>
  );
}
