'use client'
import Layout from "@/components/layout/Layout"
import Pricing from "@/components/sections/home1/Pricing"
import Link from "next/link"
import { useState } from "react"
export default function pricing() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Pricing & Plan">


            <section className="pricing-style-two pricing-page sec-pad">
                <div className="auto-container">
                    <div className="sec-title centred">
                        <h6>Pricing & Plan</h6>
                        <h2>Affordable Pricing Plans</h2>
                        <p>Nor again is there anyone who loves or pursues desires.</p>
                    </div>
                    <div className="tabs-box">
                        <div className="tab-btns tab-buttons centred">
                            <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>Yearly</li>
                            <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>Monthly</li>
                        </div>
                        <div className="tabs-content">
                            <div className={activeIndex === 1 ? "tab active-tab" : "tab"} id="yearly">
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-table-two">
                                            <div className="inner-box">
                                                <div className="icon-box"><img src="assets/images/icons/icon-33.png" alt=""/></div>
                                                <h3>Creator</h3>
                                                <p>Freelancers, Marketers & Entrepreneurs to Automate Daily Tasks.</p>
                                                <div className="price-box clearfix">
                                                    <h4>$25.00 <span>/ Yr</span></h4>
                                                    <Link href="/index-2">Choose Plan</Link>
                                                </div>
                                                <ul className="feature-list clearfix">
                                                    <li>Generate 10k Words</li>
                                                    <li>40+ Use Cases</li>
                                                    <li>20+ Language</li>
                                                    <li>50+ templates</li>
                                                    <li>1 Brand Voice</li>
                                                    <li>Generate upto 5 images</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-table-two active-block">
                                            <div className="inner-box">
                                                <div className="icon-box"><img src="assets/images/icons/icon-34.png" alt=""/></div>
                                                <h3>Teams</h3>
                                                <p>Freelancers, Marketers & Entrepreneurs to Automate Daily Tasks.</p>
                                                <div className="price-box clearfix">
                                                    <h4>$49.00 <span>/ Yr</span></h4>
                                                    <Link href="/index-2">Choose Plan</Link>
                                                </div>
                                                <ul className="feature-list clearfix">
                                                    <li>Generate 25k Words</li>
                                                    <li>50+ Use Cases</li>
                                                    <li>25+ Language</li>
                                                    <li>75+ templates</li>
                                                    <li>3 Brand Voice</li>
                                                    <li>Generate upto 10 images </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-table-two">
                                            <div className="inner-box">
                                                <div className="icon-box"><img src="assets/images/icons/icon-35.png" alt=""/></div>
                                                <h3>Business</h3>
                                                <p>Freelancers, Marketers & Entrepreneurs to Automate Daily Tasks.</p>
                                                <div className="price-box clearfix">
                                                    <h4>$99.00 <span>/ Yr</span></h4>
                                                    <Link href="/index-2">Choose Plan</Link>
                                                </div>
                                                <ul className="feature-list clearfix">
                                                    <li>Generate 50k Words</li>
                                                    <li>75+ Use Cases</li>
                                                    <li>30+ Language</li>
                                                    <li>100+ templates</li>
                                                    <li>10 Brand Voice</li>
                                                    <li>Generate upto 25 images</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="monthly">
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-table-two">
                                            <div className="inner-box">
                                                <div className="icon-box"><img src="assets/images/icons/icon-33.png" alt=""/></div>
                                                <h3>Creator</h3>
                                                <p>Freelancers, Marketers & Entrepreneurs to Automate Daily Tasks.</p>
                                                <div className="price-box clearfix">
                                                    <h4>$15.00 <span>/ Mo</span></h4>
                                                    <Link href="/index-2">Choose Plan</Link>
                                                </div>
                                                <ul className="feature-list clearfix">
                                                    <li>Generate 10k Words</li>
                                                    <li>40+ Use Cases</li>
                                                    <li>20+ Language</li>
                                                    <li>50+ templates</li>
                                                    <li>1 Brand Voice</li>
                                                    <li>Generate upto 5 images</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-table-two active-block">
                                            <div className="inner-box">
                                                <div className="icon-box"><img src="assets/images/icons/icon-34.png" alt=""/></div>
                                                <h3>Teams</h3>
                                                <p>Freelancers, Marketers & Entrepreneurs to Automate Daily Tasks.</p>
                                                <div className="price-box clearfix">
                                                    <h4>$39.00 <span>/ Mo</span></h4>
                                                    <Link href="/index-2">Choose Plan</Link>
                                                </div>
                                                <ul className="feature-list clearfix">
                                                    <li>Generate 25k Words</li>
                                                    <li>50+ Use Cases</li>
                                                    <li>25+ Language</li>
                                                    <li>75+ templates</li>
                                                    <li>3 Brand Voice</li>
                                                    <li>Generate upto 10 images </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                                        <div className="pricing-table-two">
                                            <div className="inner-box">
                                                <div className="icon-box"><img src="assets/images/icons/icon-35.png" alt=""/></div>
                                                <h3>Business</h3>
                                                <p>Freelancers, Marketers & Entrepreneurs to Automate Daily Tasks.</p>
                                                <div className="price-box clearfix">
                                                    <h4>$79.00 <span>/ Mo</span></h4>
                                                    <Link href="/index-2">Choose Plan</Link>
                                                </div>
                                                <ul className="feature-list clearfix">
                                                    <li>Generate 50k Words</li>
                                                    <li>75+ Use Cases</li>
                                                    <li>30+ Language</li>
                                                    <li>100+ templates</li>
                                                    <li>10 Brand Voice</li>
                                                    <li>Generate upto 25 images</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Pricing />


            <section className="clients-section pricing-page">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}></div>
                <div className="outer-container">
                    <div className="sec-title centred">
                        <h6>[ Clients & Partners ]</h6>
                        <h2>Trusted by 1.5M+ Users</h2>
                        <p>Undertakes laborious physical exercise except to obtain some advantage from it? </p>
                    </div>
                    <div className="single-block">
                        <div className="animation">
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-1.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-2.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-3.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-4.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-5.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-6.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-7.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-1.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-2.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-3.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-1.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-2.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-3.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-4.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-5.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-6.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-7.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-1.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-2.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-3.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-1.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-2.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-3.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-4.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-5.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-6.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-7.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-1.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-2.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-3.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-1.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-2.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-3.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-4.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-5.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-6.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-7.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-1.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-2.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-3.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-1.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-2.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-3.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-4.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-5.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-6.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-7.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-1.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-2.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-3.png" alt=""/></Link></div>
                        </div>
                    </div>
                    <div className="single-block">
                        <div className="animation">
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-8.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-9.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-10.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-11.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-12.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-12.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-12.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-8.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-9.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-10.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-8.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-9.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-10.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-11.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-12.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-12.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-12.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-8.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-9.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-10.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-8.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-9.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-10.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-11.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-12.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-12.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-12.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-8.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-9.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-10.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-8.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-9.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-10.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-11.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-12.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-12.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-12.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-8.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-9.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-10.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-8.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-9.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-10.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-11.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-12.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-12.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-12.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-8.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-9.png" alt=""/></Link></div>
                            <div className="clients-logo"><Link href="/pricing"><img src="assets/images/clients/clients-10.png" alt=""/></Link></div>
                        </div>
                    </div>
                    <div className="btn-box centred">
                        <Link href="/pricing" className="theme-btn btn-one">Try AI.zenius for Free</Link>
                    </div>
                </div>
            </section>
            
            </Layout>
        </>
    )
}