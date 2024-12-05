'use client'
import Layout from "@/components/layout/Layout"
import Faq from "@/components/sections/home1/Faq"
import Contact from "@/components/sections/home2/Contact"
import Link from "next/link"
import { useState } from "react"
export default function contact() {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us">
            <section className="contact-info-section sec-pad">
                <div className="auto-container">
                    <div className="sec-title centred">
                        <h2>Get In Touch <br />With Us For More Infromation</h2>
                        <p>54 Berrick 2nd Street Boston, Massachusetts <br />02115,United States.</p>
                        <h6><Link href="https://www.google.com/maps" target="_blank"><i className="flaticon-right-arrow"></i>View On Map</Link></h6>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 info-column">
                            <div className="info-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-79.png" alt=""/></div>
                                    <h4>Call Us</h4>
                                    <p>Call us today & Experience exceptional service.</p>
                                    <Link href="tel:0448881234567">(044) 888.12.345 & 67</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 info-column">
                            <div className="info-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-80.png" alt=""/></div>
                                    <h4>Email</h4>
                                    <p>Have questions or project send your details.</p>
                                    <Link href="mailto:supportme@example.com">supportme@example.com</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="social-links clearfix centred">
                        <li><Link href="/contact"><i className="fa-brands fa-facebook"></i></Link></li>
                        <li><Link href="/contact"><i className="fa-brands fa-square-twitter"></i></Link></li>
                        <li><Link href="/contact"><i className="fa-solid fa-basketball"></i></Link></li>
                        <li><Link href="/contact"><i className="fa-brands fa-youtube"></i></Link></li>
                    </ul>
                </div>
            </section>

            <Contact />
            <Faq />

            </Layout>
        </>
    )
}