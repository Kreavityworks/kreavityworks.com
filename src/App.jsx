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

// --- IMPORT HALAMAN BARU: THE COLLECTIVE ---
import TalentDirectory from './pages/TalentDirectory.jsx';
import TalentProfile from './pages/TalentProfile.jsx';

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

  // --- LOGIC 404 REDIRECT (Penambahan Baru, Tidak Menghapus Apapun) ---
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('p');
    if (redirectPath) {
        const targetPage = redirectPath.replace('/', '');
        window.history.replaceState(null, null, redirectPath);
        setActivePage(targetPage);
    }
  }, []);

  useEffect(() => {
    if (!window.history.state) {
        window.history.replaceState({ page: 'home' }, '', '/');
    }

    const handlePopState = (event) => {
        if (event.state && event.state.page) {
            setActivePage(event.state.page);
            if (scrollContainerRef.current) scrollContainerRef.current.scrollTo(0, 0);
        } else {
            setActivePage('home');
        }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
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

      if (page === 'project') {
          const project = allProjects.find(p => p.id === param);
          if (project) {
              setLoaded(false); 
              setTimeout(() => {
                  setSelectedProject(project);
                  setActivePage('project');
                  window.history.pushState({ page: 'project', id: param }, '', `/project/${param}`);
                  setLoaded(true); 
                  if (scrollContainerRef.current) scrollContainerRef.current.scrollTo(0,0);
              }, 700);
          }
          return;
      }

      setLoaded(false);
      setTimeout(() => {
          setActivePage(page);
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
          <button onClick={() => navigateTo('home', 'why-choose-us')} className="hover:text-black cursor-pointer" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>Why Us</button>
          <button onClick={() => navigateTo('workflow')} className="hover:text-black cursor-pointer" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>Workflow</button>
          <button onClick={() => navigateTo('home', 'projects')} className="hover:text-black cursor-pointer" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>Projects</button>
          <button onClick={() => navigateTo('company')} className="hover:text-black cursor-pointer" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>Company</button>
          <button onClick={() => navigateTo('home', 'contact')} className="border border-black/10 rounded-full px-6 py-2 hover:bg-black hover:text-white transition-all cursor-pointer" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>Contact Us</button>
        </div>
        <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
    </nav>

    {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col justify-center items-center gap-8 text-2xl font-light tracking-tighter text-black animate-in fade-in zoom-in duration-300">
          <button onClick={() => navigateTo('home')}>Home</button>
          <button onClick={() => navigateTo('workflow')}>Workflow</button>
          <button onClick={() => navigateTo('company')}>Company</button>
          <button onClick={() => navigateTo('talent-directory')}>The Collective</button>
          <button onClick={() => setIsMenuOpen(false)}>Close</button>
        </div>
    )}

    <div 
        ref={scrollContainerRef}
        className={`h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth font-sans selection:bg-black selection:text-white`}
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

        {activePage === 'talent-directory' && (
            <TalentDirectory 
                setCursorHovering={setCursorHovering}
                navigateTo={navigateTo}
            />
        )}

        {/* LOGIC DATA TALENT (Tetap Menggunakan Struktur Yang Boss Mau) */}
        {activePage === 'talent-syams' && (
            <TalentProfile 
                data={{
                    firstName: "SYAMSUL", lastName: "RIZAL", role: "Principal Brand Strategist",
                    tagline: "Design That Thinks. Strategy That Speaks.",
                    quote: "Building a brand is not just about making a logo. It is about carving meaning.",
                    bio: "Every visual work is born from strategic thinking based on research and philosophy.",
                    stats: [{ value: "2016", label: "Established" }, { value: "200+", label: "Brands" }, { value: "5.0", label: "Rating" }, { value: "100%", label: "Systematic" }],
                    services: [{ title: "Brand Strategy", desc: "Unraveling essence and positioning." }, { title: "Logo Identity", desc: "Creating solid symbols rooted in strategy." }]
                }}
                navigateTo={navigateTo}
                setCursorHovering={setCursorHovering}
            />
        )}

        {activePage === 'talent-nando' && (
            <TalentProfile 
                data={{
                    firstName: "NANDO", lastName: "M", role: "Senior Visual Design Specialist",
                    tagline: "Visual Systems. AI-Accelerated Workflow.",
                    quote: "Designing visual systems for high-growth B2B companies with 100% compliance.",
                    bio: "I specialize in designing and implementing Visual Systems for high-growth B2B companies.",
                    stats: [{ value: "2023", label: "Current Role" }, { value: "500+", label: "Connections" }, { value: "B2B", label: "Expertise" }, { value: "AI", label: "Integrated" }],
                    services: [{ title: "Visual Marketing", desc: "High-impact collateral and visual systems." }, { title: "UI/UX Design", desc: "User-centric digital product scalability." }]
                }}
                navigateTo={navigateTo}
                setCursorHovering={setCursorHovering}
            />
        )}

        {activePage === 'talent-hadist' && (
            <TalentProfile 
                data={{
                    firstName: "HADIST", lastName: "SYECH", role: "Graphic Designer",
                    tagline: "Visual Storyteller. Structural Clarity.",
                    quote: "Branding is about direction, meaning, and connection.",
                    bio: "Graphic designer focusing on creating engaging visuals and structural clarity for modern brands.",
                    stats: [{ value: "BINUS", label: "Education" }, { value: "Visual", label: "Specialist" }, { value: "2D", label: "Artistry" }, { value: "100%", label: "Engaging" }],
                    services: [{ title: "Graphic Design", desc: "Pure visual communication and layout." }, { title: "Visual Identity", desc: "Crafting modern assets for digital era." }]
                }}
                navigateTo={navigateTo}
                setCursorHovering={setCursorHovering}
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
    </>
  );
};

export default App;