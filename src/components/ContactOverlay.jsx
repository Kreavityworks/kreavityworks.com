import React, { useState, useEffect, useRef, useMemo } from 'react';
import { X, Check, ArrowRight, Loader2, ChevronDown, Search, Paperclip, Trash2, Plus, Globe } from 'lucide-react';

// Import Visual Components & Data
import { InfiniteCalendar, PremiumSelectButton } from './UIComponents';
import { allProjects, countries } from '../constants';

const ContactOverlay = ({ isOpen, onClose, setCursorHovering, initialInterest = null, navigateTo }) => {
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [selectedBudget, setSelectedBudget] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [attachedFiles, setAttachedFiles] = useState([]);
    const [emailJsReady, setEmailJsReady] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    
    // Country Search Logic
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
    const [countrySearch, setCountrySearch] = useState("");
    
    const filteredCountries = useMemo(() => {
        return countries.filter(c => c.name.toLowerCase().includes(countrySearch.toLowerCase()) || c.code.includes(countrySearch));
    }, [countrySearch]);

    const [formData, setFormData] = useState({ name: '', email: '', phone: '', details: '' });
    const [errors, setErrors] = useState({});

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const fileInputRef = useRef(null);
    const countryDropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
                setIsCountryDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (initialInterest && isOpen) {
            if (!selectedInterests.includes(initialInterest)) {
                setSelectedInterests(prev => [...prev, initialInterest]);
            }
        }
    }, [initialInterest, isOpen]);

    useEffect(() => {
        if (isOpen) {
            if (window.emailjs) {
                window.emailjs.init("2hhIuPTWeJ0RUPxPo"); 
                setEmailJsReady(true);
                return;
            }
            const script = document.createElement('script');
            script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
            script.async = true;
            script.onload = () => {
                console.log("System Ready");
                window.emailjs.init("2hhIuPTWeJ0RUPxPo");
                setEmailJsReady(true); 
            };
            script.onerror = () => console.error("System connection issue");
            document.body.appendChild(script);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const toggleInterest = (id) => {
        if (selectedInterests.includes(id)) {
            setSelectedInterests(selectedInterests.filter(i => i !== id));
        } else {
            setSelectedInterests([...selectedInterests, id]);
        }
        if (errors.interests) setErrors(prev => ({ ...prev, interests: false }));
    };

    const budgets = ["1K - 5K", "5K - 10K", "10K - 25K", "25K - 50K", "50K - 100K"];

    const handleBudgetSelect = (budget) => {
        setSelectedBudget(budget);
        if (errors.budget) setErrors(prev => ({ ...prev, budget: false }));
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
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: false }));
    };

    const handleSubmit = () => {
        const newErrors = {}; 
        let firstErrorRef = null;

        if (selectedInterests.length === 0) {
            newErrors.interests = true;
            if (!firstErrorRef) firstErrorRef = section1Ref;
        }
        if (!formData.name.trim()) {
            newErrors.name = true;
            if (!firstErrorRef) firstErrorRef = section2Ref;
        }
        if (!formData.email.trim()) {
            newErrors.email = true;
            if (!firstErrorRef) firstErrorRef = section2Ref;
        } else if (!formData.email.includes("@")) { 
            newErrors.email = true;
            if (!firstErrorRef) firstErrorRef = section2Ref;
            alert("Please enter a valid email address."); 
        }
        
        if (!formData.phone.trim()) {
            newErrors.phone = true;
            if (!firstErrorRef) firstErrorRef = section2Ref;
        }

        if (!formData.details.trim()) {
            newErrors.details = true;
            if (!firstErrorRef) firstErrorRef = section3Ref;
        }
        if (!selectedBudget) {
            newErrors.budget = true;
            if (!firstErrorRef) firstErrorRef = section4Ref;
        }

        setErrors(newErrors);

        if (firstErrorRef && firstErrorRef.current) {
            firstErrorRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        if (!emailJsReady && !window.emailjs) {
            alert("Connecting to email server... please try again in 2 seconds.");
            return;
        }

        setIsSubmitting(true);

        const mailSystem = window.emailjs;
        
        const attachmentNames = attachedFiles.length > 0 
            ? attachedFiles.map(f => f.name).join(", ") 
            : "No attachments";

        if (mailSystem) {
            const sendAdmin = mailSystem.send(
                'service_7ow5sqa',  
                'template_ia9upwv',   
                {
                    from_name: formData.name,
                    user_email: formData.email,
                    phone_number: `${selectedCountry.code} ${formData.phone}`, 
                    region_location: selectedCountry.name, 
                    reply_to: formData.email, 
                    services: selectedInterests.join(", "),
                    budget: selectedBudget,
                    message: formData.details,
                    attachments: attachmentNames,
                    schedule_date: selectedDate || "Not Scheduled",
                    company_link: "https://kreavityworks.com",
                    year: new Date().getFullYear()
                },
                '2hhIuPTWeJ0RUPxPo'
            );

            const sendAutoReply = mailSystem.send(
                'service_7ow5sqa',  
                'template_k7f2iag',   
                {
                    from_name: formData.name,
                    email: formData.email, 
                },
                '2hhIuPTWeJ0RUPxPo'    
            );

            Promise.all([sendAdmin, sendAutoReply])
                .then(() => {
                    setIsSubmitting(false); 
                    setShowSuccess(true);      
                })
                .catch((err) => {
                    setIsSubmitting(false); 
                    alert("Failed to send proposal. Please check your internet connection.");
                    console.error("EmailJS Error:", err);
                });
        }
    };

    const handleSuccessClose = () => {
        setShowSuccess(false);
        onClose(); 
        if(navigateTo) navigateTo('home'); 
    };

    return (
        <div className="fixed inset-0 z-[11000] flex items-center justify-center p-0 md:p-6 animate-overlay-show">
            <div className="absolute inset-0 bg-white/60 backdrop-blur-xl animate-fade-in" onClick={onClose}></div>
            <div className="relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-5xl bg-white shadow-2xl rounded-none md:rounded-3xl overflow-hidden flex flex-col animate-modal-pop-elastic border border-black/5">
                
                {showSuccess && (
                    <div className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500 p-8 text-center">
                        <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center text-white mb-8 shadow-2xl animate-bounce">
                            <Check size={48} strokeWidth={3} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-4 animate-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-backwards">Proposal Sent.</h2>
                        <p className="text-xl text-black/60 max-w-md mb-12 leading-relaxed animate-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-backwards">
                            Thank you, {formData.name}. We've received your brief and will analyze it with our 25 Global Principles. Expect a response within 24-48 hours.
                        </p>
                        <button 
                            onClick={handleSuccessClose}
                            className="bg-black text-white px-10 py-4 rounded-full text-lg font-medium hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group shadow-xl animate-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-backwards"
                            onMouseEnter={() => setCursorHovering(true)}
                            onMouseLeave={() => setCursorHovering(false)}
                        >
                            Back to Home <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                        </button>
                    </div>
                )}

                <div className="sticky top-0 bg-white/80 backdrop-blur-md z-20 px-6 md:px-12 py-6 flex justify-between items-center border-b border-black/5">
                    <h2 className="text-2xl font-medium tracking-tighter">Start a Project</h2>
                    <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors group">
                        <X size={24} className="group-hover:rotate-90 transition-transform duration-300"/>
                    </button>
                </div>
                <div className="p-6 md:p-12 space-y-16 overflow-y-auto overflow-x-hidden h-full">
                    {/* SECTION 1: INTERESTS */}
                    <div ref={section1Ref} className="space-y-6">
                        <label className={`text-sm font-mono uppercase tracking-widest block transition-colors ${errors.interests ? 'text-red-600 font-bold' : 'text-black/40'}`}>
                            01. I'm interested in... {errors.interests && <span className="normal-case ml-2 text-xs text-red-500">- This field is required</span>}
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {allProjects.map((project) => (
                                <PremiumSelectButton
                                    key={project.id}
                                    label={project.title}
                                    isSelected={selectedInterests.includes(project.title)}
                                    onClick={() => toggleInterest(project.title)}
                                    error={errors.interests}
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
                            <label className={`text-sm font-mono uppercase tracking-widest block transition-colors ${errors.name || errors.email || errors.phone ? 'text-red-600 font-bold' : 'text-black/40'}`}>
                                02. Your Details { (errors.name || errors.email || errors.phone) && <span className="normal-case ml-2 text-xs text-red-500">- This field is required</span>}
                            </label>
                            <div className="space-y-1">
                                <input 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    type="text" 
                                    placeholder="Your Name" 
                                    className={`w-full text-2xl md:text-3xl border-b pb-4 outline-none transition-colors bg-transparent
                                        ${errors.name ? 'border-red-500 placeholder:text-red-300' : 'border-black/10 focus:border-black placeholder:text-black/20'}`}
                                />
                            </div>
                            <div className="space-y-1">
                                <input 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    type="email" 
                                    placeholder="Email Address" 
                                    className={`w-full text-2xl md:text-3xl border-b pb-4 outline-none transition-colors bg-transparent
                                        ${errors.email ? 'border-red-500 placeholder:text-red-300' : 'border-black/10 focus:border-black placeholder:text-black/20'}`}
                                />
                            </div>
                            
                            <div className="space-y-1 flex items-end gap-4 relative">
                                <div className="w-1/3 relative" ref={countryDropdownRef}>
                                    <button 
                                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                        className="w-full text-left border-b border-black/10 pb-4 text-2xl md:text-3xl focus:border-black transition-colors flex items-center gap-2 truncate"
                                    >
                                        <span className="text-black">{selectedCountry.code}</span>
                                        <ChevronDown size={16} className="opacity-50" />
                                    </button>
                                    
                                    {isCountryDropdownOpen && (
                                        <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl border border-black/5 z-50 mt-2 max-h-60 overflow-hidden flex flex-col">
                                            <div className="p-3 border-b border-black/5 sticky top-0 bg-white">
                                                <div className="flex items-center gap-2 bg-neutral-100 rounded-lg px-3 py-2">
                                                    <Search size={14} className="opacity-50" />
                                                    <input 
                                                        type="text" 
                                                        placeholder="Search country..." 
                                                        className="bg-transparent outline-none text-sm w-full"
                                                        value={countrySearch}
                                                        onChange={(e) => setCountrySearch(e.target.value)}
                                                        autoFocus
                                                    />
                                                </div>
                                            </div>
                                            <div className="overflow-y-auto flex-1">
                                                {filteredCountries.map(country => (
                                                    <button 
                                                        key={country.code + country.name}
                                                        onClick={() => {
                                                            setSelectedCountry(country);
                                                            setIsCountryDropdownOpen(false);
                                                            setCountrySearch("");
                                                        }}
                                                        className="w-full text-left px-4 py-3 hover:bg-black/5 text-sm flex justify-between items-center group"
                                                    >
                                                        <span>{country.name}</span>
                                                        <span className="text-black/40 group-hover:text-black font-mono">{country.code}</span>
                                                    </button>
                                                ))}
                                                {filteredCountries.length === 0 && (
                                                    <div className="p-4 text-center text-xs text-black/40">No country found</div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="w-2/3">
                                    <input 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        type="tel" 
                                        placeholder="Phone Number" 
                                        className={`w-full text-2xl md:text-3xl border-b pb-4 outline-none transition-colors bg-transparent border-black/10 focus:border-black placeholder:text-black/20 ${errors.phone ? 'border-red-500 placeholder:text-red-300' : ''}`}
                                    />
                                </div>
                            </div>
                            <div className="text-xs text-black/40 mt-1 uppercase tracking-widest font-mono">
                                Region set to: {selectedCountry.name}
                            </div>
                        </div>

                        {/* SECTION 3: PROJECT DETAILS */}
                        <div ref={section3Ref} className="space-y-6">
                            <label className={`text-sm font-mono uppercase tracking-widest block transition-colors ${errors.details ? 'text-red-600 font-bold' : 'text-black/40'}`}>
                                03. Project Details {errors.details && <span className="normal-case ml-2 text-xs text-red-500">- This field is required</span>}
                            </label>
                            <textarea 
                                name="details"
                                value={formData.details}
                                onChange={handleInputChange}
                                placeholder="Tell us about the project..." 
                                rows={5}
                                className={`w-full text-xl md:text-2xl border-b pb-4 outline-none transition-colors resize-none bg-transparent
                                    ${errors.details ? 'border-red-500 placeholder:text-red-300' : 'border-black/10 focus:border-black placeholder:text-black/20'}`}
                            ></textarea>
                        </div>
                    </div>

                    {/* SECTION 4: BUDGET */}
                    <div ref={section4Ref} className="space-y-6">
                        <label className={`text-sm font-mono uppercase tracking-widest block transition-colors ${errors.budget ? 'text-red-600 font-bold' : 'text-black/40'}`}>
                            04. Project Budget (USD) {errors.budget && <span className="normal-case ml-2 text-xs text-red-500">- This field is required</span>}
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {budgets.map((budget) => (
                                <PremiumSelectButton
                                    key={budget}
                                    label={budget}
                                    isSelected={selectedBudget === budget}
                                    onClick={() => handleBudgetSelect(budget)}
                                    error={errors.budget}
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
                                 <div 
                                    onClick={triggerFileUpload}
                                    className="border border-dashed border-black/20 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-black/5 transition-colors group h-80"
                                    onMouseEnter={() => setCursorHovering(true)}
                                    onMouseLeave={() => setCursorHovering(false)}
                                >
                                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-black/50 group-hover:scale-110 transition-transform"><Paperclip size={20}/></div>
                                    <div className="text-center">
                                        <span className="text-sm text-black/60 block font-medium">Click to upload files</span>
                                        <span className="text-xs text-black/30 mt-1 block uppercase tracking-wide">(JPG, PNG, PDF available)</span>
                                    </div>
                                 </div>
                             ) : (
                                 <div className="space-y-4 h-80 overflow-y-auto">
                                      <div className="grid grid-cols-1 gap-3">
                                          {attachedFiles.map((file, index) => (
                                              <div key={index} className="flex items-center justify-between p-4 bg-neutral-50 border border-black/5 rounded-xl group hover:border-black/20 transition-colors">
                                                  <div className="flex items-center gap-3 overflow-hidden">
                                                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm text-black/40"><Paperclip size={14}/></div>
                                                      <span className="text-sm font-medium text-black/80 truncate max-w-[150px] md:max-w-[200px]">{file.name}</span>
                                                  </div>
                                                  <button onClick={() => removeFile(index)} className="p-2 text-black/30 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors" title="Remove file">
                                                      <Trash2 size={16} />
                                                  </button>
                                              </div>
                                          ))}
                                      </div>
                                      <button 
                                         onClick={triggerFileUpload}
                                         className="flex items-center gap-2 text-sm font-medium text-black hover:opacity-70 transition-opacity px-2 py-1"
                                      >
                                          <div className="w-5 h-5 rounded-full border border-black flex items-center justify-center"><Plus size={12}/></div>
                                          Add more file
                                      </button>
                                 </div>
                             )}
                        </div>
                        <div className="space-y-6 h-full">
                            <label className="text-sm font-mono text-black/40 uppercase tracking-widest block">06. Schedule a Call <span className="text-black/20 text-xs normal-case tracking-normal">(Optional)</span></label>
                            <InfiniteCalendar selectedDate={selectedDate} onSelect={setSelectedDate} />
                            <p className="text-xs text-black/40 flex items-center gap-2 justify-end">
                                <Globe size={12} />
                                Scheduling times adjusted to {selectedCountry.name} time.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="sticky bottom-0 bg-white/80 backdrop-blur-md px-6 md:px-12 py-6 border-t border-black/5 flex justify-between items-center z-20">
                    <img src="/brand/logo.png" alt="Logo" className="h-8 w-auto object-contain opacity-50 grayscale hidden md:block" />
                    <button 
                        onClick={handleSubmit} 
                        disabled={isSubmitting}
                        className={`w-full md:w-auto bg-black text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl ${isSubmitting ? 'opacity-80 cursor-not-allowed scale-[0.98]' : 'hover:scale-[1.02] active:scale-95'}`}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 size={24} className="animate-spin" /> 
                                Sending...
                            </>
                        ) : (
                            <>
                                Submit Proposal <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactOverlay;