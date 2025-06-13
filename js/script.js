const content = {
    navigation: {
        logo: "StrucTech",
        links: [
            { name: "Home", href: "#home" },
            { name: "Products", href: "#features" },
            { name: "Clients", href: "#testimonials" },
            { name: "Contact", href: "#contact" },
        ]
    },
    hero: {
        title: "Innovative Structures for a Dynamic World",
        subtitle: "We engineer and deliver high-quality, reliable structures tailored for universal applications and temporary, portable needs. Explore solutions that are built to adapt and designed to last.",
        cta: "Explore Our Products",
    },
    features: {
        title: "Features & Benefits",
        subtitle: "Discover our two flagship product lines, each designed with specific goals in mind but universal in their commitment to quality and innovation.",
        products: [
            {
                id: 'universal',
                name: 'Universal Structures',
                topSection: {
                    title: 'Permanent & Scalable Solutions',
                    description: 'Our Universal line offers robust, permanent structures designed for long-term deployment. They serve as a solid foundation for businesses, communities, and industrial operations, built with durability and future growth in mind.'
                },
                specificFeatures: {
                    title: 'Core Features',
                    items: [ 'Reinforced steel and concrete framework', 'Advanced climate control systems', 'Energy-efficient, multi-layer insulation', 'Fully customizable interior layouts' ]
                },
                webHosting: {
                    title: 'Integrated Digital Infrastructure',
                    description: 'As a unique benefit, our Universal structures can be equipped with dedicated, high-speed fiber optic lines and on-premise server hosting capabilities, ensuring your operation is connected from day one.'
                },
                additionalModules: {
                    title: 'Expansion Modules',
                    description: 'Enhance your structure with a range of powerful add-ons. These modules are designed to integrate seamlessly, providing new capabilities as your needs evolve.'
                }
            },
            {
                id: 'temporary',
                name: 'Temporary & Portable Structures',
                topSection: {
                    title: 'Agile & Rapidly-Deployable',
                    description: 'The Portable line is engineered for speed and flexibility. Perfect for events, emergency response, and project-based work, these structures can be deployed, reconfigured, and relocated with minimal downtime.'
                },
                specificFeatures: {
                    title: 'Core Features',
                    items: [ 'Lightweight modular panel system', 'Tool-free assembly and disassembly', 'All-terrain adjustable foundations', 'Weather-resistant and durable materials' ]
                },
                webHosting: {
                    title: 'On-the-Go Connectivity',
                    description: 'Each portable structure comes with an optional satellite and 4G/5G connectivity package. This ensures reliable internet access for your team and operations, no matter how remote the location.'
                },
                additionalModules: {
                    title: 'Functional Modules',
                    description: 'Tailor your temporary setup with specialized modules. From solar power packs to sanitation units, these add-ons ensure your portable structure is fully equipped for the task at hand.'
                }
            }
        ],
        moreOnModules: {
            title: "A Deeper Look at Additional Modules",
            description: "Our modular ecosystem allows for unparalleled customization. Modules can be mixed and matched to create the perfect facility. All modules are pre-fabricated for quick, plug-and-play installation on-site.",
            categories: [
                {
                    name: "Energy Solutions",
                    items: ["Rooftop Solar Panel Arrays", "Integrated Battery Storage Systems", "Micro Wind Turbines", "Smart Grid Management Interface"]
                },
                {
                    name: "Technology & Comms",
                    items: ["On-Premise Server Racks", "Redundant Internet Failover", "Internal Networking Packages", "VoIP Communication Systems"]
                },
                {
                    name: "Habitability & Utilities",
                    items: ["Compact Kitchenette Units", "Full Bathroom and Shower Pods", "Advanced Water Purification Systems", "Waste Management and Recycling Stations"]
                }
            ]
        }
    },
    testimonials: {
        title: "Trusted by Industry Leaders",
        reviews: [
            { quote: "The universal structure we commissioned has become the backbone of our operations. The quality and forward-thinking design are second to none.", author: "Jane Doe", company: "CEO, Innovate Corp" },
            { quote: "We needed a reliable, high-quality temporary command center for a remote project. StrucTech delivered beyond our expectations. Setup was fast and the unit withstood harsh conditions flawlessly.", author: "John Smith", company: "Project Manager, GeoDynamics" },
            { quote: "From initial design to final installation, the process was seamless. The additional power module is a game-changer for our off-grid research.", author: "Dr. Emily Carter", company: "Lead Scientist, Terra Research" },
        ],
        clients: {
            title: "Our partners and clients include",
            logos: [
                { src: 'https://placehold.co/150x60/f8fafc/94a3b8?text=InnovateCorp', alt: 'Innovate Corp Logo'},
                { src: 'https://placehold.co/150x60/f8fafc/94a3b8?text=GeoDynamics', alt: 'GeoDynamics Logo'},
                { src: 'https://placehold.co/150x60/f8fafc/94a3b8?text=Terra+Research', alt: 'Terra Research Logo'},
                { src: 'https://placehold.co/150x60/f8fafc/94a3b8?text=QuantumLeap', alt: 'QuantumLeap Logo'},
                { src: 'https://placehold.co/150x60/f8fafc/94a3b8?text=Apex+Industries', alt: 'Apex Industries Logo'},
            ]
        }
    },
    cta: {
        title: "Ready to Build Your Future?",
        subtitle: "Let's discuss your project. Contact our experts today for a personalized consultation and a detailed quote.",
        button: "Get a Free Quote",
    },
    contact: {
        title: "Get In Touch",
        subtitle: "We're here to answer any questions you may have.",
    },
    footer: {
        copyright: `© ${new Date().getFullYear()} StrucTech. All Rights Reserved.`,
        tagline: "Engineering the Foundations of Tomorrow.",
        socials: [
            { name: 'Twitter', href: '#', icon: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>' },
            { name: 'LinkedIn', href: '#', icon: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>' },
            { name: 'GitHub', href: '#', icon: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>' },
        ]
    }
};

function renderContent() {
    const { navigation, hero, features, testimonials, cta, contact, footer } = content;

    // Navigation
    document.getElementById('nav-logo').textContent = navigation.logo;
    const navLinksContainer = document.getElementById('nav-links');
    const mobileMenuContainer = document.getElementById('mobile-menu');
    
    navLinksContainer.innerHTML = navigation.links.map(link => 
        `<a href="${link.href}" class="text-slate-600 hover:text-cyan-600 transition duration-300 font-medium">${link.name}</a>`
    ).join('');
    
    mobileMenuContainer.innerHTML = navigation.links.map(link => 
        `<a href="${link.href}" class="block py-2 px-4 text-sm text-slate-700 hover:bg-slate-100 rounded-md">${link.name}</a>`
    ).join('');

    // Hero
    document.getElementById('hero-title').textContent = hero.title;
    document.getElementById('hero-subtitle').textContent = hero.subtitle;
    document.getElementById('hero-cta').textContent = hero.cta;

    // Features / Products
    document.getElementById('features-title').textContent = features.title;
    document.getElementById('features-subtitle').textContent = features.subtitle;
    document.getElementById('products-container').innerHTML = features.products.map(product => `
        <div class="bg-white p-8 rounded-xl shadow-lg border border-slate-200 flex flex-col styled-card">
            <div class="mb-6">
                <h3 class="text-2xl font-bold text-slate-900 mb-2">${product.topSection.title}</h3>
                <p class="text-slate-600">${product.topSection.description}</p>
            </div>
            <div class="mb-6">
                <h4 class="text-lg font-semibold text-slate-800 mb-3">${product.specificFeatures.title}</h4>
                <ul class="space-y-2">
                    ${product.specificFeatures.items.map(item => `
                        <li class="flex items-start">
                            <svg class="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                            <span class="text-slate-600">${item}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <div class="mb-6">
               <h4 class="text-lg font-semibold text-slate-800 mb-3">${product.webHosting.title}</h4>
               <p class="text-slate-600">${product.webHosting.description}</p>
            </div>
            <div class="mt-auto pt-6 border-t border-slate-200">
               <h4 class="text-lg font-semibold text-slate-800 mb-3">${product.additionalModules.title}</h4>
               <p class="text-slate-600 mb-4">${product.additionalModules.description}</p>
               <button data-product-id="${product.id}" class="view-modules-btn text-cyan-600 font-semibold hover:text-cyan-800 transition">
                    More on Additional Modules &rarr;
               </button>
            </div>
        </div>
    `).join('');

    // Testimonials
    document.getElementById('testimonials-title').textContent = testimonials.title;
    document.getElementById('testimonials-grid').innerHTML = testimonials.reviews.map(review => `
        <div class="bg-slate-100 p-8 rounded-xl border border-slate-200 styled-card">
            <p class="text-slate-600 mb-6">"${review.quote}"</p>
            <div class="font-semibold text-slate-900">${review.author}</div>
            <div class="text-sm text-slate-500">${review.company}</div>
        </div>
    `).join('');

    // Client Logos
    document.getElementById('clients-title').textContent = testimonials.clients.title;
    document.getElementById('client-logos-grid').innerHTML = testimonials.clients.logos.map(logo => `
        <img src="${logo.src}" alt="${logo.alt}" class="h-10 md:h-12 client-logo" onerror="this.onerror=null;this.src='https://placehold.co/150x60/f8fafc/94a3b8?text=Logo';">
    `).join('');
    
    // CTA
    document.getElementById('cta-title').textContent = cta.title;
    document.getElementById('cta-subtitle').textContent = cta.subtitle;
    document.getElementById('cta-button').textContent = cta.button;

    // Contact
    document.getElementById('contact-title').textContent = contact.title;
    document.getElementById('contact-subtitle').textContent = contact.subtitle;
    
    // Footer
    document.getElementById('footer-copyright').textContent = footer.copyright;
    document.getElementById('footer-tagline').textContent = footer.tagline;
    document.getElementById('footer-socials').innerHTML = footer.socials.map(social => 
        `<a href="${social.href}" class="text-slate-400 hover:text-white transition" title="${social.name}">${social.icon}</a>`
    ).join('');
}

function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // "More on Modules" view toggle
    const featuresSection = document.getElementById('features');
    const modulesSection = document.getElementById('more-on-modules');
    const closeModulesBtn = document.getElementById('close-modules-view');
    
    document.getElementById('products-container').addEventListener('click', (e) => {
        if (e.target.classList.contains('view-modules-btn')) {
            featuresSection.classList.add('hidden');
            modulesSection.classList.remove('hidden');
            
            const modulesContent = content.features.moreOnModules;
            const container = document.getElementById('modules-content-container');
            container.innerHTML = `
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-slate-900">${modulesContent.title}</h2>
                    <p class="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">${modulesContent.description}</p>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${modulesContent.categories.map(cat => `
                        <div class="bg-white p-6 rounded-lg shadow-md border styled-card">
                            <h3 class="text-xl font-bold mb-4 text-cyan-700">${cat.name}</h3>
                            <ul class="space-y-2">
                                ${cat.items.map(item => `
                                    <li class="flex items-center text-slate-700">
                                        <svg class="w-4 h-4 mr-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        ${item}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            `;

            window.scrollTo({ top: modulesSection.offsetTop - document.getElementById('header').offsetHeight, behavior: 'smooth' });
        }
    });

    closeModulesBtn.addEventListener('click', () => {
        modulesSection.classList.add('hidden');
        featuresSection.classList.remove('hidden');
        window.scrollTo({ top: featuresSection.offsetTop - document.getElementById('header').offsetHeight, behavior: 'smooth' });
    });

    // Scroll Animation Observer
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    setupEventListeners();
});