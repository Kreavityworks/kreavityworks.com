import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ArrowRight, Play, ArrowUpRight } from 'lucide-react';

// --- DATA SOURCE ---
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

// --- HELPER ---
const handleImageError = (e) => {
    const img = e.target;
    const src = img.src;
    if (img.getAttribute('data-tried-fallback') === 'true') {
        if (src.endsWith('.jpg')) {
             img.src = src.replace('.jpg', '.jpeg');
             img.setAttribute('data-tried-fallback', 'final');
             return;
        }
        img.style.display = 'none';
        return;
    }
    img.setAttribute('data-tried-fallback', 'true');
    if (src.includes('.png')) {
        img.src = src.replace('.png', '.jpg');
    } else if (src.includes('.jpg')) {
        img.src = src.replace('.jpg', '.png');
    } else if (src.includes('.jpeg')) {
        img.src = src.replace('.jpeg', '.png');
    } else {
        img.style.display = 'none';
    }
};

// --- 3D INTERACTIVE SHAPE COMPONENT ---
const InteractiveShape = () => {
    const mountRef = useRef(null);
    const rendererRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const frameIdRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;
        while (mountRef.current.firstChild) {
            mountRef.current.removeChild(mountRef.current.firstChild);
        }

        const width = mountRef.current.clientWidth || 1;
        const height = mountRef.current.clientHeight || 1;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000); 
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.z = 6;
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        const geometry = new THREE.TorusKnotGeometry(0.85, 0.28, 150, 20); 
        
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

        const wireGeo = new THREE.WireframeGeometry(geometry);
        const wireMat = new THREE.LineBasicMaterial({ 
            color: 0xffffff,
            transparent: true,
            opacity: 0.1
        });
        const wireMesh = new THREE.LineSegments(wireGeo, wireMat);
        mesh.add(wireMesh);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);
        
        const pointLight1 = new THREE.PointLight(0xffffff, 1.2);
        pointLight1.position.set(10, 10, 10);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x4444ff, 0.6);
        pointLight2.position.set(-10, -5, 5);
        scene.add(pointLight2);

        let mouseX = 0;
        let mouseY = 0;
        const handleMouseMove = (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);

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

// --- PROJECT CARD COMPONENT ---
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

// --- MAIN HOMEPAGE COMPONENT ---
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

export default HomePage;