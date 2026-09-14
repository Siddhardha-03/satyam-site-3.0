import { useState, type FormEvent } from "react";
import "./App.css";

const phone = "9248791189";
const whatsapp = `https://wa.me/91${phone}`;
const services = [
  ["Hard disk", "HDD recovery", "/assets/stock_images/hardisk.jpg"],
  ["SSD / NVMe", "Solid-state recovery", "/assets/stock_images/SSD%20%26%20NVMe.jpg"],
  ["Pen drive", "USB recovery", "/assets/stock_images/pendrive.jpg"],
  ["Memory card", "Photo & video recovery", "/assets/stock_images/Memory%20cards.jpg"],
  ["RAID / NAS", "Business storage", "/assets/stock_images/nas-raid-array.jpeg"],
  ["CCTV / DVR", "Footage recovery", "/assets/stock_images/dvr_cctv.jpg"],
  ["Physical damage", "Component assessment", "/assets/stock_images/pcb_solderling_image.jpg"],
  ["Recovery lab", "Secure device handling", "/assets/stock_images/Lab_image.jpg"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Free diagnosis enquiry - ${data.get("device") || "Storage device"}`;
    const body = `Name: ${data.get("name")}\nPhone: ${data.get("contact")}\nDevice: ${data.get("device")}\nIssue: ${data.get("details")}`;
    window.location.href = `mailto:satyamdlab@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };
  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <div className="utility-bar"><span>Gudivada, Andhra Pradesh</span><span>Diagnose first. Recover carefully.</span><span><a href={`tel:+91${phone}`}>+91 {phone}</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></span></div>
    <header className="site-header"><a className="brand" href="#top" aria-label="Satyam Data Recovery Lab home"><img src="/assets/logo-dark.jpeg" alt="" /><span><strong>SATYAM</strong><small>DATA RECOVERY LAB</small><em>Recover today. Rebuild tomorrow.</em></span></a><button className={menuOpen ? "menu-toggle open" : "menu-toggle"} type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i /><i /><i /></button><nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation"><a href="#services" onClick={closeMenu}>Services</a><a href="#about" onClick={closeMenu}>About us</a><a href="#method" onClick={closeMenu}>Our method</a><a href="#contact" onClick={closeMenu}>Contact</a><a className="nav-cta" href="#contact" onClick={closeMenu}>Free diagnosis <span>↗</span></a></nav></header>
    <main id="top">
      <section className="hero"><div className="hero-copy"><p className="eyebrow">Professional data recovery lab</p><h1>Your data.<br /><em>Our expertise.</em></h1><p>A careful first response for hard disks, SSDs, pen drives, memory cards, RAID, NAS and CCTV storage. We begin with diagnosis.</p><div className="hero-actions"><a className="primary-button" href="#contact">Free diagnosis <span>↗</span></a><a className="whatsapp-button" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp the lab <span>↗</span></a></div><div className="hero-trust"><span><b>✓</b> Safe & secure handling</span><span><b>✓</b> Expert assessment</span><span><b>✓</b> Clear next steps</span></div></div><div className="hero-image"><img src="/assets/stock_images/Hard_Disk_hero_section.jpg" alt="Opened hard disk drive being inspected" /><div className="hero-note"><strong>LOST DATA?</strong><span>Start with a diagnosis.</span><i /></div></div></section>
      <section className="service-section" id="services"><div className="section-title"><p className="eyebrow">What we recover</p><h2>Our data recovery<br /><em>services</em></h2><p>We work across the storage devices used at home, in studios, offices and businesses.</p></div><div className="service-grid">{services.map(([label, title, image]) => <a className="service-card" href="#contact" key={label}><img src={image} alt="" /><span>{label}</span><strong>{title}</strong><i>↗</i></a>)}</div></section>
      <section className="value-strip"><div><b>01</b><strong>Free diagnosis</strong><span>No obligation</span></div><div><b>02</b><strong>Data safety first</strong><span>Confidential handling</span></div><div><b>03</b><strong>Careful methods</strong><span>Device-first assessment</span></div><div><b>04</b><strong>Clear communication</strong><span>Practical next steps</span></div></section>
      <section className="about-section" id="about"><div className="about-image"><img src="/assets/stock_images/Lab_Ai_image.jpg" alt="Technical data recovery laboratory" /><span>THE RECOVERY LAB / GUDIVADA</span></div><div className="about-copy"><p className="eyebrow">About Satyam Data Recovery</p><h2>Technical care for<br /><em>valuable information.</em></h2><p>Satyam Data Recovery Lab helps individuals and businesses respond to lost, deleted, corrupted or inaccessible data. Our approach is simple: understand the failure before choosing the recovery path.</p><div className="about-points"><span><b>01</b> Logical & filesystem issues</span><span><b>02</b> Firmware & electronic faults</span><span><b>03</b> Mechanical & physical damage</span><span><b>04</b> Business storage & CCTV systems</span></div><a className="outline-button" href="#method">See our method <span>↗</span></a></div></section>
      <section className="method-section" id="method"><div className="method-heading"><p className="eyebrow">How we work</p><h2>First, we protect<br /><em>the possibility.</em></h2><p>A failed drive is not the time for guesswork. We document the symptoms, diagnose the device and explain what comes next.</p></div><div className="method-steps"><div><b>01</b><strong>Listen & log</strong><span>What happened, and what has already been tried?</span></div><div><b>02</b><strong>Diagnose</strong><span>Logical, firmware, electronic, mechanical and filesystem checks.</span></div><div><b>03</b><strong>Recover carefully</strong><span>A considered recovery path with the original media protected.</span></div><div><b>04</b><strong>Validate & return</strong><span>Files checked and handed back with confidentiality.</span></div></div></section>
      <section className="word-section"><div className="word-image"><img src="/assets/satyam-portrait.jpeg" alt="Satyam Data Recovery Lab specialist" /></div><div className="word-copy"><p className="eyebrow">Our word</p><h2>Because every file<br /><em>has a story.</em></h2><p>When you trust Satyam with a device, you are trusting us with more than hardware. We will diagnose honestly, work carefully and treat what is yours with respect.</p><blockquote>“Your data matters. Our responsibility is to handle it with care.”</blockquote><strong>Experience · Precision · Trust</strong></div></section>
      <section className="contact-section" id="contact"><div><p className="eyebrow">Start here</p><h2>Tell us what<br /><em>happened.</em></h2><p>Share a few details and we will help you understand the next useful step.</p><div className="contact-links"><a href={`tel:+91${phone}`}><small>Call now</small><strong>+91 {phone}</strong></a><a href="mailto:satyamdlab@gmail.com"><small>Email</small><strong>satyamdlab@gmail.com</strong></a></div></div><form className="enquiry-form" onSubmit={submitEnquiry}><div className="form-title"><strong>FREE DIAGNOSIS</strong><span>Step 01 · Device details</span></div><label>Your name<input name="name" required placeholder="Name" /></label><label>Phone or WhatsApp<input name="contact" required type="tel" placeholder="Contact number" /></label><label>Device<select name="device" required defaultValue=""><option value="" disabled>Select device</option>{services.map(([label]) => <option key={label}>{label}</option>)}</select></label><label>What happened?<textarea name="details" required rows={3} placeholder="Tell us briefly about the problem" /></label><button className="primary-button" type="submit">{submitted ? "Email draft opened" : "Request diagnosis"} <span>↗</span></button><small>Your information is used only to respond to this enquiry.</small></form></section>
    </main>
    <footer className="footer"><div className="footer-main"><a className="brand" href="#top"><img src="/assets/logo-dark.jpeg" alt="" /><span><strong>SATYAM</strong><small>DATA RECOVERY LAB</small><em>Recover today. Rebuild tomorrow.</em></span></a><span>Gudivada, Andhra Pradesh · 521301</span><a href={`tel:+91${phone}`}>+91 {phone}</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a className="nav-cta" href="#contact">Free diagnosis <span>↗</span></a></div><div className="footer-bottom">© 2026 Satyam Data Recovery Lab. Experience. Precision. Trust.</div></footer>
  </div>;
}

export default App;