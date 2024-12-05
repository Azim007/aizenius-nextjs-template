import Link from "next/link"

export default function login() {

    return (
        <>
            <section className="user-form-section login-section centred">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-6.jpg)" }}></div>
                <div className="auto-container">
                    <div className="sec-title light">
                        <h6>[ Login ]</h6>
                        <h2>Welcome Back to AI.zenius</h2>
                        <p>Login to Your Account</p>
                    </div>
                    <div className="inner-box">
                        <div className="form-inner">
                            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-51.png)" }}></div>
                            <form action="/login" method="post">
                                <div className="form-group">
                                    <div className="text-box">
                                        <div className="icon"><img src="assets/images/icons/icon-57.png" alt=""/></div>
                                        <h6>Email or User Name</h6>
                                    </div>
                                    <input type="text" name="name" placeholder="username@mail.com" required=""/>
                                </div>
                                <div className="form-group">
                                    <div className="text-box">
                                        <div className="icon"><img src="assets/images/icons/icon-58.png" alt=""/></div>
                                        <h6>Password</h6>
                                    </div>
                                    <input type="password" name="password" placeholder="xxxxxxxxxx" required=""/>
                                </div>
                                <div className="form-group option-box">
                                    <div className="check-box">
                                        <input className="check" type="checkbox" id="checkbox1"/>
                                        <label for="checkbox1">Remember</label>
                                    </div>
                                    <button type="button" className="forgot-button">Forgot Password</button>
                                </div>
                                <div className="form-group message-btn">
                                    <button type="submit" className="theme-btn btn-one">LogIn With AI.zenius</button>
                                </div>
                            </form>
                        </div>
                        <div className="other-text">
                            <h6>or</h6>
                        </div>
                        <ul className="download-list clearfix">
                            <li><Link href="/login"><img src="assets/images/icons/icon-59.png" alt=""/>Continue With Google</Link></li>
                            <li><Link href="/login"><img src="assets/images/icons/icon-60.png" alt=""/>Continue With Apple</Link></li>
                        </ul>
                        <div className="lower-text">
                            <h6>Don't have an account? <Link href="/register">Register</Link></h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}