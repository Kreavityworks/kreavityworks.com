import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { allProjects, handleImageError } from '../constants';
import { InteractiveShape, ThreeBackground } from '../components/UIComponents';

const ProjectCard = ({ project, navigateTo, revealClass, addToRefs }) => {
    return (
        /* Tarik margin atas-bawah agar komponen benar-benar berdempetan di HP */
        <div className="w-full py-4 md:py-24 transition-colors duration-500 bg-white border-b border-black/5 relative z-20">
            <div ref={addToRefs} className={`group cursor-pointer ${revealClass} px-6 md:px-12 max-w-[1600px] mx-auto relative z-10`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-center">
                    <div className="relative aspect-[16/9] bg-neutral-200/50 rounded-lg overflow-hidden" onClick={() => navigateTo('project', project.id)}>
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" onError={handleImageError} />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h4 className="text-[10px] text-black/40 uppercase tracking-widest mb-1 font-medium">{project.category}</h4>
                        <h3 className="text-xl font-medium tracking-tighter mb-2">{project.title}</h3>
                        <button className="w-fit border border-black/20 rounded-full px-4 py-1.5 text-[10px] uppercase" onClick={() => navigateTo('project', project.id)}>
                            View Project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const HomePage = ({ setCursorHovering, setIsEyeMode, setIsVideoHovering, navigateTo }) => {
    const [visibleProjects, setVisibleProjects] = useState(5);
    const revealRefs = useRef([]);
    const addToRefs = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };
    const revealClass = "opacity-0 translate-y-4 transition-all duration-500 ease-out";

    return (
        <div className="w-full">
            {/* HERO: Menghilangkan min-h-screen agar langsung nyambung ke bawah */}
            <header className="h-fit md:h-screen relative pt-24 md:pt-32 pb-6 px-6 md:px-12 flex flex-col justify-center max-w-[1600px] mx-auto bg-white overflow-hidden">
                <div className="absolute inset-0 z-0 scale-[1.2] opacity-20 grayscale pointer-events-none">
                    <ThreeBackground />
                </div>
                <div className="z-10 relative">
                    <h5 className="text-[10px] text-black/50 mb-2 uppercase tracking-widest">A Next-Gen Creative Agency</h5>
                    <h1 className="text-3xl font-medium tracking-tighter leading-tight mb-4">
                        Global Digital <br /><span className="text-black/40">Architecture Agency.</span>
                    </h1>
                </div>
            </header>

            {/* STATS: Menghilangkan min-h-screen agar rapat ke Hero (Gambar 3 fix) */}
            <section className="px-6 md:px-12 bg-[#050505] text-white py-12 md:py-24 relative z-30">
                <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center">
                    <div className="space-y-4 order-2 md:order-1">
                        <h2 className="text-xl font-light tracking-tight leading-snug">
                            We build ecosystems, engineer high-scale digital assets specific for aggressive scale-ups.
                        </h2>
                    </div>
                    <div className="w-full aspect-[4/3] bg-[#111] rounded-xl overflow-hidden order-1 md:order-2">
                        <video src="/projects/showcase.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60" />
                    </div>
                </div>
            </section>

            {/* PROJECTS: Header rapat ke atas */}
            <section id="projects" className="bg-white text-black py-8 md:py-32 relative z-30">
                <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12 border-b border-black/10 pb-4">
                    <h2 className="text-2xl font-medium tracking-tighter">Selected Works</h2>
                </div>
                <div className="flex flex-col w-full">
                    {allProjects.slice(0, visibleProjects).map((p, i) => (
                        <ProjectCard key={i} project={p} navigateTo={navigateTo} revealClass={revealClass} addToRefs={addToRefs} />
                    ))}
                </div>
                {/* FIX Gambar 7 & 8: Menghapus py-24 besar yang bikin scroll jauh */}
                <div className="py-12 text-center border-b border-black/10">
                    <button onClick={() => setVisibleProjects(10)} className="border border-black/10 rounded-full px-8 py-3 text-sm flex items-center gap-2 mx-auto">
                        Discover more <ArrowUpRight size={16} />
                    </button>
                </div>
            </section>

            {/* WHY CHOOSE US: Container 3D dikecilkan agar geometri tidak terpotong (Gambar 6 fix) */}
            <section id="why-choose-us" className="px-6 md:px-12 bg-[#050505] text-white py-12 md:py-20 relative z-30">
                <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl font-medium tracking-tight">From brand strategy to AI-driven output.</h3>
                        <div className="w-full aspect-square bg-white/5 rounded-xl border border-white/10 flex items-center justify-center p-12">
                            <div className="w-full h-full scale-[0.6] flex items-center justify-center">
                                <InteractiveShape />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;