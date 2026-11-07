import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="fixed top-0 z-50 bg-white shadow-md">
            <div className="flex h-16 items-center justify-end gap-8 px-8 text-black">

                <Link to="/">Home</Link>

                <Link to="/about">About</Link>

                <Link to="/chatbot">Chatbot</Link>

                <Link to="/contact">Contact</Link>

                <Link to="/services">Services</Link>

            </div>
        </nav>
    );
}