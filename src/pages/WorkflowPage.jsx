import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

const WorkflowPage = ({ setCursorHovering }) => {
    const revealRefs = useRef([]);
    const heroTextRef = useRef(null);
    const [activeCapability, setActiveCapability] = useState(null);

    const capabilitiesData = [
        { title: "Creative Engineering", desc: "We don't just draw interfaces; we construct Experience Architecture. At KreavityWorks, Creative Engineering is the fusion of cognitive psychology and radical aesthetics. We deconstruct user behavior to build intuitive workflows, ensuring every creative asset serves a functional purpose to instantly boost brand authority and user satisfaction." },
        { title: "Creative AI Strategy", desc: "The future is autonomous. We help your business leapfrog the competition with artificial intelligence integration within creative workflows. From content automation to market behavior prediction systems, we build custom AI solutions that are not just smart, but aligned with your agency's strategic goals." },
        { title: "Motion Graphics", desc: "Static digital worlds are over. We bring your brand's message to life through immersive and kinetic visual narratives. Our motion graphics are designed to capture attention in seconds, transforming complex ideas into visual stories that are digestible, elegant, and capable of reinforcing your brand authority." },
        { title: "Scalable Ecosystems", desc: "Robust infrastructure is the foundation of limitless growth. We architect creative ecosystems that are solid, secure, and ready to handle global traffic surges. Using Fortune 500 standards, we ensure your application operates at peak performance, with high modularity for your future business expansion." },
        { title: "Quality Assurance", desc: "Our Zero Error Policy is our promise. Through rigorous auditing based on our 25 Global Implementation Principles, our QA team ensures your digital product is free from bugs and anomalies before it ever touches a user's hand. We stress-test stability and functionality because your product's integrity is our reputation." },
        { title: "Creative Direction", desc: "Grand vision requires precise visual direction. Creative Direction at KreavityWorks is about maintaining brand identity consistency amidst market noise. We lead the creative process to ensure every visual element—from typography to color palettes—communicates your brand's elite value powerfully." }
    ];

    const addToRefs = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-12');
                }
            });
        }, { threshold: 0.1, rootMargin: "-50px" });
        
        setTimeout(() => {
            revealRefs.current.forEach(el => el && observer.observe(el));
        }, 100);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (heroTextRef.current) {
                const scrolled = window.scrollY;
                heroTextRef.current.style.transform = `translateY(${scrolled * 0.2}px)`;
                heroTextRef.current.style.opacity = `${1 - scrolled / 700}`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const revealClass = "opacity-0 translate-y-12 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform";

    return (
        <div className="min-h-screen bg-white text-black pt-32 overflow-x-hidden">
            {/* CAPABILITY MODAL */}
            {activeCapability && (
                <div className="fixed inset-0 z-[12000] flex items-center justify-center p-6 animate-fade-in">
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-xl" onClick={() => setActiveCapability(null)}></div>
                    <div className="relative w-full max-w-2xl bg-white shadow-2xl rounded-2xl border border-black/5 p-8 md:p-12 animate-modal-pop-elastic">
                        <button onClick={() => setActiveCapability(null)} className="absolute top-6 right-6 p-2 bg-neutral-100 rounded-full hover:bg-black hover:text-white transition-colors">
                            <X size={20} />
                        </button>
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-6">{activeCapability.title}</h2>
                        <div className="w-12 h-1 bg-black mb-8"></div>
                        <p className="text-lg md:text-xl text-black/70 leading-relaxed">{activeCapability.desc}</p>
                    </div>
                </div>
            )}

            {/* HERO SECTION */}
            <div className="px-6 md:px-12 max-w-[1600px] mx-auto min-h-[60vh] flex flex-col justify-center relative">
                <div ref={heroTextRef} className="flex flex-col gap-2 md:gap-4 select-none relative z-10">
                    <h1 
                        onMouseEnter={() => setCursorHovering(true)}
                        onMouseLeave={() => setCursorHovering(false)}
                        className="text-7xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.9] cursor-pointer"
                    >
                        <span ref={addToRefs} className={`block ${revealClass}`}>We</span>
                        <span ref={addToRefs} className={`block ${revealClass} delay-100`}>Architect</span>
                        <span ref={addToRefs} className={`block ${revealClass} delay-200 text-black/20`}>Scalable</span>
                        <span ref={addToRefs} className={`block ${revealClass} delay-300`}>Creative Systems</span>
                    </h1>
                </div>
            </div>

            <div className="relative z-10 bg-white">
                <div className="px-6 md:px-12 max-w-[1600px] mx-auto py-24 border-t border-black/10 bg-white">
                    <p ref={addToRefs} className={`text-xl md:text-3xl leading-relaxed font-medium max-w-5xl ${revealClass}`}>
                        As a high-performance creative agency, we engineer digital architecture, high-impact visual systems, and autonomous AI-driven output.
                    </p>
                </div>

                <div className="border-t border-black/10 bg-white">
                    <div className="max-w-[1600px] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/10">
                            <div className="px-6 md:px-12 py-24 group hover:bg-black/5 transition-all duration-500 cursor-crosshair overflow-hidden">
                                <div className="group-hover:scale-[1.02] transition-transform duration-700 ease-out origin-left">
                                    <h2 ref={addToRefs} className={`text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 ${revealClass}`}>Radical<br/>Creativity</h2>
                                    <p ref={addToRefs} className={`text-lg md:text-xl text-black/60 max-w-md leading-relaxed ${revealClass} delay-100`}>
                                        We don't provide generic solutions. Our creative philosophy is rooted in strategic storytelling to streamline brand authority and amplify revenue.
                                    </p>
                                </div>
                            </div>
                            <div className="px-6 md:px-12 py-24 group hover:bg-black/5 transition-all duration-500 cursor-crosshair overflow-hidden">
                                <div className="group-hover:scale-[1.02] transition-transform duration-700 ease-out origin-left">
                                    <h2 ref={addToRefs} className={`text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 ${revealClass}`}>Autonomous<br/>Production</h2>
                                    <p ref={addToRefs} className={`text-lg md:text-xl text-black/60 max-w-md leading-relaxed ${revealClass} delay-100`}>
                                        By merging radical aesthetics with high-level AI integration, we build creative ecosystems exactly as envisioned—with zero technical shortcuts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MARQUEE SECTION */}
                <div className="py-24 overflow-hidden border-t border-b border-black/10 bg-black text-white relative z-10">
                    <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                        <div className="mb-8 text-xs font-mono uppercase tracking-widest text-white/40">Creative Frontiers</div>
                    </div>
                    <div className="relative flex whitespace-nowrap overflow-hidden">
                        <div className="animate-marquee flex gap-16 md:gap-32 text-6xl md:text-9xl font-medium tracking-tighter uppercase px-8">
                            <span>E-Commerce</span>
                            <span className="text-white/30">Fintech</span>
                            <span>AI SaaS</span>
                            <span className="text-white/30">Strategic Branding</span>
                            <span>Social Ecosystems</span>
                            <span className="text-white/30">Global Media</span>
                        </div>
                    </div>
                </div>

                <div className="px-6 md:px-12 max-w-[1600px] mx-auto py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 bg-white">
                    <div className="lg:col-span-8">
                        <h2 ref={addToRefs} className={`text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-12 ${revealClass}`}>
                            Brand<br/><span className="text-black/30">Authority</span>
                        </h2>
                        <p ref={addToRefs} className={`text-xl md:text-3xl leading-relaxed font-light text-black/80 ${revealClass} delay-100`}>
                            The only metric that matters in a brand is the authority felt during interaction. We empower emerging and established brands to dominate the market through precise creative identity.
                        </p>
                    </div>
                </div>

                <div className="px-6 md:px-12 max-w-[1600px] mx-auto py-24 border-t border-black/10 bg-white">
                    <div className="flex flex-col md:flex-row justify-between gap-12">
                        <h3 ref={addToRefs} className={`text-2xl font-medium uppercase tracking-tight ${revealClass}`}>Creative Direction & <br/> AI Strategy</h3>
                        <p ref={addToRefs} className={`text-xl md:text-2xl text-black/60 max-w-3xl leading-relaxed ${revealClass} delay-100`}>
                            Building digital ecosystems from zero is a precision team effort. Every specialist brings cutting-edge creative innovation to hit aggressive market targets.
                        </p>
                    </div>
                </div>

                <div className="border-t border-black/10 bg-white">
                    <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24">
                        <h4 className="text-sm font-mono text-black/40 uppercase tracking-widest mb-12">Agency Capabilities</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
                            {capabilitiesData.map((cap, i) => (
                                <div 
                                    key={i} 
                                    ref={addToRefs} 
                                    className={`py-6 border-b border-black/10 flex items-center justify-between group cursor-pointer ${revealClass}`} 
                                    style={{transitionDelay: `${i*50}ms`}} 
                                    onMouseEnter={() => setCursorHovering(true)} 
                                    onMouseLeave={() => setCursorHovering(false)}
                                    onClick={() => setActiveCapability(cap)}
                                >
                                    <span className="text-2xl md:text-3xl tracking-tight group-hover:pl-4 transition-all duration-300">{cap.title}</span>
                                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-[#050505] text-white py-32 border-b border-white/5">
                    <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-32">
                        <div ref={addToRefs} className={`${revealClass}`}>
                            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-tight mb-8 text-white/90">
                                We build stable infrastructure for the creative age.
                            </h2>
                            <p className="text-xl text-white/50 max-w-4xl leading-relaxed">
                                Developing global-standard creative assets since 2024. We bring vision to life and create brand equity that delivers measurable impact.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-white/10 pt-16">
                            <div>
                                <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-4">Agency Philosophy</h3>
                            </div>
                            <div>
                                <p ref={addToRefs} className={`text-xl md:text-2xl leading-relaxed font-light text-white/80 ${revealClass}`}>
                                    At Kreavity Works, producers work alongside AI strategists and creative directors. We do not compromise. We are driven by high-impact design that powers productivity and increases market share. Our expertise is remarkable, yet we always strive to outperform our previous achievements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
                @keyframes modalPopElastic {
                    0% { transform: scale(0.9) translateY(40px); opacity: 0; }
                    60% { transform: scale(1.02) translateY(0); opacity: 1; }
                    100% { transform: scale(1) translateY(0); opacity: 1; }
                }
                .animate-modal-pop-elastic {
                    animation: modalPopElastic 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
                }
                @keyframes fadeIn {
                    0% { opacity: 0; backdrop-filter: blur(0px); }
                    100% { opacity: 1; backdrop-filter: blur(16px); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default WorkflowPage;