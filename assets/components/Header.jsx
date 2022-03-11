import React from 'react'
import Link from 'next/link'
import $ from 'jquery'
function Header() {
    function show(){
        // console.log( $('html').css('overflow'))
        if($('html').css('overflow-y')!== 'hidden'){
            $('html').css('overflow', 'hidden')
        }
        else{
            $('html').css('overflow-y', 'auto')
        }
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
                        <li><Link className="navlink" activeClassName="link-active" href={"/"}>About Us</Link></li>
                        <li><Link className="navlink" activeClassName="link-active" href={"/portfolio"}>Portfolio</Link></li>
                        <li><Link className="navlink" activeClassName="link-active" href={"/skills"}>Skills</Link></li>
                        <li><Link className="navlink" activeClassName="link-active" href={"/team"}>Team</Link></li>
                        <li><Link className="navlink" activeClassName="link-active" href={"/contact"}>Contact Us</Link></li>
                    </ul>
                </nav>
                <div className="toggle-menu" onClick={show} >
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </header>

    )


}

export default Header
