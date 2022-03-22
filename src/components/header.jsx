import React from "react";
import logoImg from "../Images/logo.webp"

const Header = () => 
{
    return ( <header>
        <div className="container-lg"><img src={logoImg} alt="" /></div>
    </header>)
}
export default Header