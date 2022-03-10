import React from 'react'
import Link from 'next/link'
function Header() {
    function show(){
        $('.navbar').toggleClass('active')
    }  
    return (
        <header>
            <div className="navbar">
                <div className="logo">
                    <Link className="logo-link" href={"/"}>Cover All Web Solutions</Link>
                </div>
                <nav>
                    <ul>
                        <li><Link className="navlink" activeClassName="link-active" href={"/"}>About Me</Link></li>
                        <li><Link className="navlink" activeClassName="link-active" href={"/portfolio"}>Portfolio</Link></li>
                        <li><Link className="navlink" activeClassName="link-active" href={"/skills"}>Skills</Link></li>
                        <li><Link className="navlink" activeClassName="link-active" href={"/team"}>Team</Link></li>
                        <li><Link className="navlink" activeClassName="link-active" href={"/contact"}>Contact Us</Link></li>
                    </ul>
                </nav>
            <div className="toggle-menu" onClick={show}>
                <i className="bars"></i>
            </div>
            </div>
        </header>   
         
        )
    
        
}

export default Header
