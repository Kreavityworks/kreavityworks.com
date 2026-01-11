import React, { useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ProjectDetailPage = ({ project, allProjects, setCursorHovering, setCursorText, navigateTo, setIsEyeMode, openContact }) => {
    const revealRefs = useRef([]);
    const addToRefs = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

    // Handle Image Error Helper
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
                            key={project.image} 
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
                                        key={`next-${nextProject.id}`} 
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

export default ProjectDetailPage;