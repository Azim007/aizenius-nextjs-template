import Link from "next/link"

export default function Banner() {
    return (
        <> 

        <section className="banner-style-two">
            <div className="pattern-layer">
                <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-28.png)" }}></div>
                <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-27.png)" }}></div>
            </div>
            <div className="outer-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <h2>Make your Content Stand out with <span>AI.zenius</span></h2>
                            <ul className="list-item clearfix">
                                <li>No credit card required</li>
                                <li>Cancel anytime</li>
                                <li>7 Days free Trial</li>
                            </ul>
                            <p>Denouncing pleasure and praising pain was born will give you a expound the actual teachings.</p>
                            <Link href="/index-2" className="theme-btn btn-two">View All Services</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-box">
                            <figure className="image image-1"><img src="assets/images/resource/dashboard-6.png" alt=""/></figure>
                            <figure className="image image-2 float-bob-y"><img src="assets/images/resource/animation-1.png" alt=""/></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
