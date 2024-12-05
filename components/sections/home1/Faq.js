'use client'
import Link from "next/link"
import { useState } from 'react'
export default function Faq() {
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
        <section className="faq-section sec-pad">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-23.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title centred">
                    <h6>[ faq’s ]</h6>
                    <h2>Answer for Your Questions</h2>
                </div>
                <div className="inner-box">
                    <ul className="accordion-box">
                        <li className="accordion block">
                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                <div className="icon-box"></div>
                                <h4>What is an AI writing tool?</h4>
                            </div>
                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                <p>These cases are perfectly simple and easy to distinguish. In Link free hour, when our power choice is untrammelled and when nothing our being able do what we like best.</p>
                            </div>
                        </li>
                        <li className="accordion block">
                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                <div className="icon-box"></div>
                                <h4>How does an AI writing tool work?</h4>
                            </div>
                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                <p>These cases are perfectly simple and easy to distinguish. In Link free hour, when our power choice is untrammelled and when nothing our being able do what we like best.</p>
                            </div>
                        </li>
                        <li className="accordion block">
                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                <div className="icon-box"></div>
                                <h4>Can an AI writing tool replace human writers?</h4>
                            </div>
                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                <p>These cases are perfectly simple and easy to distinguish. In Link free hour, when our power choice is untrammelled and when nothing our being able do what we like best.</p>
                            </div>
                        </li>
                        <li className="accordion block">
                            <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                <div className="icon-box"></div>
                                <h4>What can I use an AI writing tool for?</h4>
                            </div>
                            <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                <p>These cases are perfectly simple and easy to distinguish. In Link free hour, when our power choice is untrammelled and when nothing our being able do what we like best.</p>
                            </div>
                        </li>
                    </ul>
                    <div className="btn-box">
                        <Link href="/faq" className="theme-btn btn-one">Answer for More Questions</Link>
                    </div>
                </div>
            </div>
        </section>

    </>

  )
}