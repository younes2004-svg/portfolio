// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS
    emailjs.init("YOUR_USER_ID"); // Will be configured via README instructions

    // Preloader
    window.addEventListener('load', () => {
        document.body.classList.remove('loading');
        document.querySelector('.preloader').style.display = 'none';
        initParticles();
    });

    // Initialize particles.js
    function initParticles() {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#00ff9d" },
                shape: { type: "circle" },
                opacity: {
                    value: 0.5,
                    random: true,
                    animation: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
                },
                size: {
                    value: 3,
                    random: true,
                    animation: { enable: true, speed: 2, size_min: 0.1, sync: false }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#00ff9d",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 1 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }

    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
        cursorFollower.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
    });

    // Aurora effect
    const createAurora = () => {
        const aurora = document.querySelector('.aurora-container');
        const fragment = document.createDocumentFragment();
        
        for (let i = 0; i < 5; i++) {
            const auroraLayer = document.createElement('div');
            auroraLayer.className = 'aurora-layer';
            auroraLayer.style.cssText = `
                position: absolute;
                width: 200%;
                height: 200%;
                background: radial-gradient(
                    circle at ${Math.random() * 100}% ${Math.random() * 100}%,
                    var(--aurora-color-1),
                    var(--aurora-color-2) 50%,
                    transparent 100%
                );
                opacity: 0.${Math.floor(Math.random() * 5) + 3};
                transform: translate(-50%, -50%);
                animation: aurora ${10 + i * 5}s linear infinite;
            `;
            fragment.appendChild(auroraLayer);
        }
        
        aurora.appendChild(fragment);
    };

    createAurora();

    // Typing effect
    const typingText = document.querySelector('.typing');
    const words = ['Web Developer', 'Database Specialist', 'Logo Designer', 'PPT/Word/Excel Expert'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingDelay = 2000; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingDelay = 500; // Pause before starting new word
        } else {
            typingDelay = isDeleting ? 50 : 100;
        }

        setTimeout(type, typingDelay);
    }

    setTimeout(type, 1000);

    // Floating icons
    const addFloatingIcons = () => {
        const icons = ['💻', '🎨', '📊', '✨'];
        const container = document.querySelector('.floating-icons');
        
        icons.forEach((icon, index) => {
            const iconElement = document.createElement('div');
            iconElement.textContent = icon;
            iconElement.style.cssText = `
                position: absolute;
                font-size: 2rem;
                animation: float ${3 + index}s ease-in-out infinite;
                left: ${20 + index * 20}%;
                top: ${30 + index * 10}%;
            `;
            container.appendChild(iconElement);
        });
    };

    addFloatingIcons();

    // Skills animation
    const skills = [
        { name: 'Web Development', level: 90 },
        { name: 'Database Management', level: 85 },
        { name: 'Logo Design', level: 80 },
        { name: 'Microsoft Office', level: 95 }
    ];

    const skillsContainer = document.querySelector('.skills-container');
    
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        skillElement.innerHTML = `
            <div class="skill-name">${skill.name}</div>
            <div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.level}%"></div>
            </div>
        `;
        skillsContainer.appendChild(skillElement);
    });

    // Animate skills on scroll
    const animateSkills = () => {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
            bar.style.transform = 'scaleX(1)';
        });
    };

    // Portfolio items
    const portfolioItems = [
        {
            title: 'Web Project 1',
            category: 'Web Development',
            image: 'images/portfolio1.jpg',
            description: 'A modern web application showcasing responsive design and user experience.'
        },
        // Add more portfolio items here
    ];

    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="portfolio-img">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
        
        // Add click event for modal
        portfolioItem.addEventListener('click', () => showModal(item));
    });

    // Modal functionality
    const modal = document.getElementById('portfolio-modal');
    const closeModal = document.querySelector('.close-modal');

    function showModal(item) {
        const modalBody = modal.querySelector('.modal-body');
        modalBody.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            <img src="${item.image}" alt="${item.title}" style="max-width: 100%;">
        `;
        modal.style.display = 'block';
    }

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Testimonials carousel
    const testimonials = [
        {
            text: "Amazing work! The attention to detail and creativity exceeded my expectations.",
            author: "John Doe"
        },
        // Add more testimonials here
    ];

    let currentTestimonial = 0;
    const testimonialsContainer = document.querySelector('.testimonials-carousel');

    function showTestimonial(index) {
        testimonialsContainer.innerHTML = `
            <div class="testimonial-item">
                <p class="testimonial-text">${testimonials[index].text}</p>
                <p class="testimonial-author">- ${testimonials[index].author}</p>
            </div>
        `;
    }

    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);

    showTestimonial(0);

    // Contact form
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const templateParams = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(() => {
                alert('Message sent successfully!');
                contactForm.reset();
            })
            .catch(() => {
                alert('Failed to send message. Please try again.');
            });
    });

    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    function setTheme(theme) {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.className;
        const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';
        setTheme(newTheme);
    });

    // Set initial theme
    const savedTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark-mode' : 'light-mode');
    setTheme(savedTheme);

    // Update copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Achievement counters
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    achievementCards.forEach(card => {
        const countElement = card.querySelector('.achievement-count');
        const targetCount = parseInt(card.dataset.count);
        
        gsap.to(countElement, {
            innerHTML: targetCount,
            duration: 2,
            snap: { innerHTML: 1 },
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                once: true
            }
        });
    });

    // Scroll animations with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Animate sections on scroll
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                once: true
            }
        });
    });

    // Parallax effect
    gsap.utils.toArray('.parallax').forEach(element => {
        gsap.to(element, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });
});

// Create minified version for production use
