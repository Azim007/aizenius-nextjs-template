'use client'
import Link from "next/link"
import { useState } from "react"
export default function Pricing() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    
    return (
        <>
        <section className="pricing-section bg-color-2">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="tabs-box">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 left-column">
                                <div className="left-content">
                                    <div className="sec-title light">
                                        <h6>Pricing & Plan</h6>
                                        <h2>Affordable Pricing Plans</h2>
                                        <p>Nor again is there anyone who loves or pursues or desires to obtain pain because occasionally circumstances.</p>
                                    </div>
                                    <div className="tab-btn-one">
                                        <ul className="tab-btns tab-buttons clearfix">
                                            <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>Creator <img src="assets/images/icons/icon-15.png" alt=""/></li>
                                            <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>Teams <img src="assets/images/icons/icon-16.png" alt=""/></li>
                                            <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>Business <img src="assets/images/icons/icon-17.png" alt=""/></li>
                                        </ul>
                                    </div>
                                    <div className="lower-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-17.png)" }}></div>
                                        <div className="icon-box"><img src="assets/images/icons/icon-14.png" alt=""/></div>
                                        <h3>Trustworthy Help to Choose Correct Plan</h3>
                                        <Link href="mailto:helpme@example.com">helpme@example.com</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 right-column">
                                <div className="tabs-content">
                                    <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                        <div className="tabs-box-2">
                                            <div className="tab-btn-two">
                                                <ul className="tab-btns tab-buttons-2 clearfix">
                                                    <li>
                                                        <div className="radio-box">
                                                            <input type="radio" id="checkbox1" name="same" defaultChecked/>
                                                            <label for="checkbox1">Yearly</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="radio-box">
                                                            <input type="radio" id="checkbox2" name="same"/>
                                                            <label for="checkbox2">Monthly</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="tabs-content-2">
                                                <div className="tab-2 active-tab-2" id="tab-12">
                                                    <div className="pricing-table-one">
                                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-21.png)" }}></div>
                                                        <span className="tags">Recommended</span>
                                                        <div className="table-header">
                                                            <div className="icon-box"><img src="assets/images/icons/icon-18.png" alt=""/></div>
                                                            <h3>Creator</h3>
                                                            <p>Freelancers, Marketers & Entrepreneurs to Automate Daily Tasks.</p>
                                                        </div>
                                                        <div className="table-content">
                                                            <ul className="feature-list clearfix">
                                                                <li>Generate 10k Words</li>
                                                                <li>40+ Use Cases</li>
                                                                <li>20+ Language</li>
                                                                <li>50+ templates</li>
                                                                <li>1 Brand Voice</li>
                                                                <li>Generate upto 5 images </li>
                                                            </ul>
                                                        </div>
                                                        <div className="table-footer">
                                                            <h3>$25.00 <span>[up to 4 Members]</span></h3>
                                                            <Link href="/" className="theme-btn btn-two">Choose&nbsp;Plan</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-2" id="tab-13">
                                                    <div className="pricing-table-one">
                                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-21.png)" }}></div>
                                                        <div className="table-header">
                                                            <div className="icon-box"><img src="assets/images/icons/icon-18.png" alt=""/></div>
                                                            <h3>Creator</h3>
                                                            <p>Freelancers, Marketers & Entrepreneurs to Automate Daily Tasks.</p>
                                                        </div>
                                                        <div className="table-content">
                                                            <ul className="feature-list clearfix">
                                                                <li>Generate 10k Words</li>
                                                                <li>40+ Use Cases</li>
                                                                <li>20+ Language</li>
                                                                <li>50+ templates</li>
                                                                <li className="light">1 Brand Voice</li>
                                                                <li className="light">Generate upto 5 images </li>
                                                            </ul>
                                                        </div>
                                                        <div className="table-footer">
                                                            <h3>$10.00 <span>[up to 2 Members]</span></h3>
                                                            <Link href="/" className="theme-btn btn-two">Choose&nbsp;Plan</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="teams">
                                        <div className="tabs-box-2">
                                            <div className="tab-btn-two">
                                                <ul className="tab-btns tab-buttons-2 clearfix">
                                                    <li>
                                                        <div className="radio-box">
                                                            <input type="radio" id="checkbox3" name="same" defaultChecked/>
                                                            <label for="checkbox3">Yearly</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="radio-box">
                                                            <input type="radio" id="checkbox4" name="same"/>
                                                            <label for="checkbox4">Monthly</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="tabs-content-2">
                                                <div className="tab-2 active-tab-2" id="tab-14">
                                                    <div className="pricing-table-one">
                                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-21.png)" }}></div>
                                                        <span className="tags">Recommended</span>
                                                        <div className="table-header">
                                                            <div className="icon-box"><img src="assets/images/icons/icon-18.png" alt=""/></div>
                                                            <h3>Teams</h3>
                                                            <p>Freelancers, Marketers & Entrepreneurs to Automate Daily Tasks.</p>
                                                        </div>
                                                        <div className="table-content">
                                                            <ul className="feature-list clearfix">
                                                                <li>Generate 10k Words</li>
                                                                <li>40+ Use Cases</li>
                                                                <li>20+ Language</li>
                                                                <li>50+ templates</li>
                                                                <li>1 Brand Voice</li>
                                                                <li>Generate upto 5 images </li>
                                                            </ul>
                                                        </div>
                                                        <div className="table-footer">
                                                            <h3>$25.00 <span>[up to 4 Members]</span></h3>
                                                            <Link href="/" className="theme-btn btn-two">Choose&nbsp;Plan</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-2" id="tab-15">
                                                    <div className="pricing-table-one">
                                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-21.png)" }}></div>
                                                        <div className="table-header">
                                                            <div className="icon-box"><img src="assets/images/icons/icon-18.png" alt=""/></div>
                                                            <h3>Teams</h3>
                                                            <p>Freelancers, Marketers & Entrepreneurs to Automate Daily Tasks.</p>
                                                        </div>
                                                        <div className="table-content">
                                                            <ul className="feature-list clearfix">
                                                                <li>Generate 10k Words</li>
                                                                <li>40+ Use Cases</li>
                                                                <li>20+ Language</li>
                                                                <li>50+ templates</li>
                                                                <li className="light">1 Brand Voice</li>
                                                                <li className="light">Generate upto 5 images </li>
                                                            </ul>
                                                        </div>
                                                        <div className="table-footer">
                                                            <h3>$10.00 <span>[up to 2 Members]</span></h3>
                                                            <Link href="/" className="theme-btn btn-two">Choose&nbsp;Plan</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="business">
                                        <div className="tabs-box-2">
                                            <div className="tab-btn-two">
                                                <ul className="tab-btns tab-buttons-2 clearfix">
                                                    <li>
                                                        <div className="radio-box">
                                                            <input type="radio" id="checkbox5" name="same" defaultChecked/>
                                                            <label for="checkbox5">Yearly</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="radio-box">
                                                            <input type="radio" id="checkbox6" name="same"/>
                                                            <label for="checkbox6">Monthly</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="tabs-content-2">
                                                <div className="tab-2 active-tab-2" id="tab-16">
                                                    <div className="pricing-table-one">
                                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-21.png)" }}></div>
                                                        <span className="tags">Recommended</span>
                                                        <div className="table-header">
                                                            <div className="icon-box"><img src="assets/images/icons/icon-18.png" alt=""/></div>
                                                            <h3>Business</h3>
                                                            <p>Freelancers, Marketers & Entrepreneurs to Automate Daily Tasks.</p>
                                                        </div>
                                                        <div className="table-content">
                                                            <ul className="feature-list clearfix">
                                                                <li>Generate 10k Words</li>
                                                                <li>40+ Use Cases</li>
                                                                <li>20+ Language</li>
                                                                <li>50+ templates</li>
                                                                <li>1 Brand Voice</li>
                                                                <li>Generate upto 5 images </li>
                                                            </ul>
                                                        </div>
                                                        <div className="table-footer">
                                                            <h3>$25.00 <span>[up to 4 Members]</span></h3>
                                                            <Link href="/" className="theme-btn btn-two">Choose&nbsp;Plan</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-2" id="tab-17">
                                                    <div className="pricing-table-one">
                                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-21.png)" }}></div>
                                                        <div className="table-header">
                                                            <div className="icon-box"><img src="assets/images/icons/icon-18.png" alt=""/></div>
                                                            <h3>Business</h3>
                                                            <p>Freelancers, Marketers & Entrepreneurs to Automate Daily Tasks.</p>
                                                        </div>
                                                        <div className="table-content">
                                                            <ul className="feature-list clearfix">
                                                                <li>Generate 10k Words</li>
                                                                <li>40+ Use Cases</li>
                                                                <li>20+ Language</li>
                                                                <li>50+ templates</li>
                                                                <li className="light">1 Brand Voice</li>
                                                                <li className="light">Generate upto 5 images </li>
                                                            </ul>
                                                        </div>
                                                        <div className="table-footer">
                                                            <h3>$10.00 <span>[up to 2 Members]</span></h3>
                                                            <Link href="/" className="theme-btn btn-two">Choose&nbsp;Plan</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
