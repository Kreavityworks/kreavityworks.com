import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react'; // Icon Play dihapus

// --- IMPORT DATA & KOMPONEN (Modular & Bersih) ---
import { allProjects, handleImageError } from '../constants'; 
import { InteractiveShape } from '../components/UIComponents'; 

// --- PROJECT CARD COMPONENT ---
const ProjectCard = ({ project, index, navigateTo, setCursorHovering, setIsEyeMode, revealClass, addToRefs }) => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        setIsEyeMode(true);
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay prevented", error);
            });
        }
    };

    const handleMouseLeave = () => {
        setIsEyeMode(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div className={`w-full py-24 transition-colors duration-500 ${index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}`}>
            <div ref={addToRefs} className={`group cursor-pointer ${revealClass} px-6 md:px-12 max-w-[1600px] mx-auto`}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center`}>
                    {/* VISUAL CONTAINER */}
                    <div 
                        className={`relative aspect-[16/9] bg-neutral-200/50 rounded-lg overflow-hidden shadow-sm ${project.alignRight ? 'order-1 md:order-2' : 'order-2 md:order-1'}`} 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave} 
                        onClick={() => navigateTo('project', project.id)}
                    >
                        {project.video && (
                            <video
                                ref={videoRef}
                                src={project.video}
                                muted
                                loop
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10"
                            />
                        )}

                        <div className={`absolute inset-0 bg-neutral-300/30 flex items-center justify-center z-20 transition-transform duration-[1200ms] ease-out group-hover:scale-105`}>
                            {project.image ? (
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover" 
                                    onError={handleImageError}
                                />
                            ) : (
                                <div className="text-black/10 text-8xl font-bold tracking-tighter select-none">{project.id}</div>
                            )}
                        </div>
                    </div>

                    {/* TEXT CONTENT */}
                    <div className={`flex flex-col justify-center h-full ${project.alignRight ? 'order-2 md:order-1 md:text-right' : 'order-1 md:order-2 text-left'}`}>
                        <h4 className="text-sm text-black/40 uppercase tracking-widest mb-4 font-medium">{project.category}</h4>
                        <h3 onClick={() => navigateTo('project', project.id)} className="text-4xl md:text-6xl font-medium tracking-tighter mb-6 group-hover:text-black/70 transition-colors cursor-pointer">{project.title}</h3>
                        <p className={`text-black/60 text-lg leading-relaxed max-w-md mb-8 ${project.alignRight ? 'ml-auto' : ''}`}>{project.desc}</p>
                        <div className={`flex mt-4 ${project.alignRight ? 'justify-end' : 'justify-start'}`}>
                            <button className={`relative overflow-hidden group border border-black/20 transition-all duration-300 cursor-pointer rounded-full px-8 py-3`} onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)} onClick={() => navigateTo('project', project.id)}>
                                <span className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"></span>
                                <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">View Project <ArrowRight size={16} /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- MAIN HOMEPAGE COMPONENT ---
const HomePage = ({ setCursorHovering, setIsEyeMode, setIsVideoHovering, navigateTo }) => {
    const [visibleProjects, setVisibleProjects] = useState(5);
    const revealRefs = useRef([]);
    // Logika animasi play button dihapus dari sini

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-16');
                }
            });
        }, { threshold: 0.1 });
        setTimeout(() => revealRefs.current.forEach(el => el && observer.observe(el)), 100);
        return () => observer.disconnect();
    }, [visibleProjects]); 

    const addToRefs = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

    const revealClass = "opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";

    return (
        <div className="w-full">
            {/* HERO */}
            <header className="snap-start min-h-screen relative pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center max-w-[1600px] mx-auto bg-white text-black">
                <div className="max-w-5xl z-10 mb-8">
                    <h5 ref={addToRefs} className={`text-sm md:text-base text-black/50 mb-6 uppercase tracking-[0.2em] ${revealClass}`}>A Next-Gen Design Agency</h5>
                    <h1 ref={addToRefs} className={`text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] mb-8 ${revealClass} delay-[100ms]`}>
                        Global Digital <br /><span className="text-black/40">Architecture Agency.</span>
                    </h1>
                    <p ref={addToRefs} className={`text-lg md:text-xl text-black/70 max-w-2xl leading-relaxed ${revealClass} delay-[200ms]`}>
                        Beyond standard design. We empower forward-thinking brands with intelligent UX and radical visual systems ensuring your product stays ahead of the curve.
                    </p>
                </div>
                
                {/* --- VIDEO AREA FIXED (BERSIH TANPA KURSOR PLAY) --- */}
                <div ref={addToRefs} className={`w-full h-[40vh] md:h-[50vh] bg-[#111] rounded-2xl overflow-hidden relative group shadow-2xl ${revealClass} delay-[300ms]`} onMouseEnter={() => setIsVideoHovering(true)} onMouseLeave={() => setIsVideoHovering(false)}>
                    <video
                        src="/projects/showcase.mp4" 
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-20 pointer-events-none z-10"></div>
                    {/* Elemen Play Button sudah dihapus */}
                </div>
            </header>

            {/* STATS */}
            <section className="snap-start min-h-screen px-6 md:px-12 flex items-center bg-[#050505] text-white py-20">
                <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 w-full">
                    <h2 ref={addToRefs} className={`text-3xl md:text-5xl font-light tracking-tight leading-snug ${revealClass}`}>
                        We build websites, we engineer high-scale digital assets specific for aggressive scale-ups through design AI integration.
                    </h2>
                    <div ref={addToRefs} className={`flex flex-col justify-end ${revealClass} delay-[200ms]`}>
                        <p className="text-white/60 mb-8 leading-relaxed text-lg">Guaranteed for long-treatment, ensuring every pixel performs at peak performance without compromise.</p>
                        <button onClick={() => navigateTo('company')} className={`relative overflow-hidden group border border-white/20 transition-all duration-300 cursor-pointer rounded-full px-8 py-4 w-fit hover:border-white`} onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>
                            <span className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"></span>
                            <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center gap-2">More about us <ArrowRight size={18} /></span>
                        </button>
                    </div>
                </div>
            </section>

            {/* FEATURED PROJECTS */}
            <section id="projects" className="snap-start min-h-screen flex flex-col justify-center bg-white text-black py-32">
                <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-black/10 pb-8">
                        <h2 ref={addToRefs} className={`text-5xl font-medium tracking-tighter ${revealClass}`}>Featured Projects</h2>
                        <span ref={addToRefs} className={`hidden md:block text-black/40 ${revealClass}`}>Selected Works 2024-2025</span>
                    </div>
                </div>
                
                <div className="flex flex-col w-full">
                    {/* Mengambil data dari Constants */}
                    {allProjects.slice(0, visibleProjects).map((project, index) => (
                        <ProjectCard 
                            key={index} 
                            project={project} 
                            index={index} 
                            navigateTo={navigateTo} 
                            setCursorHovering={setCursorHovering} 
                            setIsEyeMode={setIsEyeMode} 
                            revealClass={revealClass} 
                            addToRefs={addToRefs} 
                        />
                    ))}
                </div>

                {visibleProjects < allProjects.length && (
                    <div ref={addToRefs} className={`mt-40 text-center ${revealClass} px-6 md:px-12`}>
                        <button onClick={() => setVisibleProjects(10)} className="relative overflow-hidden group border border-black/10 transition-all duration-300 cursor-pointer rounded-full px-12 py-6 text-lg" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>
                            <span className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"></span>
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">View all projects <ArrowUpRight size={20} /></span>
                        </button>
                    </div>
                )}
            </section>

            {/* WHY CHOOSE US */}
            <section id="why-choose-us" className="snap-start min-h-screen px-6 md:px-12 flex items-center bg-[#050505] text-white py-20">
                <div className="max-w-[1600px] mx-auto w-full">
                    <h2 ref={addToRefs} className={`text-sm uppercase tracking-widest text-white/40 mb-16 ${revealClass}`}>Why Choose KreavityWorks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="flex flex-col gap-12">
                            <h3 ref={addToRefs} className={`text-4xl md:text-5xl font-medium tracking-tight leading-tight ${revealClass}`}>From motion design to AI-powered products—we design and build interfaces for the future.</h3>
                            {/* Interactive Shape dari UIComponents */}
                            <div ref={addToRefs} className={`w-full aspect-video bg-white/5 rounded-xl border border-white/10 overflow-hidden relative group ${revealClass} delay-100`} onMouseEnter={() => setIsEyeMode(true)} onMouseLeave={() => setIsEyeMode(false)}>
                                <InteractiveShape />
                            </div>
                        </div>
                        <div className="space-y-0">
                            {[
                                { t: "AI-Powered Velocity", d: "We slash production time via AI integration in UX/UI workflows, guaranteeing 24-48h turnaround for world-class design without compromising quality.", i: "01" },
                                { t: "The 25 Global Principles", d: "Zero error policy. Every pixel and code line is audited via our 25 Global Implementation Principles to ensure perfect product integrity.", i: "02" },
                                { t: "Sentient Interaction", d: "Building digital experiences 'aware' of user presence. We employ Sentient UI logic and Magnetic Physics for more human-centric interactions.", i: "03" },
                                { t: "Predictive Scalability", d: "Web architecture built to Fortune 500 standards. Modular structure ensures your assets are ready for global scale and future tech integration.", i: "04" }
                            ].map((s, i) => (
                                <div key={i} ref={addToRefs} className={`group border-t border-white/10 py-8 hover:bg-white/5 transition-colors duration-300 px-4 -mx-4 cursor-pointer ${revealClass}`}>
                                    <div className="flex items-start gap-6">
                                        <span className="text-xs font-mono text-white/30 pt-1">{s.i}</span>
                                        <div><h4 className="text-xl font-medium mb-2 group-hover:text-white transition-colors">{s.t}</h4><p className="text-white/60 text-sm">{s.d}</p></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;