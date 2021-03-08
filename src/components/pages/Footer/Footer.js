import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin,
    FaFileInvoice
} from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Footer subscription heading
                </p>
                <p className="footer-subscription-text">
                    Test tekst
                </p>
                <div className="input-areas">
                    <form>
                        <input className="footer-input" name="email" type="email" placeholder="E-mailadres" />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Over ons</h2>
                        <Link to="">Hoe het werkt</Link>
                        <Link to="/ervaringen">Evaringen</Link>
                        <Link to="/algemene-voorwaarden">Algemene voorwaarden</Link>
                        <Link to="/privacy">Privacy beleid</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact</h2>
                        <Link to="/contact">Contact</Link>
                        <Link to="/privacy">Support</Link>
                        <Link to="/privacy">x</Link>
                        <Link to="/privacy">x</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Test</h2>
                        <Link to="/privacy">x</Link>
                        <Link to="/privacy">x</Link>
                        <Link to="/privacy">x</Link>
                        <Link to="/privacy">x</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Test</h2>
                        <Link to="/privacy">x</Link>
                        <Link to="/privacy">x</Link>
                        <Link to="/privacy">x</Link>
                        <Link to="/privacy">x</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            <FaFileInvoice clasName="navbar-icon" />
                            TimeDesk
                        </Link>
                    </div>
                    <small className="website-rights">TimeDesk © 2020</small>
                    <div className="social-icons">
                        <Link className="social-icon-link" to="/" target="_blank" aria-label="Facebook"><FaFacebook /></Link>
                        <Link className="social-icon-link" to="/" target="_blank" aria-label="Instagram"><FaInstagram /></Link>
                        <Link className="social-icon-link" to="/" target="_blank" aria-label="Youtube"><FaYoutube /></Link>
                        <Link className="social-icon-link" to="/" target="_blank" aria-label="Twitter"><FaTwitter /></Link>
                        <Link className="social-icon-link" to="/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;