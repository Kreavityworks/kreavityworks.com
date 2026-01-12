import React, { useEffect, useRef } from 'react';
import { ArrowRight, Briefcase, Network, Building2 } from 'lucide-react';

const BecomePartnerAgent = ({ setCursorHovering }) => {
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

    // MAINTENANCE ALERT LOGIC
    const handleJoinNetwork = () => {
        alert(
            "PARTNERSHIP NOTICE: \n\n" +
            "Our Partner Onboarding system is currently undergoing scheduled maintenance to improve our global network infrastructure. \n\n" +
            "Please send your partnership proposal directly to our management at: projects@kreavityworks.com \n\n" +
            "We look forward to collaborating with you."
        );
    };

    const revealClass = "opacity-0 translate-y-12 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform";

    return (
        <div className="min-h-screen bg-white text-black pt-32 pb-32">
            <div className="px-6 md:px-12 max-w-[1600px] mx-auto">
                <div className="min-h-[60vh] flex flex-col justify-center mb-24">
                    <h5 ref={addToRefs} className={`text-sm text-black/50 mb-6 uppercase tracking-[0.2em] ${revealClass}`}>The Growth Catalyst Program</h5>
                    <h1 ref={addToRefs} className={`text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[1] mb-8 ${revealClass} delay-100`}>
                        Empowering <br/><span className="text-black/40">Digital Architects.</span>
                    </h1>
                    <p ref={addToRefs} className={`text-xl md:text-2xl text-black/70 max-w-3xl leading-relaxed mb-12 ${revealClass} delay-200`}>
                        Kreavity Works opens doors for high-performance individuals to join our global ecosystem as Strategic Partners. Access elite projects, world-class AI infrastructure, and limitless commissions.
                    </p>
                    <div ref={addToRefs} className={`${revealClass} delay-300`}>
                        <button 
                            onClick={handleJoinNetwork} 
                            className="bg-black text-white px-10 py-5 rounded-full text-lg font-medium hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 group shadow-xl" 
                            onMouseEnter={() => setCursorHovering(true)} 
                            onMouseLeave={() => setCursorHovering(false)}
                        >
                            Join the Network <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-black/10 pt-24">
                    {[
                        { title: "Independent Specialist", sub: "Freelance", icon: <Briefcase size={32}/>, desc: "For experts (Designers, Developers, AI Strategists) who want to work on elite projects based on the 25 Global Implementation Principles." },
                        { title: "Strategic Affiliate", sub: "Project Agent", icon: <Network size={32}/>, desc: "For connectors with access to high-scale clients seeking exclusive commissions from every successfully executed project." },
                        { title: "Agency Partner", sub: "White Label", icon: <Building2 size={32}/>, desc: "For boutique agencies looking to leverage Kreavity Works' technical infrastructure for their clients, enabling scalability without operational overhead." }
                    ].map((item, index) => (
                        <div 
                            key={index} 
                            ref={addToRefs} 
                            className={`p-8 border border-black/5 rounded-2xl hover:border-black/20 hover:bg-neutral-50 transition-all duration-500 group ${revealClass}`} 
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="mb-6 p-4 bg-white rounded-full w-fit shadow-sm text-black/80 group-hover:text-black group-hover:scale-110 transition-all">{item.icon}</div>
                            <h4 className="text-xs font-mono uppercase tracking-widest text-black/40 mb-2">{item.sub}</h4>
                            <h3 className="text-2xl font-medium tracking-tight mb-4">{item.title}</h3>
                            <p className="text-black/60 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BecomePartnerAgent;