import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const TalentDirectory = ({ setCursorHovering, setCursorText, navigateTo }) => {
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
        
        setTimeout(() => {
            revealRefs.current.forEach(el => el && observer.observe(el));
        }, 100);
        
        return () => observer.disconnect();
    }, []);

    const talents = [
        { 
            id: "talent-nando",
            name: "Nando", 
            role: "Fullstack UI/UX Design",
            desc: "Experience architect bridging technical intelligence with intuitive design for world-class digital product scalability and performance."
        },
        { 
            id: "talent-hadist",
            name: "Hadist", 
            role: "Visual Design Specialist",
            desc: "Exploring radical aesthetics to create visual systems that dominate market attention without compromising core design functionality."
        },
        { 
            id: "talent-syams",
            name: "Syams", 
            role: "Brand & Logo Specialist",
            desc: "Specializing in converting corporate identities into iconic and strategic visual symbols. Mastering brand narratives through design precision."
        }
    ];

    const revealClass = "opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";

    return (
        <div className="snap-start pt-48 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen bg-white text-black">
            {/* HERO SECTION */}
            <article className="mb-32">
                <h5 ref={addToRefs} className={`text-sm text-black/50 mb-6 uppercase tracking-[0.2em] ${revealClass}`}>The Collective Network</h5>
                
                <h1 
                    onMouseEnter={() => setCursorHovering(true)}
                    onMouseLeave={() => setCursorHovering(false)}
                    className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] mb-12 mix-blend-multiply cursor-pointer"
                >
                    <span ref={addToRefs} className={`block ${revealClass}`}>The Convergence</span>
                    <span ref={addToRefs} className={`block ${revealClass} delay-100`}>of Elite</span>
                    <span ref={addToRefs} className={`block ${revealClass} delay-200 text-black/40`}>Intelligence.</span>
                </h1>
                
                <div ref={addToRefs} className={`max-w-3xl pl-0 md:pl-2 border-l-2 border-black/10 ${revealClass} delay-300`}>
                    <p className="text-xl md:text-2xl text-black/80 leading-relaxed pl-6">
                        We don't just gather people; we build a collective of specialists. Each individual is a primary pillar integrating <strong>Radical Aesthetics</strong> with system intelligence.
                    </p>
                </div>
            </article>
            
            {/* TALENT GRID SECTION */}
            <section className="snap-start mb-40">
                <div className="flex justify-between items-end mb-16 border-b border-black/10 pb-8">
                    <h2 ref={addToRefs} className={`text-4xl font-medium tracking-tighter ${revealClass}`}>Subject Matter Experts</h2>
                    <span ref={addToRefs} className={`hidden md:block text-black/40 ${revealClass}`}>High-Performance Individuals</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-black/10">
                    {talents.map((talent, index) => (
                        <div 
                            key={index} 
                            ref={addToRefs} 
                            className={`group relative p-10 border-r border-b border-black/10 transition-colors duration-500 hover:bg-black/[0.05] cursor-none ${revealClass}`} 
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onMouseEnter={() => setCursorText("PORTFOLIO")} 
                            onMouseLeave={() => setCursorText("")}
                            onClick={() => navigateTo(talent.id)}
                        >
                            <div className="absolute top-0 left-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
                            
                            <div className="flex flex-col h-full justify-between">
                                <div className="space-y-8">
                                    <div className="flex justify-between items-start">
                                        <div className="text-black/30 font-mono text-sm">0{index + 1}</div>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-4xl font-medium tracking-tight mb-3">{talent.name}</h3>
                                        <p className="text-xs font-mono uppercase tracking-widest text-black/40 group-hover:text-black/70 transition-colors mb-6">{talent.role}</p>
                                        <p className="text-base text-black/60 leading-relaxed group-hover:text-black/80 transition-colors line-clamp-5">
                                            {talent.desc}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-12 flex items-center gap-2 text-black/20 group-hover:text-black transition-all transform group-hover:translate-x-2">
                                    <span className="text-xs font-bold uppercase tracking-widest">View Full Profile</span>
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CALL TO ACTION SECTION */}
            <section className="snap-start py-32 border-t border-black/10 text-center">
                <div ref={addToRefs} className={`${revealClass}`}>
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-8">Ready to Scale Your Reach?</h2>
                    <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto mb-12 leading-relaxed">
                        We are expanding our ecosystem. If you operate at the intersection of high-scale strategy and elite execution, join us as a strategic partner.
                    </p>
                    <button 
                        onClick={() => navigateTo('partner')} 
                        className="relative overflow-hidden group border border-black/20 rounded-full px-12 py-5 inline-flex items-center transition-all duration-300 hover:border-black"
                        onMouseEnter={() => setCursorHovering(true)}
                        onMouseLeave={() => setCursorHovering(false)}
                    >
                        <span className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"></span>
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300 font-medium">Become Partner Agent</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default TalentDirectory;