// --- KREAVITY WORKS GLOBAL CONSTANTS ---

// 1. DAFTAR PROYEK (PORTFOLIO DATA)
export const allProjects = [
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

// 2. DAFTAR NEGARA (COUNTRY DATA)
export const countries = [
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

// 3. HELPER: IMAGE ERROR HANDLER (Smart Fallback)
export const handleImageError = (e) => {
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

    // Bi-directional switching (PNG <-> JPG)
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