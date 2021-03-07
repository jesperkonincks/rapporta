import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPaperPlane, FaFileInvoice  } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 800) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            <FaFileInvoice clasName="navbar-icon" />
                            TimeDesk
                        </Link>
                        <div class="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li class="nav-item">
                                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/diensten' className="nav-links" onClick={closeMobileMenu}>
                                    Diensten
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/over-ons' className="nav-links" onClick={closeMobileMenu}>
                                    Over ons
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <Link to='/login' className="btn-link">
                                        <Button buttonStyle="btn--outline">Log In</Button>
                                    </Link>
                                ) : (
                                    <Link to='/login' className="btn-link" onClick={closeMobileMenu}>
                                        <Button buttonStyle="btn--outline" buttonSize="btn--mobile">Log In</Button>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar