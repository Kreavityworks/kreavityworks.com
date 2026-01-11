import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

// --- 1. INTERACTIVE SHAPE (3D Torus) ---
export const InteractiveShape = () => {
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

// --- 2. INFINITE CALENDAR ---
export const InfiniteCalendar = ({ selectedDate, onSelect }) => {
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

// --- 3. PREMIUM SELECT BUTTON ---
export const PremiumSelectButton = ({ label, isSelected, onClick, error, onMouseEnter, onMouseLeave, className }) => {
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