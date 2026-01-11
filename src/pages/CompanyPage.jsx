import React, { useEffect, useRef } from 'react';
import { Zap, ShieldCheck, Cpu, Layers } from 'lucide-react';

const CompanyPage = ({ setCursorHovering, setCursorText }) => {
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

    const pillars = [
        { title: "AI-Powered Velocity", desc: "We slash production time via AI integration in UX/UI workflows, guaranteeing 24-48h turnaround for world-class design iterations without compromising quality.", icon: <Zap size={32} /> },
        { title: "The 25 Global Principles", desc: "Zero error policy. Every pixel and code line is audited via our 25 Global Implementation Principles to ensure perfect product integrity.", icon: <ShieldCheck size={32} /> },
        { title: "Sentient Interaction", desc: "Building digital experiences 'aware' of user presence. We employ Sentient UI logic and Magnetic Physics for more human-centric interactions.", icon: <Cpu size={32} /> },
        { title: "Predictive Scalability", desc: "Our web architecture is built to Fortune 500 standards. Modular structure ensures your digital assets are ready for global scale and future tech integration.", icon: <Layers size={32} /> }
    ];

    const revealClass = "opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";

    return (
        <div className="snap-start pt-48 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen bg-white text-black">
            <article className="mb-40">
                <h5 ref={addToRefs} className={`text-sm text-black/50 mb-6 uppercase tracking-[0.2em] ${revealClass}`}>The Performance Engine</h5>
                
                <h1 
                    onMouseEnter={() => setCursorHovering(true)}
                    onMouseLeave={() => setCursorHovering(false)}
                    className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] mb-12 mix-blend-multiply cursor-pointer"
                >
                    <span ref={addToRefs} className={`block ${revealClass}`}>Architecting</span>
                    <span ref={addToRefs} className={`block ${revealClass} delay-100`}>the Future of</span>
                    <span ref={addToRefs} className={`block ${revealClass} delay-200 text-black/40`}>High-Scale Brands.</span>
                </h1>
                
                <div ref={addToRefs} className={`max-w-3xl pl-0 md:pl-2 border-l-2 border-black/10 ${revealClass} delay-300`}>
                    <p className="text-xl md:text-2xl text-black/80 leading-relaxed pl-6">Since our inception, we haven't just sought solutions; we've built <strong>Visual Growth Systems</strong>. Combining design precision with AI intelligence to ensure every digital asset operates at the highest level.</p>
                </div>
            </article>
            
            <section className="snap-start mb-20">
                <div className="flex justify-between items-end mb-16 border-b border-black/10 pb-8">
                    <h2 ref={addToRefs} className={`text-4xl font-medium tracking-tighter ${revealClass}`}>The Optimization Hub</h2>
                    <span ref={addToRefs} className={`hidden md:block text-black/40 ${revealClass}`}>Our Standard of Excellence</span>
                </div>
                <div className="grid grid-cols-1 gap-0">
                    {pillars.map((pillar, index) => (
                        <div 
                            key={index} 
                            ref={addToRefs} 
                            className={`group relative py-16 border-b border-black/10 transition-colors duration-500 hover:bg-black/[0.05] cursor-none ${revealClass}`} 
                            onMouseEnter={() => setCursorText("BENEFIT")} 
                            onMouseLeave={() => setCursorText("")}
                        >
                            <div className="absolute bottom-0 left-0 h-[1px] bg-black w-0 group-hover:w-full transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                                <div className="md:col-span-1 text-black/30 font-mono text-sm pt-2">0{index + 1}</div>
                                <div className="md:col-span-4">
                                    <div className="mb-4 text-black/80 group-hover:text-black transition-colors">{pillar.icon}</div>
                                    <h3 className="text-3xl font-medium tracking-tight mb-2">{pillar.title}</h3>
                                </div>
                                <div className="md:col-span-6 md:col-start-7">
                                    <p className="text-lg text-black/60 leading-relaxed max-w-xl group-hover:text-black/80 transition-colors">{pillar.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CompanyPage;