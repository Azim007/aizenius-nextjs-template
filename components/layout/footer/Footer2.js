import Link from "next/link"

export default function Footer2() {
    return (
        <>           
            
        <footer className="footer-style-two">
            <div className="widget-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget about-widget">
                                <div className="widget-title">
                                    <h3>About Us</h3>
                                </div>
                                <div className="widget-content">
                                    <p>These cases are perfectly simple easy to distinguish. In Link free hour, our power choice is untrammelled and when nothing.</p>
                                    <div className="copyright">&copy; {new Date().getFullYear()} <Link href="/">AI.zenius.</Link> All Rights Reserved.</div>
                                    <figure className="footer-logo"><Link href="//index-2"><img src="assets/images/logo-2.png" alt=""/></Link></figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h3>Useful Links</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><Link href="//index-2">Blog writing</Link></li>
                                        <li><Link href="//index-2">Emails</Link></li>
                                        <li><Link href="//index-2">Social media Ads</Link></li>
                                        <li><Link href="//index-2">Video</Link></li>
                                        <li><Link href="//index-2">Copywriting</Link></li>
                                        <li><Link href="//index-2">Creative writing</Link></li>
                                        <li><Link href="//index-2">SEO</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h3>Company</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><Link href="//index-2">About us</Link></li>
                                        <li><Link href="//index-2">Pricing</Link></li>
                                        <li><Link href="//index-2">Press Room</Link></li>
                                        <li><Link href="//index-2">Partners</Link></li>
                                        <li><Link href="//index-2">Help Center</Link></li>
                                        <li><Link href="//index-2">Live Training</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget social-widget">
                                <div className="widget-title">
                                    <h3>Connect With Us</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="social-list clearfix">
                                        <li><Link href="//index-2">Facebook<i className="fa-brands fa-facebook"></i></Link></li>
                                        <li><Link href="//index-2">Twitter<i className="fa-brands fa-square-twitter"></i></Link></li>
                                        <li><Link href="//index-2">Instagram<i className="fa-brands fa-square-instagram"></i></Link></li>
                                        <li><Link href="//index-2">Linkedin<i className="fa-brands fa-linkedin"></i></Link></li>
                                        <li><Link href="//index-2">Pinterest<i className="fa-brands fa-pinterest"></i></Link></li>
                                    </ul>
                                    <div className="chat-box">
                                        <button type="button"><span>Live Chat</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-two">
                <div className="auto-container">
                    <div className="bottom-inner">
                        <ul className="footer-nav clearfix">
                            <li><Link href="//index-2">Privacy Policy</Link></li>
                            <li><Link href="//index-2">Terms & Condition</Link></li>
                            <li><Link href="//index-2">Legal</Link></li>
                        </ul>
                        <a className="scroll-to-target scroll-top-two" href="#top"><i className="flaticon-down-arrow"></i>Back to Top</a>
                    </div>
                </div>
            </div>
        </footer>


        </>
    )
}
