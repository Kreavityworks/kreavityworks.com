import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Eye } from 'lucide-react';

// --- IMPORT HALAMAN ---
import HomePage from './pages/HomePage.jsx';
import WorkflowPage from './pages/WorkflowPage.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import CompanyPage from './pages/CompanyPage.jsx';
import BecomePartnerAgent from './pages/PartnerPage.jsx'; 
import ContactUs from './pages/ContactUs.jsx';
import JoinTheNetwork from './pages/JoinPage.jsx';       
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';

// --- IMPORT KOMPONEN UI ---
import Footer from './components/Footer.jsx'; 

// --- IMPORT DATA ---
import { allProjects, countries } from './constants.js';

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

  // --- 1. HANDLE BROWSER HISTORY (BACK BUTTON FIX) ---
  useEffect(() => {
    // Set initial history state
    if (!window.history.state) {
        window.history.replaceState({ page: 'home' }, '', '/');
    }

    const handlePopState = (event) => {
        if (event.state && event.state.page) {
            setActivePage(event.state.page);
            // Reset scroll on back button
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollTo(0, 0);
            }
        } else {
            setActivePage('home');
        }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // --- CURSOR LOGIC ---
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

  // --- 2. UPDATED NAVIGATION LOGIC ---
  const navigateTo = (page, param = null) => {
      setIsMenuOpen(false);

      if (param === 'contact') {
          setInitialInterest(null);
          setIsContactOpen(true);
          return;
      }

      // Handle Project Detail
      if (page === 'project') {
          const project = allProjects.find(p => p.id === param);
          if (project) {
              setLoaded(false); 
              setTimeout(() => {
                  setSelectedProject(project);
                  setActivePage('project');
                  // Push History
                  window.history.pushState({ page: 'project', id: param }, '', `/project/${param}`);
                  setLoaded(true); 
                  if (scrollContainerRef.current) scrollContainerRef.current.scrollTo(0,0);
              }, 700);
          }
          return;
      }

      // Handle Scroll to Section on same page
      if (activePage === page && typeof param === 'string' && !param.startsWith('0')) { 
           const element = document.getElementById(param);
           if (element) element.scrollIntoView({ behavior: 'smooth' });
           return;
      }

      // Handle Page Change
      if (activePage !== page) {
          setLoaded(false);
          setTimeout(() => {
              setActivePage(page);
              // Push History
              const path = page === 'home' ? '/' : `/${page}`;
              window.history.pushState({ page: page }, '', path);
              
              setLoaded(true);
              setTimeout(() => {
                  if (scrollContainerRef.current) scrollContainerRef.current.scrollTo(0,0);
                  if (param && typeof param === 'string') {
                      const element = document.getElementById(param);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }
              }, 50);
          }, 700);
      } else {
          // Same page, just reset scroll
          if (scrollContainerRef.current) scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
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

        {/* Footer dipanggil dari file terpisah */}
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