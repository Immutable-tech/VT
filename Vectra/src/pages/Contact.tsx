import { useState } from "react";
import type { FormEvent } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react";

const fieldClass = "mt-2 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-vectra focus:ring-4 focus:ring-rose-100";

export default function ContactTailwind(){
  const [sent,setSent]=useState(false);
  function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();setSent(true);}
  return <>
  <Navbar/><main>
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
        <span className="text-xs font-extrabold tracking-[.18em] text-vectra">LET’S TALK</span><h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Your next big idea <span className="text-vectra">starts here.</span>
        </h1><p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-600">Tell us what you’re looking to build. We’ll get back to you to discuss a clear path forward.</p></div></section>
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:py-20 lg:grid-cols-[.8fr_1.2fr] lg:gap-16"><aside className="pt-2"><span className="text-xs font-extrabold tracking-[.18em] text-vectra">CONTACT DETAILS</span>
        <h2 className="mt-3 font-display text-3xl font-extrabold">We’d love to hear from you.</h2>
        <p className="mt-3 leading-7 text-neutral-600">Have a project in mind or a question about our services? Drop us a note.</p>
        <a href="mailto:vectratech@gmail.com" className="mt-8 flex items-center gap-4">
          <span className="grid size-12 place-items-center rounded-xl bg-rose-50 text-vectra"><Mail size={20}/></span>
          <span><small className="block text-neutral-500">Email</small>
          <strong className="text-sm">vectratech@gmail.com</strong></span>
          </a><a href="tel:+254700000000" className="mt-5 flex items-center gap-4">
            <span className="grid size-12 place-items-center rounded-xl bg-rose-50 text-vectra"><Phone size={20}/>
            </span><span><small className="block text-neutral-500">Call us</small>
            <strong className="text-sm">+254 700 000 000</strong></span></a>
            <div className="mt-6 flex items-center gap-3 text-sm text-neutral-600">
              <MapPin size={18} className="text-vectra"/> Nairobi, Kenya</div></aside>
              <form onSubmit={submit} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg shadow-neutral-900/5 sm:p-8">
              <h2 className="font-display text-2xl font-bold">Send us a message</h2>
              <p className="mt-2 text-sm text-neutral-500">Fields marked * are required.</p>
              <label className="mt-6 block text-sm font-semibold">Your name *<input className={fieldClass} required name="name" placeholder="Edwin Sifuna"/></label>
              <label className="mt-4 block text-sm font-semibold">Email address *<input className={fieldClass} required type="email" name="email" placeholder="sifuna@company.com"/>
              </label><label className="mt-4 block text-sm font-semibold">What do you need help with?<select className={fieldClass} name="service" defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>Website or web app</option><option>Mobile application</option>
                <option>M-Pesa integration</option><option>WhatsApp automation</option>
                <option>Other</option></select></label><label className="mt-4 block text-sm font-semibold">Tell us about your project *<textarea className={fieldClass+" resize-y"} required name="message" rows={5} placeholder="A little about your goals and what you have in mind..."/></label>
                <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-vectra px-6 py-3.5 text-sm font-bold text-white transition hover:bg-rose-700" type="submit">{sent?<>Message noted <Check size={17}/></>:<>Send message <ArrowUpRight size={17}/></>}</button>{sent&&<p role="status" className="mt-4 text-sm leading-6 text-emerald-700">Thanks for reaching out. This demo form doesn’t send messages yet; please email us directly.</p>}</form></section></main><Footer/></>;
}
