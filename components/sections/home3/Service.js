'use client'
import { useState } from "react"
export default function Service() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    
    return (
        <>
        <section className="service-style-three centred">
            <div className="auto-container">
                <div className="sec-title">
                    <h6>[ Services ]</h6>
                    <h2>Most Popular Services</h2>
                    <p>Undertakes laborious physical exercise except to obtain some advantage from it? </p>
                </div>
                <div className="tabs-box">
                    <div className="tab-btns tab-buttons centred clearfix">
                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>Content <br />Generation</li>
                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>Marketing <br />Communications</li>
                        <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>Editing & <br />Proof Reading</li>
                        <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "tab-btn active-btn" : "tab-btn"}>Language <br />Localization</li>
                    </div>
                    <div className="tabs-content">
                        <div className={activeIndex === 1 ? "tab active-tab" : "tab"} id="content">
                            <div className="content-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-42.png" alt=""/></div>
                                <h2>AI-Powered Content Creation</h2>
                                <p>Right to find fault with man chooses to enjoy a pleasure that has annoying <br />of business it will frequently occur that pleasures.</p>
                                <div className="image-box">
                                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-40.png)" }}></div>
                                    <figure className="image"><img src="assets/images/resource/dashboard-12.jpg" alt=""/></figure>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="marketing">
                            <div className="content-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-42.png" alt=""/></div>
                                <h2>AI-Powered Marketing Communications</h2>
                                <p>Right to find fault with man chooses to enjoy a pleasure that has annoying <br />of business it will frequently occur that pleasures.</p>
                                <div className="image-box">
                                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-40.png)" }}></div>
                                    <figure className="image"><img src="assets/images/resource/dashboard-12.jpg" alt=""/></figure>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="editing">
                            <div className="content-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-42.png" alt=""/></div>
                                <h2>AI-Powered Editing & Proof Reading</h2>
                                <p>Right to find fault with man chooses to enjoy a pleasure that has annoying <br />of business it will frequently occur that pleasures.</p>
                                <div className="image-box">
                                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-40.png)" }}></div>
                                    <figure className="image"><img src="assets/images/resource/dashboard-12.jpg" alt=""/></figure>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 4 ? "tab active-tab" : "tab"} id="language">
                            <div className="content-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-42.png" alt=""/></div>
                                <h2>AI-Powered Language Localization</h2>
                                <p>Right to find fault with man chooses to enjoy a pleasure that has annoying <br />of business it will frequently occur that pleasures.</p>
                                <div className="image-box">
                                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-40.png)" }}></div>
                                    <figure className="image"><img src="assets/images/resource/dashboard-12.jpg" alt=""/></figure>
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
