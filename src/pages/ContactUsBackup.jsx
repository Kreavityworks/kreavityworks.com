import React, { useState, useEffect, useRef, useMemo } from 'react';
import { X, Check, ArrowRight, Loader2, ChevronDown, Search, Paperclip, Trash2, Plus, Globe } from 'lucide-react';

// --- DATA SOURCES ---
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

const allProjects = [
    { id: "01", title: "UI/UX Design" },
    { id: "02", title: "App Development" },
    { id: "03", title: "Brand Identity" },
    { id: "04", title: "Motion Graphic" },
    { id: "05", title: "AI Tools Development" },
    { id: "06", title: "Social Media" },
    { id: "07", title: "E-Commerce" },
    { id: "08", title: "Platform Banner & Poster" },
    { id: "09", title: "Landing Page" },
    { id: "10", title: "Material Print Design" }
];

// --- INTERNAL COMPONENT: INFINITE CALENDAR ---
const InfiniteCalendar = ({ selectedDate, onSelect }) => {
    const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const currentYear = today.getFullYear();
    
    const generateMonths = (startYear, count) => {
        const months = [];
        for (let i = 0; i < count; i++) {
            const date = new Date(startYear, i, 1);
            months.push(date);
        }
        return months;
    };

    const months = generateMonths(currentYear, 12);

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const days = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
        return { days, firstDay };
    };

    return (
        <div className="bg-white border border-black/10 rounded-2xl w-full max-w-md h-80 overflow-y-auto overflow-x-hidden relative scrollbar-hide">
            <div className="sticky top-0 bg-white/95 backdrop-blur z-10 p-4 border-b border-black/5">
                 <div className="grid grid-cols-7 gap-1">
                    {daysOfWeek.map(d => <span key={d} className="text-center text-xs font-mono text-black/40 uppercase">{d}</span>)}
                </div>
            </div>
            <div className="p-4 space-y-8">
                {months.map((monthDate, index) => {
                    const year = monthDate.getFullYear();
                    const month = monthDate.getMonth();
                    const { days, firstDay } = getDaysInMonth(monthDate);
                    const monthName = monthDate.toLocaleString('default', { month: 'long', year: 'numeric' });
                    const emptySlots = Array(firstDay).fill(null);
                    const daySlots = Array.from({ length: days }, (_, i) => i + 1);

                    return (
                        <div key={index}>
                            <h4 className="text-sm font-medium mb-4 sticky top-12 bg-white/80 backdrop-blur w-fit px-2 py-1 rounded">{monthName}</h4>
                            <div className="grid grid-cols-7 gap-2">
                                {emptySlots.map((_, i) => <div key={`empty-${i}`} />)}
                                {daySlots.map(day => {
                                    const dateStr = `${monthName} ${day}`;
                                    const isSelected = selectedDate === dateStr;
                                    const cellDate = new Date(year, month, day);
                                    const isDisabled = cellDate <= today; 

                                    return (
                                        <button 
                                            key={day}
                                            disabled={isDisabled}
                                            onClick={(e) => { e.preventDefault(); onSelect(dateStr); }}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all duration-200 
                                                ${isDisabled ? 'text-black/10 cursor-not-allowed hover:bg-transparent' : 
                                                  isSelected ? 'bg-black text-white shadow-md scale-110' : 'text-black/70 hover:bg-black/5 hover:text-black'}`}
                                        >
                                                {day}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// --- INTERNAL COMPONENT: PREMIUM SELECT BUTTON ---
const PremiumSelectButton = ({ label, isSelected, onClick, error, onMouseEnter, onMouseLeave, className }) => {
    return (
        <button
            onClick={(e) => { e.preventDefault(); onClick(); }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`relative overflow-hidden border text-sm transition-all duration-300 rounded-full group px-4 py-3
                ${isSelected 
                    ? 'border-black' 
                    : error 
                        ? 'border-red-200 bg-red-50/10' 
                        : 'border-black/10'
                }
                ${className}
            `}
        >
             <span className={`absolute inset-0 bg-black transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] 
                ${isSelected ? 'translate-y-0' : 'translate-y-[100%] group-hover:translate-y-0'}
             `}></span>
             
             <span className={`relative z-10 transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap
                ${isSelected ? 'text-white' : 'text-black group-hover:text-white'}
                ${error && !isSelected ? 'text-red-500' : ''}
             `}>
                {label}
             </span>
        </button>
    );
};

// --- MAIN CONTACT US COMPONENT ---
const ContactUs = ({ isOpen, onClose, setCursorHovering, initialInterest = null, navigateTo }) => {
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [selectedBudget, setSelectedBudget] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [attachedFiles, setAttachedFiles] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    
    // Country Logic
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
    const [countrySearch, setCountrySearch] = useState("");
    
    const filteredCountries = useMemo(() => {
        return countries.filter(c => c.name.toLowerCase().includes(countrySearch.toLowerCase()) || c.code.includes(countrySearch));
    }, [countrySearch]);

    const [formData, setFormData] = useState({ name: '', email: '', phone: '', details: '' });
    const [errors, setErrors] = useState({});

    // Refs
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const fileInputRef = useRef(null);
    const countryDropdownRef = useRef(null);

    // Click Outside Dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
                setIsCountryDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handle Initial Interest
    useEffect(() => {
        if (initialInterest && isOpen) {
            if (!selectedInterests.includes(initialInterest)) {
                setSelectedInterests(prev => [...prev, initialInterest]);
            }
        }
    }, [initialInterest, isOpen]);

    if (!isOpen) return null;

    const toggleInterest = (id) => {
        if (selectedInterests.includes(id)) {
            setSelectedInterests(selectedInterests.filter(i => i !== id));
        } else {
            setSelectedInterests([...selectedInterests, id]);
        }
    };

    const budgets = ["1K - 5K", "5K - 10K", "10K - 25K", "25K - 50K", "50K - 100K"];

    const handleBudgetSelect = (budget) => {
        setSelectedBudget(budget);
    }

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const newFiles = Array.from(e.target.files);
            setAttachedFiles(prev => [...prev, ...newFiles]);
            e.target.value = '';
        }
    };

    const removeFile = (index) => {
        setAttachedFiles(prev => prev.filter((_, i) => i !== index));
    };

    const triggerFileUpload = () => {
        fileInputRef.current.click();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // MAINTENANCE ALERT LOGIC
    const handleSubmit = () => {
        alert(
            "Our automated submission system is currently undergoing scheduled maintenance. \n\n" +
            "Please contact us directly via email at: projects@kreavityworks.com \n\n" +
            "We look forward to building your vision."
        );
    };

    return (
        <div className="fixed inset-0 z-[11000] flex items-center justify-center p-0 md:p-6 animate-overlay-show">
            <div className="absolute inset-0 bg-white/60 backdrop-blur-xl animate-fade-in" onClick={onClose}></div>
            <div className="relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-5xl bg-white shadow-2xl rounded-none md:rounded-3xl overflow-hidden flex flex-col animate-modal-pop-elastic border border-black/5">
                
                <div className="sticky top-0 bg-white/80 backdrop-blur-md z-20 px-6 md:px-12 py-6 flex justify-between items-center border-b border-black/5">
                    <h2 className="text-2xl font-medium tracking-tighter">Start a Project</h2>
                    <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors group">
                        <X size={24} className="group-hover:rotate-90 transition-transform duration-300"/>
                    </button>
                </div>
                
                <div className="p-6 md:p-12 space-y-16 overflow-y-auto overflow-x-hidden h-full">
                    {/* SECTION 1: INTERESTS */}
                    <div ref={section1Ref} className="space-y-6">
                        <label className="text-sm font-mono uppercase tracking-widest block text-black/40">01. I'm interested in...</label>
                        <div className="flex flex-wrap gap-2">
                            {allProjects.map((project) => (
                                <PremiumSelectButton
                                    key={project.id}
                                    label={project.title}
                                    isSelected={selectedInterests.includes(project.title)}
                                    onClick={() => toggleInterest(project.title)}
                                    className="flex-grow md:flex-grow-0" 
                                    onMouseEnter={() => setCursorHovering(true)}
                                    onMouseLeave={() => setCursorHovering(false)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* SECTION 2: DETAILS */}
                    <div ref={section2Ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                        <div className="space-y-6">
                            <label className="text-sm font-mono uppercase tracking-widest block text-black/40">02. Your Details</label>
                            <input name="name" value={formData.name} onChange={handleInputChange} type="text" placeholder="Your Name" className="w-full text-2xl md:text-3xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent placeholder:text-black/20" />
                            <input name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="Email Address" className="w-full text-2xl md:text-3xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent placeholder:text-black/20" />
                            
                            <div className="space-y-1 flex items-end gap-4 relative">
                                <div className="w-1/3 relative" ref={countryDropdownRef}>
                                    <button onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)} className="w-full text-left border-b border-black/10 pb-4 text-2xl md:text-3xl flex items-center gap-2 truncate">
                                        <span className="text-black">{selectedCountry.code}</span>
                                        <ChevronDown size={16} className="opacity-50" />
                                    </button>
                                    {isCountryDropdownOpen && (
                                        <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl border border-black/5 z-50 mt-2 max-h-60 overflow-y-auto">
                                            {filteredCountries.map(country => (
                                                <button key={country.code + country.name} onClick={() => { setSelectedCountry(country); setIsCountryDropdownOpen(false); }} className="w-full text-left px-4 py-3 hover:bg-black/5 text-sm flex justify-between items-center group">
                                                    <span>{country.name}</span>
                                                    <span className="text-black/40 group-hover:text-black font-mono">{country.code}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <input name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="Phone Number" className="w-2/3 text-2xl md:text-3xl border-b border-black/10 pb-4 outline-none focus:border-black bg-transparent placeholder:text-black/20" />
                            </div>
                        </div>

                        {/* SECTION 3: PROJECT DETAILS */}
                        <div ref={section3Ref} className="space-y-6">
                            <label className="text-sm font-mono uppercase tracking-widest block text-black/40">03. Project Details</label>
                            <textarea name="details" value={formData.details} onChange={handleInputChange} placeholder="Tell us about the project..." rows={5} className="w-full text-xl md:text-2xl border-b border-black/10 pb-4 outline-none focus:border-black resize-none bg-transparent placeholder:text-black/20"></textarea>
                        </div>
                    </div>

                    {/* SECTION 4: BUDGET */}
                    <div ref={section4Ref} className="space-y-6">
                        <label className="text-sm font-mono uppercase tracking-widest block text-black/40">04. Project Budget (USD)</label>
                        <div className="flex flex-wrap gap-2">
                            {budgets.map((budget) => (
                                <PremiumSelectButton
                                    key={budget}
                                    label={budget}
                                    isSelected={selectedBudget === budget}
                                    onClick={() => handleBudgetSelect(budget)}
                                    className="flex-grow md:flex-grow-0"
                                    onMouseEnter={() => setCursorHovering(true)}
                                    onMouseLeave={() => setCursorHovering(false)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* SECTION 5 & 6 (OPTIONAL) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
                        <div className="space-y-6 h-full">
                             <label className="text-sm font-mono text-black/40 uppercase tracking-widest block">05. Attachments <span className="text-black/20 text-xs normal-case tracking-normal">(Optional)</span></label>
                             <input ref={fileInputRef} type="file" multiple accept=".jpg,.jpeg,.png,.pdf" className="hidden" onChange={handleFileChange} />
                             {attachedFiles.length === 0 ? (
                                 <div onClick={triggerFileUpload} className="border border-dashed border-black/20 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-black/5 transition-colors group h-80">
                                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-black/50 group-hover:scale-110 transition-transform"><Paperclip size={20}/></div>
                                    <div className="text-center">
                                        <span className="text-sm text-black/60 block font-medium">Click to upload files</span>
                                    </div>
                                 </div>
                             ) : (
                                 <div className="space-y-4 h-80 overflow-y-auto">
                                      {attachedFiles.map((file, index) => (
                                          <div key={index} className="flex items-center justify-between p-4 bg-neutral-50 border border-black/5 rounded-xl">
                                              <span className="text-sm font-medium text-black/80 truncate">{file.name}</span>
                                              <button onClick={() => removeFile(index)} className="p-2 text-black/30 hover:text-red-500"><Trash2 size={16} /></button>
                                          </div>
                                      ))}
                                 </div>
                             )}
                        </div>
                        <div className="space-y-6 h-full">
                            <label className="text-sm font-mono text-black/40 uppercase tracking-widest block">06. Schedule a Call <span className="text-black/20 text-xs normal-case tracking-normal">(Optional)</span></label>
                            <InfiniteCalendar selectedDate={selectedDate} onSelect={setSelectedDate} />
                        </div>
                    </div>
                </div>

                <div className="sticky bottom-0 bg-white/80 backdrop-blur-md px-6 md:px-12 py-6 border-t border-black/5 flex justify-between items-center z-20">
                    <img src="/brand/logo.png" alt="Logo" className="h-8 w-auto object-contain opacity-50 grayscale hidden md:block" />
                    <button onClick={handleSubmit} className="w-full md:w-auto bg-black text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl hover:scale-[1.02] active:scale-95">
                        Submit Proposal <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;