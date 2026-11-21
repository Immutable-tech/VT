import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.svg";

const links = [["Home", "/"], ["About", "/About"], ["Services", "/Services"], ["Chatbot", "/Chatbot"], ["Contact", "/Contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/90 backdrop-blur-xl">
    <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main navigation">
      <Link to="/" aria-label="Vectra Tech home" onClick={close}><img src={Logo} alt="Vectra Tech" className="h-14 w-14 object-contain"/></Link>
      <button className="grid size-10 place-items-center rounded-lg border border-neutral-200 text-neutral-800 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={20}/> : <Menu size={20}/>}</button>
      <div className={`${open ? "absolute inset-x-0 top-[75px] flex flex-col border-b border-neutral-200 bg-white p-5 shadow-xl md:static md:flex-row md:border-0 md:bg-transparent md:p-0 md:shadow-none" : "hidden md:flex"} items-stretch gap-1 md:items-center md:gap-7`}>
        {links.map(([label, to]) => <NavLink key={to} end={to === "/"} to={to} onClick={close} className={({isActive}) => `rounded-lg px-3 py-3 text-sm font-semibold transition md:px-0 md:py-2 ${isActive ? "text-vectra" : "text-neutral-600 hover:text-neutral-950"}`}>{label}</NavLink>)}
        <Link to="/Contact" onClick={close} className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-vectra md:ml-2 md:mt-0">Start a project <span aria-hidden>↗</span></Link>
      </div>
    </nav>
  </header>;
}
