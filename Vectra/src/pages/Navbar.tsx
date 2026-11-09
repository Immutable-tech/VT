import Logo from "../assets/Logo.svg";

export default function Navbar() {
    return (
        <nav className=" top-0 z-50 bg-white shadow-md" style={{ left: 0, width: "100%" }}>
            <div className="flex items-center justify-between h-8 px-4">
                 <div><img style={{ height: "5rem", width: "5rem" }} src={Logo} alt="Logo" /></div>
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

                <span>Home</span>

                <span>About</span>

                <span>Chatbot</span>

                <span>Contact</span>

                <span>Services</span>

            </div>
            </div>
        </nav>
    );
}