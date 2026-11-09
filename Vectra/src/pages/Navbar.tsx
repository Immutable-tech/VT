import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className=" top-0 z-50 bg-white shadow-md" style={{ left: 0, width: "100%" }}>
            <div className="flex items-center justify-between h-8 px-4">
                 <div>
                    <Link to="/" aria-label="Vectra Tech home">
                        <img style={{ height: "5rem", width: "5rem" }} src={Logo} alt="Logo" />
                    </Link>
                 </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                padding: "2rem",
                justifyContent: "flex-end",
                alignItems: "center",
                width: "90%",
                marginRight: "2rem"
                
            }}>

                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>

                <Link to="/About" style={{ color: "inherit", textDecoration: "none" }}>About</Link>

                <Link to="/Chatbot" style={{ color: "inherit", textDecoration: "none" }}>Chatbot</Link>

                <Link to="/Contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</Link>

                <Link to="/Services" style={{ color: "inherit", textDecoration: "none" }}>Services</Link>

            </div>
            </div>
        </nav>
    );
}