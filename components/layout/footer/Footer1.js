import Link from "next/link"

export default function Footer1() {
    return (
        <>
        <footer className="main-footer bg-color-2">
            <div className="widget-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget about-widget">
                                <div className="widget-title">
                                    <h3>Our Community</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="clients-list clearfix">
                                        <li><img src="assets/images/resource/clients-1.jpg" alt=""/></li>
                                        <li><img src="assets/images/resource/clients-2.jpg" alt=""/></li>
                                        <li><img src="assets/images/resource/clients-3.jpg" alt=""/></li>
                                        <li><h5>+5k</h5></li>
                                    </ul>
                                    <h3>Unique highly effective!...</h3>
                                    <p>Loves or pursues or desires to obtain pain  itself, because it is pain, but because occasionally of all our circumstances.</p>
                                    <h4>Dedrew Kowzel</h4>
                                    <span className="designation">Ceo & Founder - Soft Solution</span>
                                    <h6><i className="fa-brands fa-facebook"></i><Link href="/">Join With Us</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h3>Useful Links</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><Link href="/">Blog writing</Link></li>
                                        <li><Link href="/">Emails</Link></li>
                                        <li><Link href="/">Social media Ads</Link></li>
                                        <li><Link href="/">Video</Link></li>
                                        <li><Link href="/">Copywriting</Link></li>
                                        <li><Link href="/">Creative writing</Link></li>
                                        <li><Link href="/">SEO</Link></li>
                                        <li><Link href="/">Magic command</Link></li>
                                        <li><Link href="/">Text editing</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h3>Company</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><Link href="/">About us</Link></li>
                                        <li><Link href="/">Pricing</Link></li>
                                        <li><Link href="/">Press Room</Link></li>
                                        <li><Link href="/">Partners</Link></li>
                                        <li><h3>Support</h3></li>
                                        <li><Link href="/">Help Center</Link></li>
                                        <li><Link href="/">Live Training</Link></li>
                                        <li><Link href="/">Community Page</Link></li>
                                        <li><Link href="/">Status Page</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget subscribe-widget">
                                <div className="widget-title">
                                    <h3>Subscribe Us</h3>
                                </div>
                                <div className="widget-content">
                                    <p>Subscribe our newsletter & get updates to your inbox directly.</p>
                                    <div className="form-inner">
                                        <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-25.png)' }}></div>
                                        <form method="post" action="/contact">
                                            <div className="form-group">
                                                <div className="icon"><i className="far fa-envelope-open"></i></div>
                                                <input type="email" name="email" placeholder="Email address ..." required/> 
                                                <button type="submit" className="theme-btn btn-one">Subscribe Us</button>
                                            </div>
                                        </form>
                                    </div>
                                    <h3>Follow On</h3>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="fa-brands fa-facebook"></i></Link></li>
                                        <li><Link href="/"><i className="fa-brands fa-square-twitter"></i></Link></li>
                                        <li><Link href="/"><i className="fa-solid fa-basketball"></i></Link></li>
                                        <li><Link href="/"><i className="fa-brands fa-youtube"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="bottom-inner">
                        <div className="copyright"><p>Copyright {new Date().getFullYear()} <Link href="/">AI.zenius.</Link> All Rights Reserved.</p></div>
                        <ul className="footer-nav clearfix">
                            <li><Link href="/">Privacy Policy</Link></li>
                            <li><Link href="">Terms & Condition</Link></li>
                            <li><Link href="/">Legal</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

        </>
    )
}
