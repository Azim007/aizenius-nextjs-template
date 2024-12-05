'use client'
import Link from "next/link"
import { useState } from "react"
export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><span className="fas fa-times" /></div>
                <nav className="menu-box">
                    <div className="nav-logo"><Link href="/"><img src="/assets/images/logo.png" alt="" /></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/">Home</Link>
                                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li><Link href="/">Home Page One</Link></li>
                                        <li><Link href="/index-2">Home Page Two</Link></li>
                                        <li><Link href="/index-3">Home Page Three</Link></li>
                                    </ul>
                                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">About</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/faq">Faq’s</Link></li>
                                    <li><Link href="/works">How It’s Work</Link></li>
                                    <li><Link href="/login">Login</Link></li>
                                    <li><Link href="/register">Register</Link></li>
                                    <li><Link href="/forgot-password">Forgot Password</Link></li>
                                    <li><Link href="/error">404</Link></li>
                                    </ul>
                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/#">Use Cases</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                    <li><Link href="/cases">Use Cases 01</Link></li>
                                    <li><Link href="/cases-2">Use Cases 02</Link></li>
                                    <li><Link href="/case-details">Cases Details</Link></li>
                                    </ul>
                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><Link href="/pricing">Pricing</Link></li>
                                <li className={isActive.key == 6 ? "dropdown current" : "dropdown"}><Link href="/#">Blog</Link>
                                    <ul style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                    <li><Link href="/blog">Blog Grid View</Link></li>
                                    <li><Link href="/blog-2">Blog List View</Link></li>
                                    <li><Link href="/blog-details">Blog Details</Link></li>
                                    </ul>
                                    <div className={isActive.key == 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(6)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>

                    </div>
                    {/*Social Links*/}
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><Link href="/#"><span className="fab fa-twitter" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-facebook-square" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-pinterest-p" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-instagram" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-youtube" /></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>{/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />

          

        </>
    )
}
