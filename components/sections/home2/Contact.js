import React from 'react'

function Contact() {
  return (
    <>
      <section className="contact-section sec-pad-2">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-4.jpg)" }}></div>
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="sec-title light">
                                <h6>[ Drop a Line ]</h6>
                                <h2>Let's Collaborate <br />& Discuss Your Project</h2>
                            </div>
                            <div className="inner-box">
                                <h4>I want to discuss;</h4>
                                <ul className="list-item clearfix">
                                    <li>
                                        <div className="check-box">
                                            <input className="check" type="checkbox" id="checkbox1"/>
                                            <label for="checkbox1">User Experience</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="check-box">
                                            <input className="check" type="checkbox" id="checkbox2"/>
                                            <label for="checkbox2">Quality & Reliability</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="check-box">
                                            <input className="check" type="checkbox" id="checkbox3"/>
                                            <label for="checkbox3">Collaboration</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="check-box">
                                            <input className="check" type="checkbox" id="checkbox4"/>
                                            <label for="checkbox4">Legal and Copyright</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                        <div className="form-inner">
                            <form method="post" action="contact.html">
                                <div className="form-group">
                                    <div className="text">
                                        <div className="icon"><img src="assets/images/icons/icon-37.png" alt=""/></div>
                                        <label>Your Name</label>
                                    </div>
                                    <input type="text" name="name" placeholder="Enter name here" required/>
                                </div>
                                <div className="form-group">
                                    <div className="text">
                                        <div className="icon"><img src="assets/images/icons/icon-38.png" alt=""/></div>
                                        <label>Email Address</label>
                                    </div>
                                    <input type="email" name="email" placeholder="Email address" required/>
                                </div>
                                <div className="form-group">
                                    <div className="text">
                                        <div className="icon"><img src="assets/images/icons/icon-39.png" alt=""/></div>
                                        <label>Message</label>
                                    </div>
                                    <textarea name="message" placeholder="Message goes here"></textarea>
                                </div>
                                <div className="form-group message-btn">
                                    <button type="submit" className="theme-btn btn-two">Send Your Mesage</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact
