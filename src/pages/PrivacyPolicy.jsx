import React, { useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = ({ setCursorHovering, navigateTo }) => {
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

    const revealClass = "opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";

    return (
        <div className="pt-32 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen bg-white text-black">
            <button 
                onClick={() => navigateTo('home')} 
                className={`flex items-center gap-2 text-black/50 hover:text-black transition-colors mb-16 group ${revealClass}`} 
                onMouseEnter={() => setCursorHovering(true)} 
                onMouseLeave={() => setCursorHovering(false)}
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
            </button>
            
            <article className="prose prose-lg max-w-4xl">
                <div ref={addToRefs} className={`${revealClass} mb-12`}>
                    <h1 className="text-5xl md:text-6xl font-medium tracking-tighter leading-tight mb-4">Privacy Policy</h1>
                    <p className="text-black/50">Effective date: December 31, 2025</p>
                </div>

                <div className="space-y-12">
                    <section ref={addToRefs} className={`${revealClass} delay-100`}>
                        <p className="text-xl leading-relaxed">Kreavity Works ("us", "we", or "our") operates the https://kreavityworks.com/ website (the "Service"). This Privacy Policy describes how we collect, use, disclose, and safeguard your personal data when you visit and use our Service, and your rights in relation to that data.</p>
                    </section>

                    <section ref={addToRefs} className={`${revealClass} delay-150`}>
                        <h2 className="text-2xl font-medium mb-4">Information we collect</h2>
                        <div className="ml-4 space-y-4">
                            <div>
                                <h3 className="text-lg font-medium mb-2">1.1 Personal Data</h3>
                                <p className="text-black/70">You may provide us with certain personal data, e.g.:</p>
                                <ul className="list-disc ml-5 text-black/70 mt-2">
                                    <li>Name, email address</li>
                                    <li>Company name, position</li>
                                    <li>Other contact data submitted by you</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">1.2 Usage data</h3>
                                <p className="text-black/70">We automatically collect usage data when you use our Service, including:</p>
                                <ul className="list-disc ml-5 text-black/70 mt-2">
                                    <li>IP address, browser type and version</li>
                                    <li>Pages you visited, timestamps, duration</li>
                                    <li>Device identifiers, operating system version</li>
                                    <li>Clicks, interactions, navigation paths</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">1.3 Cookies & tracking technologies</h3>
                                <p className="text-black/70">We use cookies, web beacons, tags, scripts, and similar tracking technologies to track activity and collect information:</p>
                                <ul className="list-disc ml-5 text-black/70 mt-2">
                                    <li>Session cookies</li>
                                    <li>Preference cookies</li>
                                    <li>Security cookies</li>
                                </ul>
                                <p className="text-black/70 mt-2">You can set your browser to refuse cookies or to notify you — but this may limit your use of some features.</p>
                            </div>
                        </div>
                    </section>

                    <section ref={addToRefs} className={`${revealClass} delay-200`}>
                        <h2 className="text-2xl font-medium mb-4">How we use data</h2>
                        <p className="text-black/70 mb-4">We use collected data for purposes such as:</p>
                        <ul className="list-disc ml-5 text-black/70 mb-4">
                            <li>Providing, operating, and maintaining the Service</li>
                            <li>Improving and personalizing the Service</li>
                            <li>Communicating with you (notifications, support)</li>
                            <li>Analytics and monitoring usage</li>
                            <li>Preventing fraud, abuse, or technical issues</li>
                        </ul>
                    </section>
                </div>
            </article>
        </div>
    );
};

export default PrivacyPolicy;