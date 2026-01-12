import React, { useEffect, useRef } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const TalentProfile = ({ navigateTo, setCursorHovering }) => {
    const revealRefs = useRef([]);
    const addToRefs = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-12');
                }
            });
        }, { threshold: 0.1 });
        setTimeout(() => revealRefs.current.forEach(el => el && observer.observe(el)), 100);
        return () => observer.disconnect();
    }, []);

    const revealClass = "opacity-0 translate-y-12 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform";

    return (
        <div className="min-h-screen bg-white text-black pt-48 pb-32 px-6 md:px-12 max-w-[1600px] mx-auto">
            {/* Back Navigation */}
            <button 
                onClick={() => navigateTo('talent-directory')} 
                className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-30 hover:opacity-100 mb-20 flex items-center gap-3 transition-all"
                onMouseEnter={() => setCursorHovering(true)}
                onMouseLeave={() => setCursorHovering(false)}
            >
                <ArrowLeft size={14} /> Back to Collective
            </button>

            {/* Hero Section: Pure Typography */}
            <section className="mb-40">
                <div className="mb-24">
                    <h5 ref={addToRefs} className={`text-[10px] text-black/40 mb-8 uppercase tracking-[0.3em] ${revealClass}`}>Principal Strategist</h5>
                    <h1 ref={addToRefs} className={`text-7xl md:text-9xl lg:text-[13rem] font-medium tracking-tighter leading-[0.8] ${revealClass} delay-100`}>
                        SYAMSUL <br /> RIZAL
                    </h1>
                </div>
                
                <div ref={addToRefs} className={`max-w-4xl border-l border-black/10 pl-8 md:pl-12 mt-20 ${revealClass} delay-300`}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40 mb-10 italic">
                        Design That Thinks. &nbsp; Strategy That Speaks.
                    </p>
                    <p className="text-2xl md:text-4xl text-black/80 leading-[1.1] tracking-tighter mb-10">
                        "Building a brand is not just about making a logo. It is about carving meaning that sticks in human minds."
                    </p>
                    <p className="text-base md:text-lg text-black/50 leading-relaxed max-w-2xl">
                        Every visual work is born from strategic thinking based on research and philosophy. The approach used is not just about aesthetics, but how visuals reflect identity and the brand's journey.
                    </p>
                </div>
            </section>

            {/* Statistics Section: Wide Layout */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-40 border-y border-black/5 py-16 font-mono uppercase tracking-tighter">
                <div ref={addToRefs} className={revealClass}>
                    <h3 className="text-4xl md:text-6xl font-medium">2016</h3>
                    <p className="text-[10px] text-black/30 mt-4 tracking-widest">Established</p>
                </div>
                <div ref={addToRefs} className={`${revealClass} delay-100`}>
                    <h3 className="text-4xl md:text-6xl font-medium">200+</h3>
                    <p className="text-[10px] text-black/30 mt-4 tracking-widest">Brands Collaborated</p>
                </div>
                <div ref={addToRefs} className={`${revealClass} delay-200`}>
                    <h3 className="text-4xl md:text-6xl font-medium">5.0</h3>
                    <p className="text-[10px] text-black/30 mt-4 tracking-widest">Google Rating</p>
                </div>
                <div ref={addToRefs} className={`${revealClass} delay-300`}>
                    <h3 className="text-4xl md:text-6xl font-medium">100%</h3>
                    <p className="text-[10px] text-black/30 mt-4 tracking-widest">Systematic Process</p>
                </div>
            </section>

            {/* Core Services Section */}
            <section className="mb-40">
                <div className="flex items-center gap-6 mb-20">
                    <span className="font-mono text-[10px] text-black/30 uppercase tracking-[0.5em]">[ Core Services ]</span>
                    <div className="h-[1px] bg-black/5 flex-grow"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 border-l border-t border-black/10">
                    {[
                        { id: '01', t: 'Brand Strategy Consultation', d: 'Unraveling essence, purpose, and positioning.' },
                        { id: '02', t: 'Logo & Visual Identity', d: 'Creating solid, adaptive symbols rooted in strategy.' },
                        { id: '03', t: 'Brand Revitalization', d: 'Renewing identity direction and look to remain relevant.' },
                        { id: '04', t: 'Consultation & Mentoring', d: '1-on-1 guidance for business owners and creators.' }
                    ].map((s, i) => (
                        <div key={i} ref={addToRefs} className={`p-12 md:p-20 border-r border-b border-black/10 group hover:bg-neutral-50 transition-colors ${revealClass}`}>
                            <span className="font-mono text-[10px] text-black/20 mb-10 block tracking-[0.3em]">{s.id}</span>
                            <h4 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight">{s.t}</h4>
                            <p className="text-black/40 text-sm md:text-base leading-relaxed group-hover:text-black/60 transition-colors max-w-sm">{s.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Methodology CTA */}
            <section className="bg-black text-white p-12 md:p-24 rounded-[3rem] flex flex-col lg:flex-row justify-between items-center gap-16 mx-auto relative overflow-hidden group">
                <div className="max-w-2xl text-left z-10">
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-10 leading-[1.05]">Working with Systemic Methodology.</h2>
                    <div className="space-y-6 opacity-60">
                        <div className="flex gap-6 items-start">
                            <div className="w-6 h-[1px] bg-white mt-3 shrink-0"></div>
                            <p className="text-sm md:text-base leading-relaxed"><strong>Upscale Your Brand:</strong> More professional appearance based on strategic analysis.</p>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="w-6 h-[1px] bg-white mt-3 shrink-0"></div>
                            <p className="text-sm md:text-base leading-relaxed"><strong>Work Systematically:</strong> Using the "Brandflow Quantum Framework" from research to finishing.</p>
                        </div>
                    </div>
                </div>
                
                <button 
                    onClick={() => navigateTo('home', 'contact')}
                    className="bg-white text-black px-14 py-7 rounded-full font-bold flex items-center gap-4 hover:scale-105 transition-all duration-500 shrink-0 z-10"
                    onMouseEnter={() => setCursorHovering(true)}
                    onMouseLeave={() => setCursorHovering(false)}
                >
                    <span className="text-sm uppercase tracking-[0.2em]">Start Project</span>
                    <ArrowUpRight size={22} />
                </button>
            </section>
        </div>
    );
};

export default TalentProfile;