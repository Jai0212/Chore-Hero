import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" className='footer-logo' />
                    <p>Chore Hero is a fullstack web application wherein users can hire skilled people to do their chores.</p>
                </div>
                <div className="footer-content-center">
                    <h2>INFORMATION</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Our Services</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>CREATOR</h2>
                    <ul>
                        <li>Created by Jai Joshi</li>
                        <li>jj.joshijai@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © chore-hero.netlify.app - All Rights Reserved</p>
        </div>
    )
}

export default Footer