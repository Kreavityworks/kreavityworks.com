import React, { useState, useEffect, useRef, useMemo } from 'react';
import { X, Check, Loader2, ArrowRight, ChevronDown, Search } from 'lucide-react';

// --- COUNTRY DATA ---
const countries = [
    { name: "Indonesia", code: "+62" },
    { name: "United States", code: "+1" },
    { name: "United Kingdom", code: "+44" },
    { name: "Singapore", code: "+65" },
    { name: "Australia", code: "+61" },
    { name: "Japan", code: "+81" },
    { name: "Germany", code: "+49" },
    { name: "Malaysia", code: "+60" },
    { name: "China", code: "+86" },
    { name: "India", code: "+91" },
    { name: "France", code: "+33" },
    { name: "Canada", code: "+1" },
    { name: "South Korea", code: "+82" },
    { name: "Vietnam", code: "+84" },
    { name: "Thailand", code: "+66" },
];

const JoinTheNetwork = ({ isOpen, onClose, setCursorHovering, selectedCountry: propCountry, setSelectedCountry: propSetCountry }) => {
    // Handle internal state if props are not provided (Standalone Mode Safe)
    const [internalCountry, setInternalCountry] = useState(countries[0]);
    const activeCountry = propCountry || internalCountry;
    const setActiveCountry = propSetCountry || setInternalCountry;

    const [selectedType, setSelectedType] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', link: '', intro: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    
    // Country Dropdown Logic
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
    const [countrySearch, setCountrySearch] = useState("");
    const countryDropdownRef = useRef(null);

    const filteredCountries = useMemo(() => {
        return countries.filter(c => c.name.toLowerCase().includes(countrySearch.toLowerCase()) || c.code.includes(countrySearch));
    }, [countrySearch]);

    // INIT EMAILJS
    useEffect(() => {
        if (isOpen) {
            if (window.emailjs) {
                window.emailjs.init("2hhIuPTWeJ0RUPxPo");
                return;
            }
            const script = document.createElement('script');
            script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
            script.async = true;
            script.onload = () => {
                console.log("Partner System Ready");
                window.emailjs.init("2hhIuPTWeJ0RUPxPo");
            };
            document.body.appendChild(script);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
                setIsCountryDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.email || !selectedType || !formData.link) {
            alert("Please fill in all required fields.");
            return;
        }

        setIsSubmitting(true);
        const mailSystem = window.emailjs;

        if (mailSystem) {
            mailSystem.send(
                'service_7ow5sqa',
                'template_ia9upwv',
                {
                    from_name: formData.name,
                    user_email: formData.email,
                    phone_number: `${activeCountry.code} ${formData.phone}`,
                    partner_type: selectedType,
                    region_location: activeCountry.name,
                    portfolio_url: formData.link,
                    message: formData.intro,
                    company_link: "https://kreavityworks.com/partner",
                    year: new Date().getFullYear()
                },
                '2hhIuPTWeJ0RUPxPo'
            ).then(() => {
                setIsSubmitting(false);
                setShowSuccess(true);
            }).catch((err) => {
                setIsSubmitting(false);
                alert("Failed to send application. Please try again.");
                console.error("EmailJS Error:", err);
            });
        } else {
            setIsSubmitting(false);
            alert("System connecting... please try again in 3 seconds.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[11000] flex items-center justify-center p-0 md:p-6 animate-overlay-show">
            <div className="absolute inset-0 bg-white/60 backdrop-blur-xl animate-fade-in" onClick={onClose}></div>
            <div className="relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-5xl bg-white shadow-2xl rounded-none md:rounded-3xl overflow-hidden flex flex-col animate-modal-pop-elastic border border-black/5">
                
                {showSuccess ? (
                    <div className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500 p-8 text-center">
                        <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center text-white mb-8 shadow-2xl animate-bounce">
                            <Check size={48} strokeWidth={3} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-4">Application Sent.</h2>
                        <p className="text-xl text-black/60 max-w-md mb-12 leading-relaxed">
                            Welcome to the network, {formData.name}. We will review your profile and contact you for the next steps.
                        </p>
                        <button onClick={onClose} className="bg-black text-white px-10 py-4 rounded-full text-lg font-medium hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group shadow-xl">
                            Close <X size={20}/>
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="sticky top-0 bg-white/80 backdrop-blur-md z-20 px-6 md:px-12 py-6 flex justify-between items-center border-b border-black/5">
                            <h2 className="text-2xl font-medium tracking-tighter">Become a Partner</h2>
                            <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors group">
                                <X size={24} className="group-hover:rotate-90 transition-transform duration-300"/>
                            </button>
                        </div>
                        <div className="p-6 md:p-12 space-y-12 overflow-y-auto overflow-x-hidden h-full">
                            <div className="space-y-6">
                                <label className="text-sm font-mono uppercase tracking-widest block text-black/40">01. Select Partner Type</label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {['Independent Specialist', 'Strategic Affiliate', 'Agency Partner'].map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setSelectedType(type)}
                                            className={`p-6 border rounded-xl text-left transition-all duration-300 hover:border-black group ${selectedType === type ? 'border-black bg-black text-white' : 'border-black/10'}`}
                                            onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}
                                        >
                                            <h3 className="text-lg font-medium mb-2">{type}</h3>
                                            <p className={`text-sm ${selectedType === type ? 'text-white/70' : 'text-black/50'}`}>
                                                {type === 'Independent Specialist' && 'For freelancers & experts.'}
                                                {type === 'Strategic Affiliate' && 'For connectors & agents.'}
                                                {type === 'Agency Partner' && 'White-label infrastructure.'}
                                            </p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <label className="text-sm font-mono uppercase tracking-widest block text-black/40">02. Personal Info</label>
                                    <input name="name" value={formData.name} onChange={handleInputChange} type="text" placeholder="Full Name" className="w-full text-xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent transition-colors placeholder:text-black/20" />
                                    <input name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="Email Address" className="w-full text-xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent transition-colors placeholder:text-black/20" />
                                    
                                    <div className="relative" ref={countryDropdownRef}>
                                        <button onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)} className="w-full text-left border-b border-black/10 pb-4 text-xl focus:border-black flex items-center gap-2 transition-colors">
                                            <span>{activeCountry.code}</span> <ChevronDown size={16} className="opacity-50" />
                                            <input name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="Phone Number" className="w-full bg-transparent outline-none ml-2 placeholder:text-black/20" onClick={(e) => e.stopPropagation()} />
                                        </button>
                                        {isCountryDropdownOpen && (
                                            <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl border border-black/5 z-50 mt-2 max-h-60 overflow-hidden flex flex-col">
                                                <div className="p-2 border-b border-black/5">
                                                    <div className="flex items-center gap-2 bg-neutral-100 rounded px-2 py-1">
                                                        <Search size={14} className="opacity-50"/>
                                                        <input type="text" placeholder="Search..." className="w-full bg-transparent text-sm outline-none" value={countrySearch} onChange={(e) => setCountrySearch(e.target.value)} autoFocus/>
                                                    </div>
                                                </div>
                                                <div className="overflow-y-auto flex-1">
                                                    {filteredCountries.map(c => (
                                                        <button key={c.code + c.name} onClick={() => { setActiveCountry(c); setIsCountryDropdownOpen(false); }} className="w-full text-left px-4 py-2 hover:bg-black/5 text-sm flex justify-between">
                                                            <span>{c.name}</span><span className="text-black/40">{c.code}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <label className="text-sm font-mono uppercase tracking-widest block text-black/40">03. Professional Profile</label>
                                    <input name="link" value={formData.link} onChange={handleInputChange} type="text" placeholder="Portfolio / LinkedIn URL" className="w-full text-xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent transition-colors placeholder:text-black/20" />
                                    <textarea name="intro" value={formData.intro} onChange={handleInputChange} placeholder="Brief Introduction / Vision..." rows={3} className="w-full text-xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent resize-none transition-colors placeholder:text-black/20"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="sticky bottom-0 bg-white/80 backdrop-blur-md px-6 md:px-12 py-6 border-t border-black/5 flex justify-end z-20">
                            <button onClick={handleSubmit} disabled={isSubmitting} className={`bg-black text-white px-12 py-4 rounded-full text-lg font-medium hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 shadow-xl ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`} onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>
                                {isSubmitting ? <><Loader2 size={24} className="animate-spin"/> Processing...</> : <>Join Network <ArrowRight size={20}/></>}
                            </button>
                        </div>
                    </>
                )}
            </div>
            
            <style>{`
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
                .animate-overlay-show {
                    animation: fadeIn 0.4s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default JoinTheNetwork;