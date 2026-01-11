import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Instagram, ArrowRight, Phone, Mail, Copy, Check, Eye } from 'lucide-react';

// --- IMPORT HALAMAN (PATH STANDAR: ./pages/) ---
import HomePage from './pages/HomePage.jsx';
import WorkflowPage from './pages/WorkflowPage.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import CompanyPage from './pages/CompanyPage.jsx';
import BecomePartnerAgent from './pages/BecomePartnerAgent.jsx';
import ContactUs from './pages/ContactUs.jsx';
import JoinTheNetwork from './pages/JoinTheNetwork.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';

// --- IMPORT DATA ---
import { allProjects, countries } from './constants.js';

// --- FOOTER COMPONENT ---
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
                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/10 text-xs text-black/40 uppercase tracking-widest font-medium">
                    <div className="flex gap-8 mb-4 md:mb-0">
                        <button onClick={() => navigateTo('privacy-policy')} className="hover:text-black">Privacy Policy</button>
                        <button onClick={() => navigateTo('partner')} className="hover:text-black relative group flex items-center gap-1">
                            Become Partner Agent
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300"></span>
                        </button>
                    </div>
                    <p>&copy; 2026 KreavityWorks. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

// --- MAIN APP COMPONENT ---
const App = () => {
  const [activePage, setActivePage] = useState('home'); 
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false); 
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [initialInterest, setInitialInterest] = useState(null); 
  
  const [cursorHovering, setCursorHovering] = useState(false);
  const [isEyeMode, setIsEyeMode] = useState(false); 
  const [cursorText, setCursorText] = useState(""); 
  const [isVideoHovering, setIsVideoHovering] = useState(false);
  const [isLogoResetting, setIsLogoResetting] = useState(false);
  
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const cursorRef = useRef(null);
  const cursorIconRef = useRef(null);
  const cursorTextRef = useRef(null); 
  const scrollContainerRef = useRef(null);

  const openContactWithInterest = (interestTitle) => {
      setInitialInterest(interestTitle);
      setIsContactOpen(true);
  };

  // --- LOGIKA CURSOR (FINAL OPTIMIZED) ---
  useEffect(() => {
    let animationFrameId;

    const moveCursor = (e) => {
        if (!cursorRef.current) return;
        
        const x = e.clientX;
        const y = e.clientY;
        
        let scale = 1;
        if (cursorText) scale = 4;
        else if (isEyeMode) scale = 5;
        else if (cursorHovering) scale = 3.5;

        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
        cursorRef.current.style.opacity = isVideoHovering ? '0' : '1';

        if (cursorIconRef.current && cursorTextRef.current) {
            if (cursorText) {
                cursorIconRef.current.style.opacity = '0';
                cursorTextRef.current.style.opacity = '1';
                cursorTextRef.current.innerText = cursorText;
                cursorRef.current.style.mixBlendMode = 'normal';
                cursorRef.current.style.backgroundColor = 'black'; 
                cursorRef.current.style.color = 'white';
                cursorRef.current.style.border = 'none';
            } else if (isEyeMode) {
                cursorIconRef.current.style.opacity = '1';
                cursorTextRef.current.style.opacity = '0';
                cursorRef.current.style.mixBlendMode = 'normal';
                cursorRef.current.style.backgroundColor = 'white';
                cursorRef.current.style.color = 'black';
                cursorRef.current.style.border = 'none';
            } else {
                cursorIconRef.current.style.opacity = '0';
                cursorTextRef.current.style.opacity = '0';
                cursorRef.current.style.mixBlendMode = 'difference';
                cursorRef.current.style.backgroundColor = 'white';
                cursorRef.current.style.color = 'transparent';
            }
        }
    };

    window.addEventListener('mousemove', moveCursor);
    const timer = setTimeout(() => setLoaded(true), 700); 

    return () => {
        window.removeEventListener('mousemove', moveCursor);
        cancelAnimationFrame(animationFrameId);
        clearTimeout(timer);
    };
  }, [cursorHovering, isEyeMode, cursorText, isVideoHovering]);

  const navigateTo = (page, param = null) => {
      setIsMenuOpen(false);
      if (param === 'contact') {
          setInitialInterest(null);
          setIsContactOpen(true);
          return;
      }
      if (activePage === page && typeof param === 'string' && !param.startsWith('0')) { 
           const element = document.getElementById(param);
           if (element) element.scrollIntoView({ behavior: 'smooth' });
           return;
      }
      if (activePage === page && !param) {
          if (scrollContainerRef.current) {
              scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
          }
          return;
      }
      if (page === 'project') {
          const project = allProjects.find(p => p.id === param);
          if (project) {
              setLoaded(false); 
              setTimeout(() => {
                  setSelectedProject(project);
                  setActivePage('project');
                  setLoaded(true); 
                  setTimeout(() => {
                      if (scrollContainerRef.current) scrollContainerRef.current.scrollTo(0,0);
                  }, 50);
              }, 700);
          }
          return;
      }
      if (activePage !== page) {
          setLoaded(false);
          setTimeout(() => {
              setActivePage(page);
              setLoaded(true);
              setTimeout(() => {
                  if (scrollContainerRef.current) scrollContainerRef.current.scrollTo(0,0);
                  if (param && typeof param === 'string') {
                      const element = document.getElementById(param);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }
              }, 50);
          }, 700);
      }
  };

  const handleLogoClick = () => {
      setIsLogoResetting(true);
      navigateTo('home');
      setTimeout(() => setIsLogoResetting(false), 500); 
  };

  return (
    <>
    <ContactUs
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        setCursorHovering={setCursorHovering} 
        initialInterest={initialInterest}
        navigateTo={navigateTo}
    />

    <JoinTheNetwork
        isOpen={isPartnerOpen}
        onClose={() => setIsPartnerOpen(false)}
        setCursorHovering={setCursorHovering}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
    />

    <div className={`fixed inset-0 z-[10000] transition-all duration-700 ease-in-out pointer-events-none 
        ${loaded ? 'opacity-0 backdrop-blur-none' : 'opacity-100 backdrop-blur-3xl bg-white/10'}`}>
    </div>

    <div ref={cursorRef} className={`fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] -mt-2 -ml-2 hidden md:flex items-center justify-center transition-transform duration-200 ease-out mix-blend-difference overflow-hidden`}>
        <span ref={cursorIconRef} className="absolute opacity-0 transition-all duration-300 text-black flex items-center justify-center"><Eye size={4} strokeWidth={2.5} /></span>
        <span ref={cursorTextRef} className="absolute opacity-0 text-[2px] font-bold tracking-widest text-white whitespace-nowrap"></span>
    </div>

    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center backdrop-blur-lg bg-white/80 border-b border-black/5 text-black transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className={`cursor-pointer select-none origin-left ${isLogoResetting ? 'animate-logo-reset' : ''}`} onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)} onClick={handleLogoClick}>
          <img src="/brand/logo.png" alt="KREAVITY WORKS" className="h-10 md:h-12 w-auto object-contain"/>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm tracking-tight font-medium text-black/70">
          <button onClick={() => navigateTo('home', 'why-choose-us')} className="hover:text-black relative group overflow-hidden cursor-pointer" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>
              <span className="relative z-10">Why Us</span><span className="absolute bottom-0 left-0 w-full h-[1px] bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          </button>
          <button onClick={() => navigateTo('workflow')} className={`hover:text-black relative group overflow-hidden cursor-pointer ${activePage === 'workflow' ? 'text-black font-bold' : ''}`} onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>
              <span className="relative z-10">Workflow</span><span className={`absolute bottom-0 left-0 w-full h-[1px] bg-black transform transition-transform duration-300 ease-out ${activePage === 'workflow' ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'}`}></span>
          </button>
          <button onClick={() => navigateTo('home', 'projects')} className="hover:text-black relative group overflow-hidden cursor-pointer" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>
              <span className="relative z-10">Projects</span><span className="absolute bottom-0 left-0 w-full h-[1px] bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          </button>
          <button onClick={() => navigateTo('company')} className={`hover:text-black relative group overflow-hidden cursor-pointer ${activePage === 'company' ? 'text-black font-bold' : ''}`} onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>
              <span className="relative z-10">Company</span><span className={`absolute bottom-0 left-0 w-full h-[1px] bg-black transform transition-transform duration-300 ease-out ${activePage === 'company' ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'}`}></span>
          </button>
          <button onClick={() => navigateTo('home', 'contact')} className={`relative overflow-hidden group border border-black/10 transition-all duration-300 cursor-pointer rounded-full px-6 py-2`} onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>
             <span className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"></span>
             <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">Contact Us</span>
          </button>
        </div>
        <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
    </nav>

    {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-8 text-2xl font-light tracking-tighter text-black animate-in fade-in zoom-in duration-300">
          <button onClick={() => navigateTo('home', 'why-choose-us')}>Why Us</button>
          <button onClick={() => navigateTo('workflow')}>Workflow</button>
          <button onClick={() => navigateTo('home', 'projects')}>Projects</button>
          <button onClick={() => navigateTo('company')}>Company</button>
          <button onClick={() => { setIsMenuOpen(false); setIsContactOpen(true); }}>Contact Us</button>
          <button onClick={() => navigateTo('partner')}>Partnership</button>
          <button onClick={() => navigateTo('privacy-policy')}>Privacy Policy</button>
        </div>
    )}

    <div 
        ref={scrollContainerRef}
        className={`h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth font-sans selection:bg-black selection:text-white 
        ${(activePage === 'home' || activePage === 'company') ? 'snap-y snap-mandatory' : ''} 
        ${isMenuOpen ? 'overflow-hidden' : ''}`}
    >
        {activePage === 'home' && (
            <HomePage 
                setCursorHovering={setCursorHovering} 
                setIsEyeMode={setIsEyeMode} 
                setIsVideoHovering={setIsVideoHovering}
                navigateTo={navigateTo}
            />
        )}
        
        {activePage === 'company' && (
            <CompanyPage 
                setCursorHovering={setCursorHovering}
                setCursorText={setCursorText}
            />
        )}

        {activePage === 'workflow' && (
            <WorkflowPage setCursorHovering={setCursorHovering} />
        )}

        {activePage === 'privacy-policy' && (
            <PrivacyPolicy 
                setCursorHovering={setCursorHovering}
                navigateTo={navigateTo}
            />
        )}

        {activePage === 'partner' && (
            <BecomePartnerAgent
                setCursorHovering={setCursorHovering}
                openPartnerForm={() => setIsPartnerOpen(true)}
            />
        )}

        {activePage === 'project' && selectedProject && (
            <ProjectDetailPage
                project={selectedProject}
                allProjects={allProjects}
                setCursorHovering={setCursorHovering}
                setCursorText={setCursorText}
                navigateTo={navigateTo}
                setIsEyeMode={setIsEyeMode}
                openContact={() => openContactWithInterest(selectedProject.title)}
            />
        )}

        <Footer setCursorHovering={setCursorHovering} navigateTo={navigateTo} openContact={() => setIsContactOpen(true)} />
    </div>
    
    <style>{`
        @keyframes logoReset {
            0% { transform: scale(1); filter: blur(0px); opacity: 1; }
            40% { transform: scale(0.92); filter: blur(1.5px); opacity: 0.7; }
            100% { transform: scale(1); filter: blur(0px); opacity: 1; }
        }
        .animate-logo-reset {
            animation: logoReset 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        @keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1); } }
        .animate-blob { animation: blob 10s infinite alternate cubic-bezier(0.4, 0, 0.2, 1); }
        .animation-delay-2000 { animation-delay: 2s; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    `}</style>
    </>
  );
};

export default App;