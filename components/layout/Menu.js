import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                <li className="dropdown"><Link href="/">Home</Link>
                    <ul>
                        <li><Link href="/">Home Page One</Link></li>
                        <li><Link href="/index-2">Home Page Two</Link></li>
                        <li><Link href="/index-3">Home Page Three</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">About</Link>
                    <ul>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/faq">Faq’s</Link></li>
                        <li><Link href="/works">How It’s Work</Link></li>
                        <li><Link href="/login">Login</Link></li>
                        <li><Link href="/register">Register</Link></li>
                        <li><Link href="/forgot-password">Forgot Password</Link></li>
                        <li><Link href="/error">404</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Use Cases</Link>
                    <ul>
                        <li><Link href="/cases">Use Cases 01</Link></li>
                        <li><Link href="/cases-2">Use Cases 02</Link></li>
                        <li><Link href="/case-details">Cases Details</Link></li>
                    </ul>
                </li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li className="dropdown"><Link href="#">Blog</Link>
                    <ul>
                        <li><Link href="/blog">Blog Grid View</Link></li>
                        <li><Link href="/blog-2">Blog List View</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                </li> 
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
