import Link from "next/link"

export default function Service() {
    return (
        <> 

        <section className="service-section bg-color-1">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-12 col-sm-12 service-block">
                        <div className="service-block-one">
                            <div className="inner-box">
                                <div className="content-box">
                                    <h3><Link href="/case-details"><span>Content</span><span>Generation</span></Link></h3>
                                    <p>Right to find fault with man chooses to enjoy a pleasure that has annoying...</p>
                                    <div className="link-box">
                                        <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt=""/></div>
                                        <Link href="/case-details">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 service-block">
                        <div className="service-block-two">
                            <div className="inner-box">
                                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                                <div className="sec-title light">
                                    <h6>[ Services ]</h6>
                                    <h2>Most Popular Services</h2>
                                </div>
                                <div className="text-box">
                                    <p>Undertakes laborious physical exercise except to obtain some advantage from it?</p>
                                    <Link href="/case-details" className="theme-btn btn-two">View All Services</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 service-block">
                        <div className="service-block-one">
                            <div className="inner-box">
                                <div className="content-box">
                                    <h3><Link href="/case-details"><span>Marketing</span><span>Communications</span></Link></h3>
                                    <p>To the claims of duty or the obligations of business it will frequently occur...</p>
                                    <div className="link-box">
                                        <div className="icon-box"><img src="assets/images/icons/icon-6.png" alt=""/></div>
                                        <Link href="/case-details">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 service-block">
                        <div className="service-block-one">
                            <div className="inner-box">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                                        <div className="content-box">
                                            <h3><Link href="/case-details"><span>Editing &</span><span>Proof Reading</span></Link></h3>
                                            <p>The wise man therefore all always holds in these mat- ters to this principle...</p>
                                            <div className="link-box">
                                                <div className="icon-box"><img src="assets/images/icons/icon-7.png" alt=""/></div>
                                                <Link href="/case-details">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/resource/dashboard-2.jpg" alt=""/></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 service-block">
                        <div className="service-block-one">
                            <div className="inner-box">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                                        <div className="content-box">
                                            <h3><Link href="/case-details"><span>Language</span><span>Localization</span></Link></h3>
                                            <p>Foresee the pain and trou- ble that are bound to ensue and equal blame...</p>
                                            <div className="link-box">
                                                <div className="icon-box"><img src="assets/images/icons/icon-8.png" alt=""/></div>
                                                <Link href="/case-details">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/resource/dashboard-3.jpg" alt=""/></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
