'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}
export default function Masterpiece() {
    return (
        <>
        <section className="masterpiece-section">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}></div>
            <div className="auto-container">
                <div className="title-box">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 title-column">
                            <div className="sec-title light">
                                <h6>[ masterpiece ]</h6>
                                <h2>Write Winning Content</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                            <div className="title-text">
                                <p>Nor again is there anyone who loves or pursues or desires to obtain pain because occasionally circumstances.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                    <SwiperSlide className="slide-item">
                        <div className="inner-box">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-14.png)" }}></div>
                                        <figure className="image"><img src="assets/images/resource/dashboard-5.jpg" alt=""/></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box">
                                        <h2>50+ Fine-Tuned <span>AI <br />Tools</span> for Your Every Need</h2>
                                        <div className="text-box">
                                            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-15.png)" }}></div>
                                            <p>Denouncing pleasure and praising pain was born will give you Link complete account of the system & expound the actual teachings the great explorer of the truth.</p>
                                            <p>Complete account of the system expound actual teachings the great explorer.</p>
                                            <Link href="/" className="theme-btn btn-two">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="inner-box">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-14.png)" }}></div>
                                        <figure className="image"><img src="assets/images/resource/dashboard-5.jpg" alt=""/></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box">
                                        <h2>50+ Fine-Tuned <span>AI <br />Tools</span> for Your Every Need</h2>
                                        <div className="text-box">
                                            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-15.png)" }}></div>
                                            <p>Denouncing pleasure and praising pain was born will give you Link complete account of the system & expound the actual teachings the great explorer of the truth.</p>
                                            <p>Complete account of the system expound actual teachings the great explorer.</p>
                                            <Link href="/" className="theme-btn btn-two">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="inner-box">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-14.png)" }}></div>
                                        <figure className="image"><img src="assets/images/resource/dashboard-5.jpg" alt=""/></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box">
                                        <h2>50+ Fine-Tuned <span>AI <br />Tools</span> for Your Every Need</h2>
                                        <div className="text-box">
                                            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-15.png)" }}></div>
                                            <p>Denouncing pleasure and praising pain was born will give you Link complete account of the system & expound the actual teachings the great explorer of the truth.</p>
                                            <p>Complete account of the system expound actual teachings the great explorer.</p>
                                            <Link href="/" className="theme-btn btn-two">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="owl-nav">
                <button type="button" className="owl-prev"><span className="flaticon-left-arrow"></span></button>
                <button type="button" className="owl-next"><span className="flaticon-right-arrow"></span></button>
            </div>

            <div className="owl-dots">
                <div className="swiper-pagination"></div>
            </div>
        </section>
        </>
    )
}


