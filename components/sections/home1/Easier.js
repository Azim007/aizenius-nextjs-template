import React from 'react'
import Link from "next/link"

export default function Easier() {
  return (
    <>
      <section className="easier-section bg-color-2">
            <div className="auto-container">
                <div className="inner-box">
                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}></div>
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-12 col-sm-12 title-column">
                            <div className="sec-title">
                                <h6>[ making life easier ]</h6>
                                <h2>Empowering <br />Innovation through <br />Intelligent Words</h2>
                                <Link href="/" className="theme-btn btn-one"><span>Start Your Trial</span></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <ul className="list-item clearfix">
                                    <li>No credit card required</li>
                                    <li>Cancel anytime</li>
                                    <li>50+ Fine Tuned AI Tools</li>
                                    <li>7 Days free Trial</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
