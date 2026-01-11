import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

// --- 1. THREE.JS BACKGROUND (WIREFRAME TORUS - STABILIZED) ---
export const ThreeBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // 1. Setup Dasar
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // 2. Mount ke DOM (Safe Way)
        // Bersihkan dulu container sebelum inject (Anti-Double Render)
        mountRef.current.innerHTML = ''; 
        mountRef.current.appendChild(renderer.domElement);

        // 3. Objek Torus (Wireframe Style yang Boss Suka)
        const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
        const material = new THREE.MeshBasicMaterial({ 
            color: 0x000000, 
            wireframe: true, 
            transparent: true, 
            opacity: 0.08 // Tipis & Elegan
        });
        const torusKnot = new THREE.Mesh(geometry, material);
        scene.add(torusKnot);

        // 4. Animasi Loop
        let animationId;
        const animate = () => {
            animationId = requestAnimationFrame(animate);
            torusKnot.rotation.x += 0.001;
            torusKnot.rotation.y += 0.002;
            renderer.render(scene, camera);
        };
        animate();

        // 5. Handle Resize
        const handleResize = () => {
            if (!mountRef.current) return;
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        };
        window.addEventListener('resize', handleResize);

        // 6. Cleanup (Pembersihan Memori Aman)
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            
            // Hapus scene & renderer dari memori
            if (mountRef.current) {
                mountRef.current.innerHTML = ''; // Cara paling aman menghapus canvas
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    // Gunakan FIXED agar tidak mengganggu scroll
    return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" />;
};

// --- 2. INTERACTIVE SHAPE (BOLA KECIL DI WHY US) ---
export const InteractiveShape = () => {
    const mountRef = useRef(null);
    useEffect(() => {
        if (!mountRef.current) return;
        mountRef.current.innerHTML = ''; // Safe clear
        const width = mountRef.current.clientWidth || 1;
        const height = mountRef.current.clientHeight || 1;
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000); 
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.z = 6;
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);
        
        // Objek Bola Kecil (Solid)
        const geometry = new THREE.TorusKnotGeometry(0.85, 0.28, 150, 20); 
        const material = new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 0.1, roughness: 0.2, clearcoat: 1.0, clearcoatRoughness: 0.1, emissive: 0x333333 });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        
        // Wireframe Overlay
        const wireGeo = new THREE.WireframeGeometry(geometry);
        const wireMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.1 });
        const wireMesh = new THREE.LineSegments(wireGeo, wireMat);
        mesh.add(wireMesh);
        
        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);
        const pointLight1 = new THREE.PointLight(0xffffff, 1.2);
        pointLight1.position.set(10, 10, 10);
        scene.add(pointLight1);
        const pointLight2 = new THREE.PointLight(0x4444ff, 0.6);
        pointLight2.position.set(-10, -5, 5);
        scene.add(pointLight2);
        
        // Mouse Move Logic
        let mouseX = 0; let mouseY = 0;
        const handleMouseMove = (event) => { mouseX = (event.clientX / window.innerWidth) * 2 - 1; mouseY = -(event.clientY / window.innerHeight) * 2 + 1; };
        window.addEventListener('mousemove', handleMouseMove);
        
        // Animasi
        let frameId;
        const animate = () => {
            mesh.rotation.x += 0.008 + (mouseY * 0.03);
            mesh.rotation.y += 0.008 + (mouseX * 0.03);
            const time = Date.now() * 0.002;
            const scale = 1 + Math.sin(time) * 0.03;
            mesh.scale.set(scale, scale, scale);
            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };
        animate();
        
        // Resize
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const { width, height } = entry.contentRect;
                if (width > 0 && height > 0) { camera.aspect = width / height; camera.updateProjectionMatrix(); renderer.setSize(width, height); }
            }
        });
        resizeObserver.observe(mountRef.current);
        
        return () => { 
            window.removeEventListener('mousemove', handleMouseMove); 
            resizeObserver.disconnect(); 
            cancelAnimationFrame(frameId); 
            geometry.dispose(); 
            material.dispose(); 
            renderer.dispose(); 
            if(mountRef.current) mountRef.current.innerHTML = '';
        };
    }, []);
    return <div ref={mountRef} className="w-full h-full min-h-[300px] cursor-grab active:cursor-grabbing pointer-events-auto" />;
};

// --- 3. INFINITE CALENDAR ---
export const InfiniteCalendar = ({ selectedDate, onSelect }) => {
    const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const generateMonths = (startYear, count) => { const months = []; for (let i = 0; i < count; i++) { months.push(new Date(startYear, i, 1)); } return months; };
    const months = generateMonths(today.getFullYear(), 12);
    const getDaysInMonth = (date) => { return { days: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(), firstDay: new Date(date.getFullYear(), date.getMonth(), 1).getDay() }; };
    return (
        <div className="bg-white border border-black/10 rounded-2xl w-full max-w-md h-80 overflow-y-auto overflow-x-hidden relative scrollbar-hide">
            <div className="sticky top-0 bg-white/95 backdrop-blur z-10 p-4 border-b border-black/5"><div className="grid grid-cols-7 gap-1">{daysOfWeek.map(d => <span key={d} className="text-center text-xs font-mono text-black/40 uppercase">{d}</span>)}</div></div>
            <div className="p-4 space-y-8">{months.map((monthDate, index) => {
                const { days, firstDay } = getDaysInMonth(monthDate);
                const monthName = monthDate.toLocaleString('default', { month: 'long', year: 'numeric' });
                return (<div key={index}><h4 className="text-sm font-medium mb-4 sticky top-12 bg-white/80 backdrop-blur w-fit px-2 py-1 rounded">{monthName}</h4><div className="grid grid-cols-7 gap-2">{Array(firstDay).fill(null).map((_, i) => <div key={`e-${i}`} />)}{Array.from({ length: days }, (_, i) => i + 1).map(day => { const dateStr = `${monthName} ${day}`; const isDisabled = new Date(monthDate.getFullYear(), monthDate.getMonth(), day) <= today; return (<button key={day} disabled={isDisabled} onClick={(e) => { e.preventDefault(); onSelect(dateStr); }} className={`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all duration-200 ${isDisabled ? 'text-black/10 cursor-not-allowed hover:bg-transparent' : selectedDate === dateStr ? 'bg-black text-white shadow-md scale-110' : 'text-black/70 hover:bg-black/5 hover:text-black'}`}>{day}</button>); })}</div></div>);
            })}</div>
        </div>
    );
};

// --- 4. PREMIUM SELECT BUTTON ---
export const PremiumSelectButton = ({ label, isSelected, onClick, error, onMouseEnter, onMouseLeave, className }) => (
    <button onClick={(e) => { e.preventDefault(); onClick(); }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`relative overflow-hidden border text-sm transition-all duration-300 rounded-full group px-4 py-3 ${isSelected ? 'border-black' : error ? 'border-red-200 bg-red-50/10' : 'border-black/10'} ${className}`}><span className={`absolute inset-0 bg-black transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isSelected ? 'translate-y-0' : 'translate-y-[100%] group-hover:translate-y-0'}`}></span><span className={`relative z-10 transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap ${isSelected ? 'text-white' : 'text-black group-hover:text-white'} ${error && !isSelected ? 'text-red-500' : ''}`}>{label}</span></button>
);