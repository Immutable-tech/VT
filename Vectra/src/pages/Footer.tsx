import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            background: "#1e1d1d",
            color: "#ffff",
            padding: "2rem",
            gap: "2rem",
            flexWrap: "wrap",
        }}>
            <span>
                <p>Vectra Tech</p>
                <p>Clean, reliable software <br />
                for Kenyan businesses.Built by <br />
                 Vectra Tech</p>
            </span>
            <span style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
            }}>
                <p>Quick Links</p>
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
                <Link to="/About" style={{ color: "inherit", textDecoration: "none" }}>About</Link>
                <Link to="/Services" style={{ color: "inherit", textDecoration: "none" }}>Services</Link>
                <Link to="/Contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</Link>
            </span>
            <span>
                <p>Services</p>
                <p>Web Development</p>
                <p>Mobile App Development</p>
                <p>Software Development</p>
                <p>UI/UX Design</p>
            </span>
            <span>
                <p>Contact</p>
                <p>2547000000</p>
                <p>vectratech@gmail.com</p>
                <p>Nairobi, Kenya</p>
                
            </span>
            <div style={{width: "99%", height: "1px", background: "#ffff", alignSelf: "center", justifySelf: "center"}}></div>
            <span style={{ textAlign: "center", justifyContent: "center", alignItems: "center"}}>
                <p>© 2026 Vectra Tech. All rights reserved.</p>
            </span>
        </div>
    );
}