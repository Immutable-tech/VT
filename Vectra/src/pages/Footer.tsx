import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return <footer className="bg-neutral-950 text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1fr] lg:gap-12">
      <div><Link to="/" className="font-display text-3xl font-extrabold tracking-tight">vectra<span className="text-rose-500">.</span></Link><p className="mt-4 max-w-xs text-sm leading-6 text-neutral-400">Thoughtful technology for ambitious Kenyan businesses.</p><a href="mailto:vectratech@gmail.com" className="mt-5 inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white"><Mail size={16}/> vectratech@gmail.com</a></div>
      <div className="flex flex-col gap-3 text-sm"><h2 className="mb-1 text-sm font-bold">Explore</h2><Link className="text-neutral-400 hover:text-white" to="/">Home</Link><Link className="text-neutral-400 hover:text-white" to="/About">About us</Link><Link className="text-neutral-400 hover:text-white" to="/Services">Services</Link><Link className="text-neutral-400 hover:text-white" to="/Contact">Contact</Link></div>
      <div className="flex flex-col gap-3 text-sm"><h2 className="mb-1 text-sm font-bold">What we do</h2><Link className="text-neutral-400 hover:text-white" to="/Services">Web development</Link><Link className="text-neutral-400 hover:text-white" to="/Services">Mobile apps</Link><Link className="text-neutral-400 hover:text-white" to="/Services">M-Pesa integration</Link><Link className="text-neutral-400 hover:text-white" to="/Services">Business systems</Link></div>
      <div><span className="text-[11px] font-bold tracking-[.18em] text-rose-400">BASED IN NAIROBI</span><p className="mt-4 flex items-center gap-2 text-sm text-neutral-300"><MapPin size={16}/> Nairobi, Kenya</p><Link to="/Contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-rose-300 hover:text-white">Let’s talk <ArrowUpRight size={16}/></Link></div>
    </div>
    <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-white/10 px-5 py-5 text-xs text-neutral-500 sm:flex-row sm:justify-between sm:px-8"><span>© {new Date().getFullYear()} Vectra Tech</span><span>Made with care in Kenya</span></div>
  </footer>;
}
