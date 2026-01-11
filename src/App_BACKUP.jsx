import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { 
  ArrowRight, Play, Menu, X, ArrowUpRight, Github, Instagram, 
  Phone, Mail, Eye, Zap, ShieldCheck, Cpu, Layers, ArrowLeft, 
  Copy, Check, Paperclip, Calendar as CalendarIcon, ChevronLeft, 
  ChevronRight, ArrowDown, Plus, Trash2, Loader2, Search, Globe, 
  Briefcase, Network, Building2 
} from 'lucide-react';

/**
 * KREAVITY WORKS DIGITAL ARCHITECTURE
 * ------------------------------------------------
 * Author: Gemini 3 Pro (The Precision Executor)
 * Version: 5.2.8 - Hero Video Integration & Logic Check
 */

// --- GLOBAL DATA SOURCE ---
const allProjects = [
    { 
        id: "01", 
        folder: "01-ui-ux", 
        title: "UI/UX Design", 
        category: "Digital Capability", 
        desc: "Crafting high-conversion interfaces that blend radical aesthetics with cognitive psychology to ensure seamless user journeys.", 
        detailedDesc: "We deconstruct user behavior to reconstruct digital experiences. By merging data-driven insights with avant-garde aesthetics, we create interfaces that don't just look good—they perform. Every interaction is calculated, every pixel has a purpose.", 
        alignRight: false,
        video: "https://v.ftcdn.net/05/63/68/07/700_F_563680753_c1eGZf8z8A8y8E9z.mp4",
        image: "/01-ui-ux/cover.png",
        fileExt: ".png"
    },
    { 
        id: "02", 
        folder: "02-app-dev",
        title: "App Development", 
        category: "Digital Capability", 
        desc: "Building robust, scalable, and secure mobile and web applications tailored to solve complex business challenges.", 
        detailedDesc: "From native iOS/Android to cross-platform React Native solutions. We engineer applications that are built for scale, security, and speed. Our code is clean, modular, and ready for future integrations.", 
        alignRight: true,
        image: "/02-app-dev/cover.png",
        fileExt: ".png"
    },
    { 
        id: "03", 
        folder: "03-brand-identity",
        title: "Brand Identity", 
        category: "Digital Capability", 
        desc: "Elevating brand authority through premium visual assets that command attention and establish market leadership.", 
        detailedDesc: "A brand is not just a logo; it's a belief system. We craft visual identities that resonate on a subconscious level, turning customers into loyal advocates through consistent, high-impact visual storytelling.", 
        alignRight: false,
        image: "/03-brand-identity/cover.png",
        fileExt: ".png"
    },
    { 
        id: "04", 
        folder: "04-motion-graphic",
        title: "Motion Graphic", 
        category: "Digital Capability", 
        desc: "Telling your brand story through high-fidelity motion graphics that capture the essence of your innovation.", 
        detailedDesc: "Static is dead. We bring brands to life through fluid, kinetic typography and immersive motion design. We turn complex ideas into digestible, captivating visual narratives.", 
        alignRight: true,
        image: "/04-motion-graphic/cover.png",
        fileExt: ".png"
    },
    { 
        id: "05", 
        folder: "05-ai-tools",
        title: "AI Tools Development", 
        category: "Digital Capability", 
        desc: "Integrating autonomous intelligence to automate workflows, predict user behavior, and drive unprecedented business efficiency.", 
        detailedDesc: "The future is autonomous. We build custom AI solutions that streamline operations, predict market trends, and personalize user experiences in real-time.", 
        alignRight: false,
        image: "/05-ai-tools/cover.jpg",
        fileExt: ".jpg"
    },
    { 
        id: "06", 
        folder: "06-social-media",
        title: "Social Media", 
        category: "Digital Capability", 
        desc: "Engineering strategic social presence through high-fidelity content systems that drive deep engagement and reinforce global brand dominance.", 
        detailedDesc: "We don't just post; we dominate. Our social strategies are built on algorithmic understanding and high-fidelity content production that stops the scroll and drives engagement.", 
        alignRight: true,
        image: "/06-social-media/cover.png",
        fileExt: ".png"
    },
    { 
        id: "07", 
        folder: "07-ecommerce",
        title: "E-Commerce", 
        category: "Digital Capability", 
        desc: "Constructing frictionless digital commerce ecosystems designed for maximum conversion and seamless cross-platform scalability.", 
        detailedDesc: "We build digital storefronts that sell. Focusing on speed, security, and conversion rate optimization (CRO), we create shopping experiences that are as seamless as they are beautiful.", 
        alignRight: false,
        image: "/07-ecommerce/cover.png",
        fileExt: ".png"
    },
    { 
        id: "08", 
        folder: "08-banner",
        title: "Platform Banner & Poster", 
        category: "Digital Capability", 
        desc: "Designing high-impact visual communications that command immediate attention across digital and physical platforms through elite art direction.", 
        detailedDesc: "In a world of noise, clarity is king. We design promotional assets that cut through the clutter, delivering your message with precision and high-impact art direction.", 
        alignRight: true,
        image: "/08-banner/cover.png",
        fileExt: ".png"
    },
    { 
        id: "09", 
        folder: "09-landing-page",
        title: "Landing Page", 
        category: "Digital Capability", 
        desc: "Building hyper-optimized, high-velocity entry points that combine persuasive storytelling with data-driven UX to maximize user acquisition.", 
        detailedDesc: "First impressions are everything. We design landing pages that are visually stunning and ruthlessly effective at converting visitors into leads. Speed, story, and structure in perfect harmony.", 
        alignRight: false,
        image: "/09-landing-page/cover.jpg",
        fileExt: ".jpg"
    },
    { 
        id: "10", 
        folder: "10-print",
        title: "Material Print Design", 
        category: "Digital Capability", 
        desc: "Extending brand authority into the physical realm through premium tactile assets that deliver a sophisticated and tangible brand experience.", 
        detailedDesc: "Digital is fleeting; print is forever. We bring the same level of digital precision to physical assets, creating business cards, brochures, and packaging that feel premium to the touch.", 
        alignRight: true,
        image: "/10-print/cover.jpg",
        fileExt: ".jpg"
    }
];

// --- HELPER: ROBUST BI-DIRECTIONAL IMAGE HANDLER ---
const handleImageError = (e) => {
    const img = e.target;
    const src = img.src;
    
    // Check if we've already attempted a fallback to prevent infinite loops
    if (img.getAttribute('data-tried-fallback') === 'true') {
        // If PNG failed, then JPG failed (or vice versa), try JPEG as last resort if it was JPG
        if (src.endsWith('.jpg')) {
             img.src = src.replace('.jpg', '.jpeg');
             img.setAttribute('data-tried-fallback', 'final'); // Mark as final attempt
             return;
        }
        // If all else fails, hide the image
        img.style.display = 'none';
        return;
    }

    img.setAttribute('data-tried-fallback', 'true');

    // Bi-directional switching
    if (src.includes('.png')) {
        img.src = src.replace('.png', '.jpg');
    } else if (src.includes('.jpg')) {
        img.src = src.replace('.jpg', '.png');
    } else if (src.includes('.jpeg')) {
        img.src = src.replace('.jpeg', '.png');
    } else {
        // Default fallback if extension isn't standard
        img.style.display = 'none';
    }
};

// --- COUNTRY DATA FOR SEARCH ---
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

// --- 3D INTERACTIVE SHAPE COMPONENT ---
const InteractiveShape = () => {
    const mountRef = useRef(null);
    const rendererRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const frameIdRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Cleanup previous canvas
        while (mountRef.current.firstChild) {
            mountRef.current.removeChild(mountRef.current.firstChild);
        }

        // Setup
        const width = mountRef.current.clientWidth || 1;
        const height = mountRef.current.clientHeight || 1;

        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000); 
        sceneRef.current = scene;

        // Camera
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.z = 6;
        cameraRef.current = camera;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Geometry: Torus Knot
        const geometry = new THREE.TorusKnotGeometry(0.85, 0.28, 150, 20); 
        
        // Material
        const material = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 0.1,
            roughness: 0.2,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
            emissive: 0x333333,
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Wireframe
        const wireGeo = new THREE.WireframeGeometry(geometry);
        const wireMat = new THREE.LineBasicMaterial({ 
            color: 0xffffff,
            transparent: true,
            opacity: 0.1
        });
        const wireMesh = new THREE.LineSegments(wireGeo, wireMat);
        mesh.add(wireMesh);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);
        
        const pointLight1 = new THREE.PointLight(0xffffff, 1.2);
        pointLight1.position.set(10, 10, 10);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x4444ff, 0.6);
        pointLight2.position.set(-10, -5, 5);
        scene.add(pointLight2);

        // Mouse Handler
        let mouseX = 0;
        let mouseY = 0;
        const handleMouseMove = (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Animation Loop
        const animate = () => {
            mesh.rotation.x += 0.008 + (mouseY * 0.03);
            mesh.rotation.y += 0.008 + (mouseX * 0.03);
            
            const time = Date.now() * 0.002;
            const scale = 1 + Math.sin(time) * 0.03;
            mesh.scale.set(scale, scale, scale);

            renderer.render(scene, camera);
            frameIdRef.current = requestAnimationFrame(animate);
        };
        animate();

        // Resize Observer
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const { width, height } = entry.contentRect;
                if (width > 0 && height > 0 && cameraRef.current && rendererRef.current) {
                    cameraRef.current.aspect = width / height;
                    cameraRef.current.updateProjectionMatrix();
                    rendererRef.current.setSize(width, height);
                }
            }
        });
        resizeObserver.observe(mountRef.current);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            resizeObserver.disconnect();
            if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
            
            if (mountRef.current && rendererRef.current) {
                if (mountRef.current.contains(rendererRef.current.domElement)) {
                    mountRef.current.removeChild(rendererRef.current.domElement);
                }
            }
            
            geometry.dispose();
            material.dispose();
            wireGeo.dispose();
            wireMat.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="w-full h-full min-h-[300px] cursor-grab active:cursor-grabbing pointer-events-auto" />;
};

// --- INFINITE CALENDAR COMPONENT ---
const InfiniteCalendar = ({ selectedDate, onSelect }) => {
    const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    
    // START REALTIME LOGIC
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

// --- PREMIUM SELECT BUTTON ---
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

// --- CONTACT OVERLAY COMPONENT ---
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
        
        // --- VALIDASI PHONE (WAJIB) ---
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
        navigateTo('home'); 
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
                                        <ChevronDownIcon size={16} className="opacity-50" />
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

// --- PARTNER OVERLAY COMPONENT ---
const PartnerOverlay = ({ isOpen, onClose, setCursorHovering, selectedCountry, setSelectedCountry }) => {
    const [selectedType, setSelectedType] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', link: '', intro: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
    const [countrySearch, setCountrySearch] = useState("");
    const countryDropdownRef = useRef(null);

    const filteredCountries = useMemo(() => {
        return countries.filter(c => c.name.toLowerCase().includes(countrySearch.toLowerCase()) || c.code.includes(countrySearch));
    }, [countrySearch]);

    // INIT EMAILJS ON PARTNER OPEN TO PREVENT STUCK LOADING
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
                    phone_number: `${selectedCountry.code} ${formData.phone}`,
                    partner_type: selectedType,
                    region_location: selectedCountry.name,
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
            // FALLBACK IF EMAILJS NOT LOADED
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
                                            <span>{selectedCountry.code}</span> <ChevronDownIcon size={16} className="opacity-50" />
                                            <input name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="Phone Number" className="w-full bg-transparent outline-none ml-2 placeholder:text-black/20" onClick={(e) => e.stopPropagation()} />
                                        </button>
                                        {isCountryDropdownOpen && (
                                            <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl border border-black/5 z-50 mt-2 max-h-60 overflow-hidden flex flex-col">
                                                <div className="p-2 border-b border-black/5"><input type="text" placeholder="Search..." className="w-full bg-neutral-100 p-2 rounded text-sm outline-none" value={countrySearch} onChange={(e) => setCountrySearch(e.target.value)} autoFocus/></div>
                                                <div className="overflow-y-auto flex-1">
                                                    {filteredCountries.map(c => (
                                                        <button key={c.code + c.name} onClick={() => { setSelectedCountry(c); setIsCountryDropdownOpen(false); }} className="w-full text-left px-4 py-2 hover:bg-black/5 text-sm flex justify-between">
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
        </div>
    );
};

// --- PARTNER PAGE COMPONENT ---
const PartnerPage = ({ setCursorHovering, openPartnerForm }) => {
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
                        <button onClick={openPartnerForm} className="bg-black text-white px-10 py-5 rounded-full text-lg font-medium hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 group shadow-xl" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>
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
                        <div key={index} ref={addToRefs} className={`p-8 border border-black/5 rounded-2xl hover:border-black/20 hover:bg-neutral-50 transition-all duration-500 group ${revealClass}`} style={{ transitionDelay: `${index * 100}ms` }}>
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

// --- WORKFLOW PAGE COMPONENT (UPDATED WITH CAPABILITY POPUPS) ---
const WorkflowPage = ({ setCursorHovering }) => {
    const revealRefs = useRef([]);
    const heroTextRef = useRef(null);
    const [activeCapability, setActiveCapability] = useState(null);

    const capabilitiesData = [
        { title: "UI/UX Engineering", desc: "Kami tidak sekadar menggambar interface; kami membangun Arsitektur Pengalaman. Di KreavityWorks, UI/UX Engineering adalah penggabungan antara psikologi kognitif dan estetika radikal. Kami mendekonstruksi perilaku pengguna untuk membangun alur kerja yang intuitif, memastikan setiap piksel memiliki tujuan fungsional untuk meningkatkan rasio konversi dan kepuasan pengguna secara instan." },
        { title: "AI Tools Development", desc: "Masa depan adalah otonom. Kami membantu bisnis Anda melompati kompetisi dengan integrasi intelegensi buatan. Dari otomatisasi workflow hingga sistem prediksi perilaku pasar, kami membangun solusi AI kustom yang tidak hanya cerdas, tapi juga selaras dengan tujuan strategis perusahaan Anda. Efisiensi bukan lagi pilihan, melainkan standar operasional baru yang kami tawarkan." },
        { title: "Motion Graphics", desc: "Dunia digital yang statis sudah berakhir. Kami menghidupkan pesan brand Anda melalui narasi visual yang imersif dan kinetik. Motion graphics kami dirancang untuk menangkap perhatian dalam hitungan detik, mengubah ide-ide kompleks menjadi cerita visual yang mudah dicerna, elegan, dan mampu memperkuat otoritas brand Anda di berbagai platform digital." },
        { title: "Scalable Backend", desc: "Infrastruktur yang kuat adalah fondasi dari pertumbuhan tanpa batas. Kami mengarsiteki sistem backend yang kokoh, aman, dan siap menghadapi lonjakan trafik global. Dengan standar koding Fortune 500, kami memastikan aplikasi Anda memiliki performa puncak, modularitas tinggi, dan kemudahan integrasi untuk ekspansi bisnis Anda di masa depan." },
        { title: "Quality Assurance", desc: "Kebijakan Zero Error adalah janji kami. Melalui audit ketat berdasarkan 25 Global Implementation Principles, tim QA kami memastikan produk digital Anda bersih dari bug dan anomali sebelum menyentuh tangan pengguna. Kami menguji stabilitas, keamanan, dan fungsionalitas secara ekstrem karena integritas produk Anda adalah reputasi kami." },
        { title: "Art Direction", desc: "Visi yang besar membutuhkan arah visual yang presisi. Art Direction di KreavityWorks adalah tentang menjaga konsistensi identitas brand di tengah kebisingan pasar. Kami memimpin proses kreatif untuk memastikan setiap elemen visual—dari tipografi hingga palet warna—mampu mengomunikasikan nilai elit brand Anda secara subliminal namun kuat." }
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
        <div className="min-h-screen bg-white text-black pt-32 pb-32 overflow-hidden">
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

            <div className="px-6 md:px-12 max-w-[1600px] mx-auto min-h-[80vh] flex flex-col justify-center relative">
                <div ref={heroTextRef} className="flex flex-col gap-2 md:gap-4 select-none will-change-transform">
                    <h1 
                        onMouseEnter={() => setCursorHovering(true)}
                        onMouseLeave={() => setCursorHovering(false)}
                        className="text-7xl md:text-9xl font-bold tracking-tighter uppercase mix-blend-multiply leading-[0.9] cursor-pointer"
                    >
                        <span ref={addToRefs} className={`block ${revealClass}`}>We</span>
                        <span ref={addToRefs} className={`block ${revealClass} delay-100`}>Architect</span>
                        <span ref={addToRefs} className={`block ${revealClass} delay-200 text-black/20`}>Scalable</span>
                        <span ref={addToRefs} className={`block ${revealClass} delay-300`}>Digital Ecosystems</span>
                    </h1>
                </div>
            </div>

            <div className="px-6 md:px-12 max-w-[1600px] mx-auto py-24 border-t border-black/10 relative z-10 bg-white">
                <p ref={addToRefs} className={`text-xl md:text-3xl leading-relaxed font-medium max-w-5xl ${revealClass}`}>
                    As a high-performance team of specialists, we engineer digital architecture, high-conversion interfaces, and autonomous AI-driven systems.
                </p>
            </div>

            <div className="border-t border-black/10 relative z-10 bg-white">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/10">
                        <div className="px-6 md:px-12 py-24 group hover:bg-black/5 transition-all duration-500 cursor-crosshair overflow-hidden">
                            <div className="group-hover:scale-[1.02] transition-transform duration-700 ease-out origin-left">
                                <h2 ref={addToRefs} className={`text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 ${revealClass}`}>Radical<br/>Design</h2>
                                <p ref={addToRefs} className={`text-lg md:text-xl text-black/60 max-w-md leading-relaxed ${revealClass} delay-100`}>
                                    We don't provide generic solutions. Our design philosophy is rooted in cognitive psychology to streamline productivity and amplify revenue.
                                </p>
                            </div>
                        </div>
                        <div className="px-6 md:px-12 py-24 group hover:bg-black/5 transition-all duration-500 cursor-crosshair overflow-hidden">
                            <div className="group-hover:scale-[1.02] transition-transform duration-700 ease-out origin-left">
                                <h2 ref={addToRefs} className={`text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 ${revealClass}`}>Autonomous<br/>Engineering</h2>
                                <p ref={addToRefs} className={`text-lg md:text-xl text-black/60 max-w-md leading-relaxed ${revealClass} delay-100`}>
                                    By merging radical aesthetics with high-level AI integration, we build digital products exactly as envisioned—with zero technical shortcuts or simplifications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-24 overflow-hidden border-t border-b border-black/10 bg-black text-white relative z-10">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                    <div className="mb-8 text-xs font-mono uppercase tracking-widest text-white/40">Areas of Impact</div>
                </div>
                <div className="relative flex whitespace-nowrap overflow-hidden">
                    <div className="animate-marquee flex gap-16 md:gap-32 text-6xl md:text-9xl font-medium tracking-tighter uppercase px-8">
                        <span>E-Commerce</span>
                        <span className="text-white/30">Fintech</span>
                        <span>AI SaaS</span>
                        <span className="text-white/30">High-Humanity Content</span>
                        <span>Social Ecosystems</span>
                        <span className="text-white/30">Logistics</span>
                        <span>E-Commerce</span>
                        <span className="text-white/30">Fintech</span>
                        <span>AI SaaS</span>
                        <span className="text-white/30">High-Humanity Content</span>
                        <span>Social Ecosystems</span>
                        <span className="text-white/30">Logistics</span>
                    </div>
                </div>
            </div>

            <div className="px-6 md:px-12 max-w-[1600px] mx-auto py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 bg-white">
                <div className="lg:col-span-8">
                    <h2 ref={addToRefs} className={`text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-12 ${revealClass}`}>
                        Brand<br/><span className="text-black/30">Authority</span>
                    </h2>
                    <p ref={addToRefs} className={`text-xl md:text-3xl leading-relaxed font-light text-black/80 ${revealClass} delay-100`}>
                        The only metric that matters in a brand is the authority felt during interaction. We empower emerging and established brands to achieve market dominance through precise visual identity.
                    </p>
                </div>
            </div>

            <div className="px-6 md:px-12 max-w-[1600px] mx-auto py-24 border-t border-black/10 relative z-10 bg-white">
                 <div className="flex flex-col md:flex-row justify-between gap-12">
                    <h3 ref={addToRefs} className={`text-2xl font-medium uppercase tracking-tight ${revealClass}`}>Art Direction & <br/> AI Strategy</h3>
                    <p ref={addToRefs} className={`text-xl md:text-2xl text-black/60 max-w-3xl leading-relaxed ${revealClass} delay-100`}>
                        Building digital products from zero is a precision team effort. Every specialist brings cutting-edge AI innovation, working as a single, coordinated mechanism to hit aggressive targets.
                    </p>
                 </div>
            </div>

            <div className="border-t border-black/10 relative z-10 bg-white">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24">
                    <h4 className="text-sm font-mono text-black/40 uppercase tracking-widest mb-12">Capabilities</h4>
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

            <div className="bg-[#050505] text-white py-32 relative z-10">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-32">
                    <div ref={addToRefs} className={`${revealClass}`}>
                        <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-tight mb-8 text-white/90">
                            We build stable infrastructure using proprietary solutions.
                        </h2>
                        <p className="text-xl text-white/50 max-w-4xl leading-relaxed">
                            Developing global-standard digital products since 2024. We bring vision to life and create digital assets that deliver measurable impact.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-white/10 pt-16">
                        <div>
                            <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-4">Our Philosophy</h3>
                        </div>
                        <div>
                            <p ref={addToRefs} className={`text-xl md:text-2xl leading-relaxed font-light text-white/80 ${revealClass}`}>
                                At Kreavity Works, developers work alongside AI strategists and designers. We do not compromise. We are driven by user-centered design that powers productivity and increases revenue. Our expertise is remarkable, yet we always strive to outperform our previous achievements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- PROJECT CARD WITH VIDEO HOVER ---
const ProjectCard = ({ project, index, navigateTo, setCursorHovering, setIsEyeMode, revealClass, addToRefs }) => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        setIsEyeMode(true);
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay prevented or interrupted", error);
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
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${project.alignRight ? '' : ''}`}>
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

// --- HOME PAGE COMPONENT ---
const HomePage = ({ setCursorHovering, setIsEyeMode, setIsVideoHovering, navigateTo }) => {
    const [visibleProjects, setVisibleProjects] = useState(5);
    const revealRefs = useRef([]);
    const videoContainerRef = useRef(null);
    const playButtonRef = useRef(null);

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

    useEffect(() => {
        let frameId;
        let targetX = 0, targetY = 0;
        let currentX = 0, currentY = 0;
        const handleMove = (e) => {
            if (!videoContainerRef.current) return;
            const rect = videoContainerRef.current.getBoundingClientRect();
            targetX = e.clientX - rect.left;
            targetY = e.clientY - rect.top;
        };
        const animate = () => {
            if(!playButtonRef.current) return;
            currentX += (targetX - currentX) * 0.25;
            currentY += (targetY - currentY) * 0.25;
            playButtonRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
            frameId = requestAnimationFrame(animate);
        };
        window.addEventListener('mousemove', handleMove);
        frameId = requestAnimationFrame(animate);
        return () => { window.removeEventListener('mousemove', handleMove); cancelAnimationFrame(frameId); };
    }, []);

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
                <div ref={(el) => { addToRefs(el); videoContainerRef.current = el; }} className={`w-full h-[40vh] md:h-[50vh] bg-[#111] rounded-2xl overflow-hidden relative group shadow-2xl ${revealClass} delay-[300ms] cursor-none`} onMouseEnter={() => setIsVideoHovering(true)} onMouseLeave={() => setIsVideoHovering(false)}>
                    <video
                        src="https://v.ftcdn.net/05/63/68/07/700_F_563680753_c1eGZf8z8A8y8E9z.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-20 pointer-events-none z-10"></div>
                    <div ref={playButtonRef} className="absolute top-0 left-0 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl z-20 pointer-events-none"><Play className="fill-black text-black ml-1" size={28} /></div>
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

// --- PRIVACY POLICY PAGE COMPONENT ---
const PrivacyPolicyPage = ({ setCursorHovering, navigateTo }) => {
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
            <button onClick={() => navigateTo('home')} className={`flex items-center gap-2 text-black/50 hover:text-black transition-colors mb-16 group ${revealClass}`} onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>
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

// --- PROJECT DETAIL PAGE ---
const ProjectDetailPage = ({ project, setCursorHovering, setCursorText, navigateTo, setIsEyeMode, openContact }) => {
    const revealRefs = useRef([]);
    const addToRefs = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

    useEffect(() => {
        revealRefs.current = [];
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-16');
                }
            });
        }, { threshold: 0.05, rootMargin: '0px 0px -100px 0px' }); 

        const timeoutId = setTimeout(() => {
            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach(el => observer.observe(el));
        }, 100);

        return () => {
            observer.disconnect();
            clearTimeout(timeoutId);
        };
    }, [project]); 

    const currentIndex = allProjects.findIndex(p => p.id === project.id);
    const nextIndex = (currentIndex + 1) % allProjects.length;
    const nextProject = allProjects[nextIndex];
    // --- FIX: Check if current project is the last one (based on array index)
    const isLastProject = currentIndex === allProjects.length - 1;
    
    const revealClass = "animate-on-scroll opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";

    return (
        <div className="pt-32 min-h-screen bg-white text-black pb-20">
            <div className="px-6 md:px-12 max-w-[1600px] mx-auto">
                <button onClick={() => navigateTo('home')} className={`flex items-center gap-2 text-black/50 hover:text-black transition-colors mb-12 group ${revealClass}`} onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
                </button>
                
                <div className={`flex flex-col gap-4 mb-16 ${revealClass}`}>
                    <div className="flex items-center gap-4 text-sm font-mono tracking-widest text-black/40 uppercase"><span>{project.category}</span><span className="w-12 h-[1px] bg-black/20"></span><span>{project.id}</span></div>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-none">{project.title}</h1>
                </div>
                
                <div className={`w-full aspect-video bg-neutral-100 rounded-2xl overflow-hidden relative cursor-none mb-24 shadow-sm ${revealClass} delay-100`} onMouseEnter={() => setIsEyeMode(true)} onMouseLeave={() => setIsEyeMode(false)}>
                      {project.image ? (
                        <img 
                            key={project.image} // Added key to force remount on change
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                            onError={handleImageError} 
                        />
                      ) : (
                        <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-xs uppercase tracking-widest">Project Visual</div>
                      )}
                      <div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
                    <div className={`lg:col-span-7 ${revealClass} delay-200`}>
                        <h3 className="text-xl font-medium mb-8 border-b border-black/10 pb-4">Overview</h3>
                        <p className="text-xl md:text-2xl text-black/80 leading-relaxed font-light">{project.detailedDesc || project.desc}</p>
                    </div>

                    <div className={`lg:col-span-5 flex flex-col justify-between ${revealClass} delay-300`}>
                        <div>
                            <h3 className="text-xl font-medium mb-8 border-b border-black/10 pb-4">Deliverables</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 text-lg text-black/60"><div className="w-2 h-2 bg-black rounded-full"></div> Strategy & Research</li>
                                <li className="flex items-center gap-4 text-lg text-black/60"><div className="w-2 h-2 bg-black rounded-full"></div> Visual Design System</li>
                                <li className="flex items-center gap-4 text-lg text-black/60"><div className="w-2 h-2 bg-black rounded-full"></div> Development & QA</li>
                            </ul>
                        </div>
                        <button 
                            onClick={openContact}
                            className="mt-12 w-full py-8 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-full flex items-center justify-center gap-3 uppercase tracking-widest text-sm font-medium" 
                            onMouseEnter={() => setCursorHovering(true)} 
                            onMouseLeave={() => setCursorHovering(false)}
                        >
                            Start Project <ArrowRight size={16}/>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`w-full bg-[#050505] text-white py-32 mb-32 ${revealClass}`}>
                <div className="px-6 md:px-12 max-w-[1600px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
                        <h2 className="text-6xl md:text-8xl font-medium tracking-tighter leading-none">Project Gallery</h2>
                        <span className="text-white/40 text-sm hidden md:block uppercase tracking-widest mb-2">Visual Exploration</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {[1, 2, 3, 4].map((item, index) => (
                            <div key={`${project.id}-detail-${index}`} className={`aspect-[4/3] bg-neutral-900 rounded-lg overflow-hidden relative group cursor-pointer ${revealClass}`} style={{ transitionDelay: `${index * 100}ms` }} onMouseEnter={() => setIsEyeMode(true)} onMouseLeave={() => setIsEyeMode(false)}>
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                {/* Use project.fileExt to dynamically determine default extension */}
                                <img 
                                    src={`/${project.folder}/detail-${item}${project.fileExt || '.png'}`} 
                                    alt={`Detail ${item}`} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    onError={handleImageError}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- FIX: Only render Next Project section if NOT the last project --- */}
            {!isLastProject && (
                <div className="px-6 md:px-12 max-w-[1600px] mx-auto">
                    <div className={`border-t border-black/10 pt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center group cursor-pointer ${revealClass}`} onClick={() => navigateTo('project', nextProject.id)} onMouseEnter={() => setCursorText("NEXT")} onMouseLeave={() => setCursorText("")}>
                        <div className="flex flex-col gap-4 order-2 md:order-1">
                             <p className="text-black/40 uppercase tracking-widest text-sm mb-4">Next Featured Project</p>
                             <h2 className="text-5xl md:text-7xl font-medium tracking-tighter group-hover:text-black/60 transition-colors">{nextProject.title}</h2>
                             <div className="flex items-center gap-4 text-black/40 group-hover:text-black transition-colors">
                                <span className="font-mono">{nextProject.id}</span>
                                <ArrowRight size={24} className="transform group-hover:translate-x-2 transition-transform" />
                             </div>
                        </div>
                        <div className="order-1 md:order-2 aspect-video bg-neutral-100 rounded-lg overflow-hidden relative shadow-sm group-hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                             <div className="absolute inset-0 bg-neutral-200/50 flex items-center justify-center">
                                 {nextProject.image ? (
                                    <img 
                                        key={`next-${nextProject.id}`} // Added key to force remount
                                        src={nextProject.image} 
                                        alt={nextProject.title} 
                                        className="w-full h-full object-cover" 
                                        onError={handleImageError}
                                    />
                                 ) : (
                                    <span className="text-black/10 text-6xl font-bold tracking-tighter">{nextProject.id}</span>
                                 )}
                             </div>
                             <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] uppercase tracking-widest">Preview</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// --- COMPANY PAGE COMPONENT ---
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
        revealRefs.current.forEach(el => el && observer.observe(el));
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
        <div className="snap-start pt-48 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen">
            <article className="mb-40">
                <h5 ref={addToRefs} className={`text-sm text-black/50 mb-6 uppercase tracking-[0.2em] ${revealClass}`}>The Performance Engine</h5>
                
                {/* --- FIX: Staggered reveal for H1 to match HomePage style --- */}
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
                        <div key={index} ref={addToRefs} className={`group relative py-16 border-b border-black/10 transition-colors duration-500 hover:bg-black/[0.05] cursor-none ${revealClass}`} onMouseEnter={() => setCursorText("BENEFIT")} onMouseLeave={() => setCursorText("")}>
                            <div className="absolute bottom-0 left-0 h-[1px] bg-black w-0 group-hover:w-full transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                                <div className="md:col-span-1 text-black/30 font-mono text-sm pt-2">0{index + 1}</div>
                                <div className="md:col-span-4"><div className="mb-4 text-black/80 group-hover:text-black transition-colors">{pillar.icon}</div><h3 className="text-3xl font-medium tracking-tight mb-2">{pillar.title}</h3></div>
                                <div className="md:col-span-6 md:col-start-7"><p className="text-lg text-black/60 leading-relaxed max-w-xl group-hover:text-black/80 transition-colors">{pillar.desc}</p></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

// --- FOOTER COMPONENT ---
const Footer = ({ setCursorHovering, navigateTo, openContact }) => {
    const dockRef = useRef(null);
    const [dockMouseX, setDockMouseX] = useState(null);
    const [activeModal, setActiveModal] = useState(null); 
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
        revealRefs.current.forEach(el => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const getDockScale = (index) => {
        if (dockMouseX === null) return 1;
        const iconCenter = index * 60 + 30; 
        const distance = Math.abs(dockMouseX - iconCenter);
        const maxDistance = 150;
        if (distance > maxDistance) return 1;
        return Math.max(1, Math.min(1 + (1.5 - distance / maxDistance), 2.2));
    };

    const socials = [
        { icon: <Github size={20} />, label: "Github", link: "https://github.com/kreavityworks" }, 
        { icon: <Instagram size={20} />, label: "Instagram", link: "https://www.instagram.com/kreavity_works/" }, 
        { icon: <span className="font-bold text-xs font-sans tracking-tighter">UP</span>, label: "Upwork", link: "https://www.upwork.com/agencies/1984085958253630159/" }, 
        { icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>, label: "X", link: "https://x.com/KreavityWorks" }
    ];
    
    const revealClass = "opacity-0 translate-y-16 transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform";

    const [copyStatus, setCopyStatus] = useState(false);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopyStatus(true);
        setTimeout(() => setCopyStatus(false), 2000);
    }

    return (
        <footer id="contact" className="snap-start min-h-screen px-6 md:px-12 relative overflow-hidden bg-white text-black py-32">
            {activeModal && (
                <div className="fixed inset-0 z-[9999] bg-white/10 backdrop-blur-3xl flex items-center justify-center p-4 animate-in fade-in duration-500">
                    <div className="bg-white text-black p-8 rounded-2xl shadow-2xl relative max-w-sm w-full border border-black/5 flex flex-col items-center text-center animate-in zoom-in-95 duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                        <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-black/50 hover:text-black transition-all hover:scale-110 bg-neutral-100 rounded-full p-2"><X size={20}/></button>
                        
                        <div className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center mb-6 shadow-xl animate-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-backwards">
                            {activeModal.type === 'Phone' ? <Phone size={36}/> : <Mail size={36}/>}
                        </div>

                        <div className="space-y-2 mb-8 animate-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-backwards">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-black/40">{activeModal.type}</h3>
                            <p className="text-2xl font-medium tracking-tighter break-all">{activeModal.value}</p>
                        </div>
                        
                        <button 
                            onClick={() => handleCopy(activeModal.value)} 
                            className={`w-full py-4 bg-black text-white rounded-full text-sm font-medium transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group relative overflow-hidden animate-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-backwards ${copyStatus ? 'bg-green-600' : 'hover:scale-[1.02] hover:shadow-lg'}`}
                            onMouseEnter={() => setCursorHovering(true)} 
                            onMouseLeave={() => setCursorHovering(false)}
                        >
                            <span className={`flex items-center gap-2 relative z-10 ${copyStatus ? 'scale-110' : ''} transition-transform`}>
                                {copyStatus ? <Check size={18}/> : <Copy size={18}/>}
                                {copyStatus ? "Copied!" : "Copy to Clipboard"}
                            </span>
                        </button>
                    </div>
                </div>
            )}

            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-neutral-200 rounded-full blur-[120px] animate-blob mix-blend-multiply"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-neutral-100 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
            </div>
            <div className="max-w-[1600px] mx-auto w-full relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24">
                    <div ref={addToRefs} className={`${revealClass}`}>
                        <h2 className="text-6xl md:text-8xl font-medium tracking-tighter mb-8">Have an idea?</h2>
                        <button onClick={openContact} className={`relative overflow-hidden group !border-b-2 !border-t-0 !border-l-0 !border-r-0 !border-black/20 !rounded-none pb-4 flex items-center gap-6 overflow-visible cursor-pointer`} onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>
                             <span className="absolute inset-0 bg-transparent"></span>
                             <span className="relative z-10 flex items-center gap-6 group-hover:gap-10 transition-all duration-500 text-4xl md:text-6xl font-light">Contact Us <ArrowRight size={56} /></span>
                        </button>
                        <div className="flex gap-4 mt-8">
                             <button onClick={() => setActiveModal({type: 'Phone', value: '+62 821-2544-9866'})} className="w-16 h-16 rounded-full flex items-center justify-center border border-black/20 relative overflow-hidden group" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}><span className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"></span><span className="relative z-10 group-hover:text-white transition-colors duration-300"><Phone size={24} /></span></button>
                             <button onClick={() => setActiveModal({type: 'Email', value: 'projects@kreavityworks.com'})} className="w-16 h-16 rounded-full flex items-center justify-center border border-black/20 relative overflow-hidden group" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}><span className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"></span><span className="relative z-10 group-hover:text-white transition-colors duration-300"><Mail size={24} /></span></button>
                        </div>
                    </div>
                    <div ref={addToRefs} className={`flex flex-col gap-4 text-black/50 text-sm ${revealClass} delay-200`}>
                        <p>Kreavity Works HQ<br/>Jakarta, Indonesia</p>
                        <p className="mt-4 text-black">projects@kreavityworks.com</p>
                        <div ref={dockRef} className="flex items-end gap-2 mt-8 h-16" onMouseMove={(e) => { const rect = dockRef.current.getBoundingClientRect(); setDockMouseX(e.clientX - rect.left); }} onMouseLeave={() => setDockMouseX(null)}>
                            {socials.map((social, index) => {
                                const scale = getDockScale(index);
                                return (<a key={index} href={social.link} target="_blank" rel="noopener noreferrer" style={{ transform: `scale(${scale})` }} className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 origin-bottom shadow-sm" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>{social.icon}</a>);
                            })}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/10 text-xs text-black/40 uppercase tracking-widest font-medium">
                    <div className="flex gap-8 mb-4 md:mb-0">
                        <button onClick={() => navigateTo('privacy-policy')} className="hover:text-black">Privacy Policy</button>
                        <button onClick={() => navigateTo('partner')} className="hover:text-black relative group flex items-center gap-1">
                            Become Partner Agent
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300"></span>
                        </button>
                    </div>
                    <p>&copy; 2026 KreavityWorks. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

// --- ICON HELPER FOR CHEVRON DOWN ---
const ChevronDownIcon = ({ size = 24, className = "" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="m6 9 6 6 6-6"/>
    </svg>
);

const App = () => {
  const [activePage, setActivePage] = useState('home'); 
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false); 
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [initialInterest, setInitialInterest] = useState(null); 
  
  const [cursorHovering, setCursorHovering] = useState(false);
  const [isEyeMode, setIsEyeMode] = useState(false); 
  const [cursorText, setCursorText] = useState(""); 
  const [isVideoHovering, setIsVideoHovering] = useState(false);
  const [isLogoResetting, setIsLogoResetting] = useState(false);

  const cursorRef = useRef(null);
  const cursorIconRef = useRef(null);
  const cursorTextRef = useRef(null); 
  const scrollContainerRef = useRef(null);

  // Country state lifted up for shared usage
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  // Function to open contact with specific interest
  const openContactWithInterest = (interestTitle) => {
      setInitialInterest(interestTitle);
      setIsContactOpen(true);
  };

  useEffect(() => {
    let animationFrameId;
    const moveCursor = (e) => {
      if (!cursorRef.current) return;
      
      const updateCursor = () => {
          cursorRef.current.style.opacity = isVideoHovering ? '0' : '1';
          
          let scale = 1;
          if (cursorText) scale = 4; 
          else if (isEyeMode) scale = 5; 
          else if (cursorHovering) scale = 3.5; 

          cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(${scale})`;
          
          if (cursorIconRef.current && cursorTextRef.current) {
              if (cursorText) {
                  cursorIconRef.current.style.opacity = '0';
                  cursorTextRef.current.style.opacity = '1';
                  cursorTextRef.current.innerText = cursorText;
                  cursorRef.current.style.mixBlendMode = 'normal';
                  cursorRef.current.style.backgroundColor = 'black'; 
                  cursorRef.current.style.color = 'white';
                  cursorRef.current.style.border = 'none';
              } else if (isEyeMode) {
                  cursorIconRef.current.style.opacity = '1';
                  cursorTextRef.current.style.opacity = '0';
                  cursorRef.current.style.mixBlendMode = 'normal';
                  cursorRef.current.style.backgroundColor = 'white';
                  cursorRef.current.style.color = 'black';
                  cursorRef.current.style.border = 'none';
              } else {
                  cursorIconRef.current.style.opacity = '0';
                  cursorTextRef.current.style.opacity = '0';
                  cursorRef.current.style.mixBlendMode = 'difference';
                  cursorRef.current.style.backgroundColor = 'white';
                  cursorRef.current.style.color = 'transparent';
              }
          }
      };
      requestAnimationFrame(updateCursor);
    };
    window.addEventListener('mousemove', moveCursor);
    setTimeout(() => setLoaded(true), 700); 
    return () => {
        window.removeEventListener('mousemove', moveCursor);
        cancelAnimationFrame(animationFrameId);
    };
  }, [cursorHovering, isVideoHovering, isEyeMode, cursorText]);

  const navigateTo = (page, param = null) => {
      setIsMenuOpen(false);
      if (param === 'contact') {
          setInitialInterest(null);
          setIsContactOpen(true);
          return;
      }
      if (activePage === page && typeof param === 'string' && !param.startsWith('0')) { 
           const element = document.getElementById(param);
           if (element) element.scrollIntoView({ behavior: 'smooth' });
           return;
      }
      if (activePage === page && !param) {
          if (scrollContainerRef.current) {
              scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
          }
          return;
      }
      if (page === 'project') {
          const project = allProjects.find(p => p.id === param);
          if (project) {
              setLoaded(false); 
              setTimeout(() => {
                  setSelectedProject(project);
                  setActivePage('project');
                  setLoaded(true); 
                  setTimeout(() => {
                      if (scrollContainerRef.current) scrollContainerRef.current.scrollTo(0,0);
                  }, 50);
              }, 700);
          }
          return;
      }
      if (activePage !== page) {
          setLoaded(false);
          setTimeout(() => {
              setActivePage(page);
              setLoaded(true);
              setTimeout(() => {
                  if (scrollContainerRef.current) scrollContainerRef.current.scrollTo(0,0);
                  if (param && typeof param === 'string') {
                      const element = document.getElementById(param);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }
              }, 50);
          }, 700);
      }
  };

  const handleLogoClick = () => {
      setIsLogoResetting(true);
      navigateTo('home');
      setTimeout(() => setIsLogoResetting(false), 500); 
  };

  return (
    <>
    <ContactOverlay 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        setCursorHovering={setCursorHovering} 
        initialInterest={initialInterest}
        navigateTo={navigateTo}
    />

    <PartnerOverlay
        isOpen={isPartnerOpen}
        onClose={() => setIsPartnerOpen(false)}
        setCursorHovering={setCursorHovering}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
    />

    <div className={`fixed inset-0 z-[10000] transition-all duration-700 ease-in-out pointer-events-none 
        ${loaded ? 'opacity-0 backdrop-blur-none' : 'opacity-100 backdrop-blur-3xl bg-white/10'}`}>
    </div>

    <div ref={cursorRef} className={`fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] -mt-2 -ml-2 hidden md:flex items-center justify-center transition-transform duration-200 ease-out mix-blend-difference overflow-hidden`}>
        <span ref={cursorIconRef} className="absolute opacity-0 transition-all duration-300 text-black flex items-center justify-center"><Eye size={4} strokeWidth={2.5} /></span>
        <span ref={cursorTextRef} className="absolute opacity-0 text-[2px] font-bold tracking-widest text-white whitespace-nowrap"></span>
    </div>

    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center backdrop-blur-lg bg-white/80 border-b border-black/5 text-black transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className={`cursor-pointer select-none origin-left ${isLogoResetting ? 'animate-logo-reset' : ''}`} onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)} onClick={handleLogoClick}>
          <img src="/brand/logo.png" alt="KREAVITY WORKS" className="h-10 md:h-12 w-auto object-contain"/>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm tracking-tight font-medium text-black/70">
          <button onClick={() => navigateTo('home', 'why-choose-us')} className="hover:text-black relative group overflow-hidden cursor-pointer" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>
              <span className="relative z-10">Why Us</span><span className="absolute bottom-0 left-0 w-full h-[1px] bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          </button>
          <button onClick={() => navigateTo('workflow')} className={`hover:text-black relative group overflow-hidden cursor-pointer ${activePage === 'workflow' ? 'text-black font-bold' : ''}`} onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>
              <span className="relative z-10">Workflow</span><span className={`absolute bottom-0 left-0 w-full h-[1px] bg-black transform transition-transform duration-300 ease-out ${activePage === 'workflow' ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'}`}></span>
          </button>
          <button onClick={() => navigateTo('home', 'projects')} className="hover:text-black relative group overflow-hidden cursor-pointer" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>
              <span className="relative z-10">Projects</span><span className="absolute bottom-0 left-0 w-full h-[1px] bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          </button>
          <button onClick={() => navigateTo('company')} className={`hover:text-black relative group overflow-hidden cursor-pointer ${activePage === 'company' ? 'text-black font-bold' : ''}`} onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>
              <span className="relative z-10">Company</span><span className={`absolute bottom-0 left-0 w-full h-[1px] bg-black transform transition-transform duration-300 ease-out ${activePage === 'company' ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'}`}></span>
          </button>
          <button onClick={() => navigateTo('home', 'contact')} className={`relative overflow-hidden group border border-black/10 transition-all duration-300 cursor-pointer rounded-full px-6 py-2`} onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>
             <span className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"></span>
             <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">Contact Us</span>
          </button>
        </div>
        <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
    </nav>

    {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-8 text-2xl font-light tracking-tighter text-black animate-in fade-in zoom-in duration-300">
          <button onClick={() => navigateTo('home', 'why-choose-us')}>Why Us</button>
          <button onClick={() => navigateTo('workflow')}>Workflow</button>
          <button onClick={() => navigateTo('home', 'projects')}>Projects</button>
          <button onClick={() => navigateTo('company')}>Company</button>
          <button onClick={() => { setIsMenuOpen(false); setIsContactOpen(true); }}>Contact Us</button>
          <button onClick={() => navigateTo('partner')}>Partnership</button>
          <button onClick={() => navigateTo('privacy-policy')}>Privacy Policy</button>
        </div>
    )}

    <div 
        ref={scrollContainerRef}
        className={`h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth font-sans selection:bg-black selection:text-white 
        ${(activePage === 'home' || activePage === 'company') ? 'snap-y snap-mandatory' : ''} 
        ${isMenuOpen ? 'overflow-hidden' : ''}`}
    >
        {activePage === 'home' && (
            <HomePage 
                setCursorHovering={setCursorHovering} 
                setIsEyeMode={setIsEyeMode} 
                setIsVideoHovering={setIsVideoHovering}
                navigateTo={navigateTo}
            />
        )}
        
        {activePage === 'company' && (
            <CompanyPage 
                setCursorHovering={setCursorHovering}
                setCursorText={setCursorText}
            />
        )}

        {activePage === 'workflow' && (
            <WorkflowPage setCursorHovering={setCursorHovering} />
        )}

        {activePage === 'privacy-policy' && (
            <PrivacyPolicyPage 
                setCursorHovering={setCursorHovering}
                navigateTo={navigateTo}
            />
        )}

        {activePage === 'partner' && (
            <PartnerPage
                setCursorHovering={setCursorHovering}
                openPartnerForm={() => setIsPartnerOpen(true)}
            />
        )}

        {activePage === 'project' && selectedProject && (
            <ProjectDetailPage
                project={selectedProject}
                setCursorHovering={setCursorHovering}
                setCursorText={setCursorText}
                navigateTo={navigateTo}
                setIsEyeMode={setIsEyeMode}
                openContact={() => openContactWithInterest(selectedProject.title)}
            />
        )}

        <Footer setCursorHovering={setCursorHovering} navigateTo={navigateTo} openContact={() => setIsContactOpen(true)} />
    </div>
    
    <style>{`
        @keyframes logoReset {
            0% { transform: scale(1); filter: blur(0px); opacity: 1; }
            40% { transform: scale(0.92); filter: blur(1.5px); opacity: 0.7; }
            100% { transform: scale(1); filter: blur(0px); opacity: 1; }
        }
        .animate-logo-reset {
            animation: logoReset 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        @keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1); } }
        .animate-blob { animation: blob 10s infinite alternate cubic-bezier(0.4, 0, 0.2, 1); }
        .animation-delay-2000 { animation-delay: 2s; }
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 20s linear infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        /* UPDATED ANIMATIONS FOR CONTACT POPUP */
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
    </>
  );
};

export default App;