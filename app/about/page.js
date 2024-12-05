'use client'
import Layout from "@/components/layout/Layout"
import VideoPopup from "@/components/elements/VideoPopup"
import CounterUp from "@/components/elements/CounterUp"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import { useState } from "react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.owl-prev',
        prevEl: '.owl-next',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}


export default function about() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Introducing AI.zenius">
                {/* about-section */}
                <section className="exploring-section about-page">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-43.png)" }}></div>
                    <div className="auto-container">
                        <div className="upper-box">
                            <div className="row clearfix">
                                <div className="col-lg-7 col-md-12 col-sm-12 video-column">
                                    <div className="video-inner">
                                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/video-1.jpg)" }}></div>
                                        <div className="btn-box">
                                            <div className="video-btn">
                                                <VideoPopup />
                                            </div>
                                            <h6>How Its’ Work</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                                    <div className="content-box">
                                        <div className="sec-title">
                                            <h6>[ Exploring the Future ]</h6>
                                            <h2>Exploring the <br />Future of Content Creation</h2>
                                        </div>
                                        <div className="text-box">
                                            <div className="bold-text">Undertakes laborious physical exercise except.</div>
                                            <p>To obtain some advantage from it take Link trivial example which obtain some advantage itself because it is pain but because occasionally circumstances.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lower-box centred">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                    <div className="single-item">
                                        <h3>10X Output</h3>
                                        <p>Trouble that are bound to ensue equal blame weakness what we like best.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                    <div className="single-item">
                                        <h3>30+Language</h3>
                                        <p>Bound to ensue equal blame belongs to those who fail in their duty.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                    <div className="single-item">
                                        <h3>Free AI Tools</h3>
                                        <p>Master-builder human happiness one rejects dislikes avoids pleasure itself.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* about-section end */}


                {/* values-section */}
                <section className="values-section sec-pad bg-color-1">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-48.png)" }}></div>
                    <div className="auto-container">
                        <div className="title-box">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 title-column">
                                    <div className="sec-title">
                                        <h6>[ Values ]</h6>
                                        <h2>Core Values for Success</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                                    <div className="title-text">
                                        <p>Undertakes laborious physical exercise except to obtain some advantage from it?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tabs-box">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-sm-12 btn-column">
                                    <div className="tab-btns tab-buttons">
                                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>01. Our Approach <Link href="/about"><i className="flaticon-right-arrow"></i></Link></li>
                                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>02. Unique Value Proposition <Link href="/about"><i className="flaticon-right-arrow"></i></Link></li>
                                        <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>03. Our Commitment to Quality <Link href="/about"><i className="flaticon-right-arrow"></i></Link></li>
                                        <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "tab-btn active-btn" : "tab-btn"}>04. Continuous Improvement <Link href="/about"><i className="flaticon-right-arrow"></i></Link></li>
                                        <li onClick={() => handleOnClick(5)} className={activeIndex === 5 ? "tab-btn active-btn" : "tab-btn"}>05. Our Ethical AI Practices <Link href="/about"><i className="flaticon-right-arrow"></i></Link></li>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="tabs-content">
                                        <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                            <div className="content-box">
                                                <h3>Our <br />Approach</h3>
                                                <p>Chooses to enjoy Link pleasure that has annoying consequences or one who avoids Link pain that all produces no resultant pleasure the mater builder of human happiness.</p>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="content_two">
                                            <div className="content-box">
                                                <h3>Unique Value Proposition</h3>
                                                <p>Chooses to enjoy Link pleasure that has annoying consequences or one who avoids Link pain that all produces no resultant pleasure the mater builder of human happiness.</p>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="content_three">
                                            <div className="content-box">
                                                <h3>Our Commitment to Quality</h3>
                                                <p>Chooses to enjoy Link pleasure that has annoying consequences or one who avoids Link pain that all produces no resultant pleasure the mater builder of human happiness.</p>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 4 ? "tab active-tab" : "tab"} id="content_four">
                                            <div className="content-box">
                                                <h3>Continuous <br />Improvement</h3>
                                                <p>Chooses to enjoy Link pleasure that has annoying consequences or one who avoids Link pain that all produces no resultant pleasure the mater builder of human happiness.</p>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 5 ? "tab active-tab" : "tab"} id="content_five">
                                            <div className="content-box">
                                                <h3>Our Ethical AI Practices</h3>
                                                <p>Chooses to enjoy Link pleasure that has annoying consequences or one who avoids Link pain that all produces no resultant pleasure the mater builder of human happiness.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* values-section end */}


                {/* chooseus-section */}
                <section className="chooseus-section sec-pad">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-12.png)" }}></div>
                    <div className="auto-container">
                        <div className="sec-title centred">
                            <h6>[ Why Choose Us ]</h6>
                            <h2>Reasons to Choosing Us</h2>
                            <p>Undertakes laborious physical exercise except tto obtain some advantage from it?</p>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12 left-column">
                                <div className="left-content">
                                    <div className="single-item">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}></div>
                                        <div className="icon-box"><img src="assets/images/icons/icon-10.png" alt=""/></div>
                                        <div className="text-box">
                                            <h3>10X Output</h3>
                                            <p>Dolore magnam aliquam quaer autem enim ad minima veniam.</p>
                                        </div>
                                    </div>
                                    <div className="single-item">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-9.png)" }}></div>
                                        <div className="text-box">
                                            <h3>Efficiency & Consistency</h3>
                                            <p>Beguiled demoralized charms nonsed pleasure of the moment.</p>
                                        </div>
                                        <div className="icon-box"><img src="assets/images/icons/icon-11.png" alt=""/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/chooseus-1.jpg" alt=""/></figure>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 right-column">
                                <div className="right-content text-right">
                                    <div className="single-item">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-10.png)" }}></div>
                                        <div className="icon-box"><img src="assets/images/icons/icon-12.png" alt=""/></div>
                                        <div className="text-box">
                                            <h3>Multilingual Support</h3>
                                            <p>Dolore magnam aliquam quaer autem enim ad minima veniam.</p>
                                        </div>
                                    </div>
                                    <div className="single-item">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-11.png)" }}></div>
                                        <div className="text-box">
                                            <h3>Continuous Improvement</h3>
                                            <p>Beguiled demoralized charms nonsed pleasure of the moment.</p>
                                        </div>
                                        <div className="icon-box"><img src="assets/images/icons/icon-13.png" alt=""/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* chooseus-section end */}


                {/* funfact-section */}
                <section className="funfact-section">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-49.png)" }}></div>
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 funfact-block">
                                    <div className="funfact-block-one">
                                        <h3>Copyrighters</h3>
                                        <div className="inner-box">
                                            <div className="count-outer count-box">
                                                <CounterUp end={24} /><span>k</span>
                                            </div>
                                            <p>There are many variations of passages of available but the majority.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 funfact-block">
                                    <div className="funfact-block-one">
                                        <h3>Ratings</h3>
                                        <div className="inner-box">
                                            <div className="count-outer count-box">
                                                <CounterUp end={18.5} /><span>k</span>
                                            </div>
                                            <p>Right to find fault with who chooses to pleasure that has no annoying.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 funfact-block">
                                    <div className="funfact-block-one">
                                        <h3>Words Generated Daily</h3>
                                        <div className="inner-box">
                                            <div className="count-outer count-box">
                                                <CounterUp end={2} /><span>m+</span>
                                            </div>
                                            <p>Itself, because is pleasure but because those who do not know  pursue pleasure.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 funfact-block">
                                    <div className="funfact-block-one">
                                        <h3>Secure & Confidential</h3>
                                        <div className="inner-box">
                                            <div className="count-outer count-box">
                                                <CounterUp end={100} /><span>%</span>
                                            </div>
                                            <p>Desire that they cannot foresee pain & trouble that are bound.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* funfact-section end */}


                {/* team-section */}
                <section className="team-section sec-pad">
                    <div className="auto-container">
                        <div className="sec-title centred">
                            <h6>[ Meet Our Team ]</h6>
                            <h2>Team Behind AI.Zenius</h2>
                            <p>Undertakes laborious physical exercise except tto obtain some advantage from it? </p>
                        </div>
                        <div className="inner-container">
                            <Swiper {...swiperOptions} className="theme_carousel">
                                <SwiperSlide className="slide-item">
                                    <div className="team-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/team/team-1.jpg" alt=""/></figure>
                                            <div className="lower-content">
                                                <div className="share-box">
                                                    <div className="share-icon"><i className="fa-solid fa-share-nodes"></i></div>
                                                    <ul className="social-links clearfix">
                                                        <li><Link href="/about"><i className="fa-brands fa-facebook"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-square-twitter"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-pinterest"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-youtube"></i></Link></li>
                                                    </ul>
                                                </div>
                                                <h3><Link href="about.html">Bertram Irvin</Link></h3>
                                                <span className="designation">[ Founder - Developer ]</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="team-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/team/team-2.jpg" alt=""/></figure>
                                            <div className="lower-content">
                                                <div className="share-box">
                                                    <div className="share-icon"><i className="fa-solid fa-share-nodes"></i></div>
                                                    <ul className="social-links clearfix">
                                                        <li><Link href="/about"><i className="fa-brands fa-facebook"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-square-twitter"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-pinterest"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-youtube"></i></Link></li>
                                                    </ul>
                                                </div>
                                                <h3><Link href="about.html">Madeline Margaret</Link></h3>
                                                <span className="designation">[ Creative Director ]</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="team-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/team/team-3.jpg" alt=""/></figure>
                                            <div className="lower-content">
                                                <div className="share-box">
                                                    <div className="share-icon"><i className="fa-solid fa-share-nodes"></i></div>
                                                    <ul className="social-links clearfix">
                                                        <li><Link href="/about"><i className="fa-brands fa-facebook"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-square-twitter"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-pinterest"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-youtube"></i></Link></li>
                                                    </ul>
                                                </div>
                                                <h3><Link href="about.html">Damian Martin</Link></h3>
                                                <span className="designation">[ AI Content Assistant ]</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="team-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/team/team-1.jpg" alt=""/></figure>
                                            <div className="lower-content">
                                                <div className="share-box">
                                                    <div className="share-icon"><i className="fa-solid fa-share-nodes"></i></div>
                                                    <ul className="social-links clearfix">
                                                        <li><Link href="/about"><i className="fa-brands fa-facebook"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-square-twitter"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-pinterest"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-youtube"></i></Link></li>
                                                    </ul>
                                                </div>
                                                <h3><Link href="about.html">Bertram Irvin</Link></h3>
                                                <span className="designation">[ Founder - Developer ]</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="team-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/team/team-2.jpg" alt=""/></figure>
                                            <div className="lower-content">
                                                <div className="share-box">
                                                    <div className="share-icon"><i className="fa-solid fa-share-nodes"></i></div>
                                                    <ul className="social-links clearfix">
                                                        <li><Link href="/about"><i className="fa-brands fa-facebook"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-square-twitter"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-pinterest"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-youtube"></i></Link></li>
                                                    </ul>
                                                </div>
                                                <h3><Link href="about.html">Madeline Margaret</Link></h3>
                                                <span className="designation">[ Creative Director ]</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="team-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/team/team-3.jpg" alt=""/></figure>
                                            <div className="lower-content">
                                                <div className="share-box">
                                                    <div className="share-icon"><i className="fa-solid fa-share-nodes"></i></div>
                                                    <ul className="social-links clearfix">
                                                        <li><Link href="/about"><i className="fa-brands fa-facebook"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-square-twitter"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-pinterest"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-youtube"></i></Link></li>
                                                    </ul>
                                                </div>
                                                <h3><Link href="about.html">Damian Martin</Link></h3>
                                                <span className="designation">[ AI Content Assistant ]</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="team-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/team/team-1.jpg" alt=""/></figure>
                                            <div className="lower-content">
                                                <div className="share-box">
                                                    <div className="share-icon"><i className="fa-solid fa-share-nodes"></i></div>
                                                    <ul className="social-links clearfix">
                                                        <li><Link href="/about"><i className="fa-brands fa-facebook"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-square-twitter"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-pinterest"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-youtube"></i></Link></li>
                                                    </ul>
                                                </div>
                                                <h3><Link href="about.html">Bertram Irvin</Link></h3>
                                                <span className="designation">[ Founder - Developer ]</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="team-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/team/team-2.jpg" alt=""/></figure>
                                            <div className="lower-content">
                                                <div className="share-box">
                                                    <div className="share-icon"><i className="fa-solid fa-share-nodes"></i></div>
                                                    <ul className="social-links clearfix">
                                                        <li><Link href="/about"><i className="fa-brands fa-facebook"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-square-twitter"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-pinterest"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-youtube"></i></Link></li>
                                                    </ul>
                                                </div>
                                                <h3><Link href="about.html">Madeline Margaret</Link></h3>
                                                <span className="designation">[ Creative Director ]</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="team-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/team/team-3.jpg" alt=""/></figure>
                                            <div className="lower-content">
                                                <div className="share-box">
                                                    <div className="share-icon"><i className="fa-solid fa-share-nodes"></i></div>
                                                    <ul className="social-links clearfix">
                                                        <li><Link href="/about"><i className="fa-brands fa-facebook"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-square-twitter"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-pinterest"></i></Link></li>
                                                        <li><Link href="/about"><i className="fa-brands fa-youtube"></i></Link></li>
                                                    </ul>
                                                </div>
                                                <h3><Link href="about.html">Damian Martin</Link></h3>
                                                <span className="designation">[ AI Content Assistant ]</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                            <div className="owl-nav">
                                <button type="button" className="owl-prev"><span className="flaticon-left-arrow"></span></button>
                                <button type="button" className="owl-next"><span className="flaticon-right-arrow"></span></button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* team-section end */}

            </Layout>
        </>
    )
}


