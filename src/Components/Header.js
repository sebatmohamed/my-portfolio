import React from 'react'

function Header() {
    return(
        <div className="header">

            <div className="logo">
                <a href="/home">
                    <div>Sebat</div>
                </a>
            </div>

            <div className="nav">
                <a href="/about">
                    <span>About</span>
                </a>
                <a href="/projects">
                    <span>Projects</span>
                </a>
                <a href="/contact">
                    <span>Contact</span>
                </a>
            </div>

        </div>
    )
}

export default Header