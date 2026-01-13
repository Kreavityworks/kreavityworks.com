import React, { useState, useEffect, useRef } from 'react';
import { Github, Instagram, ArrowRight, Phone, Mail, Copy, Check, X } from 'lucide-react';

const Footer = ({ setCursorHovering, navigateTo, openContact }) => {
    const dockRef = useRef(null);
    const [dockMouseX, setDockMouseX] = useState(null);
    const [activeModal, setActiveModal] = useState(null);
    const [copyStatus, setCopyStatus] = useState(false);
    const revealRefs = useRef([]);
    const addToRefs = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-16');
                }
            });
        }, { threshold: 0.1 });
        revealRefs.current.forEach(el => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const getDockScale = (index) => {
        if (dockMouseX === null) return 1;
        const iconCenter = index * 60 + 30;
        const distance = Math.abs(dockMouseX - iconCenter);
        const maxDistance = 150;
        if (distance > maxDistance) return 1;
        return Math.max(1, Math.min(1 + (1.5 - distance / maxDistance), 2.2));
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopyStatus(true);
        setTimeout(() => setCopyStatus(false), 2000);
    }

    const socials = [
        { icon: <Github size={20} />, link: "https://github.com/kreavityworks" },
        { icon: <Instagram size={20} />, link: "https://www.instagram.com/kreavity_works/" },
        { icon: <span className="font-bold text-xs">UP</span>, link: "https://www.upwork.com/agencies/1984085958253630159/" },
        { icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>, link: "https://x.com/KreavityWorks" }
    ];
    
    const revealClass = "opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";

    return (
        <footer id="contact" className="snap-start min-h-screen px-6 md:px-12 relative overflow-hidden bg-white text-black py-32">
             {activeModal && (
                <div className="fixed inset-0 z-[9999] bg-white/10 backdrop-blur-3xl flex items-center justify-center p-4 animate-in fade-in duration-500">
                    <div className="bg-white text-black p-8 rounded-2xl shadow-2xl relative max-w-sm w-full border border-black/5 flex flex-col items-center text-center animate-in zoom-in-95 duration-500">
                        <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-black/50 hover:text-black transition-all hover:scale-110 bg-neutral-100 rounded-full p-2"><X size={20}/></button>
                        <div className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center mb-6 shadow-xl animate-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-backwards">{activeModal.type === 'Phone' ? <Phone size={36}/> : <Mail size={36}/>}</div>
                        <div className="space-y-2 mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-backwards"><h3 className="text-sm font-bold uppercase tracking-widest text-black/40">{activeModal.type}</h3><p className="text-2xl font-medium tracking-tighter break-all">{activeModal.value}</p></div>
                        <button onClick={() => handleCopy(activeModal.value)} className={`w-full py-4 bg-black text-white rounded-full text-sm font-medium transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group relative overflow-hidden animate-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-backwards ${copyStatus ? 'bg-green-600' : 'hover:scale-[1.02] hover:shadow-lg'}`} onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}><span className={`flex items-center gap-2 relative z-10 ${copyStatus ? 'scale-110' : ''} transition-transform`}>{copyStatus ? <Check size={18}/> : <Copy size={18}/>}{copyStatus ? "Copied!" : "Copy to Clipboard"}</span></button>
                    </div>
                </div>
            )}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-neutral-200 rounded-full blur-[120px] animate-blob mix-blend-multiply"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-neutral-100 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
            </div>
            <div className="max-w-[1600px] mx-auto w-full relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24">
                    <div ref={addToRefs} className={`${revealClass}`}>
                        <h2 className="text-6xl md:text-8xl font-medium tracking-tighter mb-8">Have an idea?</h2>
                        <button onClick={openContact} className={`relative overflow-hidden group !border-b-2 !border-t-0 !border-l-0 !border-r-0 !border-black/20 !rounded-none pb-4 flex items-center gap-6 overflow-visible cursor-pointer`} onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>
                             <span className="relative z-10 flex items-center gap-6 group-hover:gap-10 transition-all duration-500 text-4xl md:text-6xl font-light">Contact Us <ArrowRight size={56} /></span>
                        </button>
                        <div className="flex gap-4 mt-8">
                             <button onClick={() => setActiveModal({type: 'Phone', value: '+62 821-2544-9866'})} className="w-16 h-16 rounded-full flex items-center justify-center border border-black/20 relative overflow-hidden group" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}><span className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"></span><span className="relative z-10 group-hover:text-white transition-colors duration-300"><Phone size={24} /></span></button>
                             <button onClick={() => setActiveModal({type: 'Email', value: 'projects@kreavityworks.com'})} className="w-16 h-16 rounded-full flex items-center justify-center border border-black/20 relative overflow-hidden group" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}><span className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"></span><span className="relative z-10 group-hover:text-white transition-colors duration-300"><Mail size={24} /></span></button>
                        </div>
                    </div>
                    <div ref={addToRefs} className={`flex flex-col gap-4 text-black/50 text-sm ${revealClass} delay-200`}>
                        <p>Kreavity Works HQ<br/>Jakarta, Indonesia</p>
                        <p className="mt-4 text-black">projects@kreavityworks.com</p>
                        <div ref={dockRef} className="flex items-end gap-2 mt-8 h-16" onMouseMove={(e) => { const rect = dockRef.current.getBoundingClientRect(); setDockMouseX(e.clientX - rect.left); }} onMouseLeave={() => setDockMouseX(null)}>
                            {socials.map((social, index) => {
                                const scale = getDockScale(index);
                                return (<a key={index} href={social.link} target="_blank" rel="noopener noreferrer" style={{ transform: `scale(${scale})` }} className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 origin-bottom shadow-sm" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>{social.icon}</a>);
                            })}
                        </div>
                    </div>
                </div>

                {/* --- BAGIAN PERBAIKAN: SEJAJAR & CENTER COPYRIGHT --- */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/10 text-xs text-black/40 uppercase tracking-widest font-medium gap-10 md:gap-0">
                    <div className="flex flex-row justify-center items-center gap-6 md:gap-8 flex-wrap">
                        <button onClick={() => navigateTo('privacy-policy')} className="hover:text-black transition-colors">Privacy Policy</button>
                        <button onClick={() => navigateTo('partner')} className="hover:text-black relative group transition-colors">
                            Become Partner Agent
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300"></span>
                        </button>
                        <button onClick={() => navigateTo('talent-directory')} className="hover:text-black relative group transition-colors">
                            The Collective
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300"></span>
                        </button>
                    </div>
                    
                    {/* Copyright diposisikan di tengah pada mobile */}
                    <div className="w-full md:w-auto text-center">
                        <p className="opacity-60">&copy; 2026 KreavityWorks. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;