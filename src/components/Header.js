import React, { useState } from 'react';

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <header>
                <nav className='navbar'>
                    <a href='#' className="logo">
                        <img src="./logoo.png" className='logo-img' alt="" />
                        <h2>Tuni-Ggregator <span>AI</span></h2>
                    </a>

                    <div className={openMenu ? "menu active" : "menu"}>
                        <ul className='navbar-list'>
                            <li><a href="#about-us" onClick={()=> {setOpenMenu(false)}}>About Us</a></li>
                            <li><a href="#tokenomics" onClick={()=> {setOpenMenu(false)}}>Tokenomics</a></li>
                            <li><a href="#roadmap" onClick={()=> {setOpenMenu(false)}}>Roadmap</a></li>
                            <li><a href="https://host-account.gitbook.io/tuni-gregator/introduction/tuni-ggregator-ai" target="_blank" onClick={()=> {setOpenMenu(false)}}>Docs</a></li>
                            <li><a href="#" onClick={()=> {setOpenMenu(false)}}>Dapp</a></li>
                        </ul>
                        
                        <div className="mobile-navbar-btn d-flex align-items-center">
                            <div className="openNav-btn menu-btn"
                                onClick={() => { setOpenMenu(true) }}><i className="fa-solid fa-bars"></i></div>
                            <div className="closeNav-btn menu-btn"
                                onClick={() => { setOpenMenu(false) }}><i className="fa-solid fa-xmark"></i></div>
                        </div>
                    </div>

                </nav>
            </header>
        </>
    )
}

export default Header
