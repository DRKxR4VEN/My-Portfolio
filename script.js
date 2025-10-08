// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const heroButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .space-button');

// Translation System
const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-showcase': 'Showcase',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-greeting': 'Hello, I\'m',
        'hero-description': 'A 2nd year IT student at LHU, passionate about user interface design and creating amazing digital experiences with creativity and aesthetics.',
        'btn-explore': 'EXPLORE',
        'btn-view-cv': 'View CV',
        
        // About Section
        'about-title': 'About',
        'about-subtitle': 'Learn more about me',
        'about-age': '19 years old (10/11/2006)',
        'about-education': '2nd year student - Lac Hong University',
        'about-major': 'Major: IT - UX/UI Design',
        'about-me-title': 'About Me',
        'about-me-content': 'A student passionate about UI/UX design with high creative ability and aesthetic thinking. I always seek new ways to create amazing user experiences through the combination of technology and art.',
        'strengths-title': 'Strengths',
        'strength-creative': 'Creative Design',
        'strength-user': 'User Thinking',
        'strength-responsive': 'Responsive Design',
        'strength-english': 'Fluent in English',
        
        // Skills Section
        'skills-title': 'Skills',
        'skills-subtitle': 'Technologies and tools I use',
        
        // Showcase Section
        'showcase-title': 'Showcase',
        'showcase-subtitle': 'Experience modern technology',
        'showcase-card-text': 'Experience portfolio with modern 3D technology and glass morphism',
        'showcase-info-title': '3D Interactive Experience',
        'showcase-info-content': 'Explore portfolio with modern 3D technology, glass morphism and smooth interactive effects. Hover over the card to experience amazing 3D effects!',
        
        // Projects Section
        'projects-title': 'Projects',
        'projects-subtitle': 'Some of my featured projects',
        'project-discord-desc': 'Design Discord server interface with professional UI/UX',
        'project-video-desc': 'Produce video content with OBS Studio and professional editing',
        'project-3d-desc': 'Design 3D maps in Roblox Studio with focus on UX',
        
        // Contact Section
        'contact-title': 'Contact',
        'contact-subtitle': 'Get in touch with me',
        'contact-university': 'University',
        'contact-location': 'Location',
        'contact-location-value': 'Vietnam',
        'form-name': 'Your name',
        'form-email': 'Your email',
        'form-subject': 'Subject',
        'form-message': 'Your message',
        'form-send': 'Send Message',
        
        // Footer
        'footer-rights': 'All rights reserved.',
        
        // Notifications
        'notification-fill-info': 'Please fill in all information!',
        'notification-invalid-email': 'Invalid email!',
        'notification-sent': 'Message sent successfully!',
        'notification-opening': 'Opening',
        
        // Additional missing translations
        'notification-switch-english': 'Switched to English',
        'notification-switch-vietnamese': 'Switched to Vietnamese'
    },
    vi: {
        // Navigation
        'nav-home': 'Trang chủ',
        'nav-about': 'Giới thiệu',
        'nav-skills': 'Kỹ năng',
        'nav-showcase': 'Trưng bày',
        'nav-projects': 'Dự án',
        'nav-contact': 'Liên hệ',
        
        // Hero Section
        'hero-greeting': 'Xin chào, tôi là',
        'hero-description': 'Sinh viên năm 2 chuyên ngành CNTT tại LHU, đam mê thiết kế giao diện người dùng và tạo ra những trải nghiệm số tuyệt vời với sự sáng tạo và thẩm mỹ.',
        'btn-explore': 'EXPLORE',
        'btn-view-cv': 'Xem CV',
        
        // About Section
        'about-title': 'Giới thiệu',
        'about-subtitle': 'Tìm hiểu thêm về tôi',
        'about-age': '19 tuổi (10/11/2006)',
        'about-education': 'Sinh viên năm 2 - Lạc Hồng University',
        'about-major': 'Chuyên ngành: CNTT - UX/UI Design',
        'about-me-title': 'Về tôi',
        'about-me-content': 'Sinh viên đam mê thiết kế UI/UX với khả năng sáng tạo và tư duy thẩm mỹ cao. Tôi luôn tìm kiếm những cách mới để tạo ra trải nghiệm người dùng tuyệt vời thông qua việc kết hợp giữa công nghệ và nghệ thuật.',
        'strengths-title': 'Điểm mạnh',
        'strength-creative': 'Thiết kế sáng tạo',
        'strength-user': 'Tư duy người dùng',
        'strength-responsive': 'Responsive Design',
        'strength-english': 'Thông thạo tiếng Anh',
        
        // Skills Section
        'skills-title': 'Kỹ năng',
        'skills-subtitle': 'Công nghệ và công cụ tôi sử dụng',
        
        // Showcase Section
        'showcase-title': 'Trưng bày',
        'showcase-subtitle': 'Trải nghiệm công nghệ hiện đại',
        'showcase-card-text': 'Trải nghiệm portfolio với công nghệ 3D và glass morphism hiện đại',
        'showcase-info-title': 'Trải nghiệm 3D Interactive',
        'showcase-info-content': 'Khám phá portfolio với công nghệ 3D hiện đại, glass morphism và hiệu ứng tương tác mượt mà. Hover vào card để trải nghiệm hiệu ứng 3D tuyệt vời!',
        
        // Projects Section
        'projects-title': 'Dự án',
        'projects-subtitle': 'Một số dự án nổi bật của tôi',
        'project-discord-desc': 'Thiết kế giao diện server Discord với UI/UX chuyên nghiệp',
        'project-video-desc': 'Sản xuất video content với OBS Studio và editing chuyên nghiệp',
        'project-3d-desc': 'Thiết kế bản đồ 3D trong Roblox Studio với focus vào UX',
        
        // Contact Section
        'contact-title': 'Liên hệ',
        'contact-subtitle': 'Liên hệ với tôi',
        'contact-university': 'Trường học',
        'contact-location': 'Địa chỉ',
        'contact-location-value': 'Việt Nam',
        'form-name': 'Tên của bạn',
        'form-email': 'Email của bạn',
        'form-subject': 'Chủ đề',
        'form-message': 'Tin nhắn của bạn',
        'form-send': 'Gửi tin nhắn',
        
        // Footer
        'footer-rights': 'Tất cả quyền được bảo lưu.',
        
        // Notifications
        'notification-fill-info': 'Vui lòng điền đầy đủ thông tin!',
        'notification-invalid-email': 'Email không hợp lệ!',
        'notification-sent': 'Tin nhắn đã được gửi thành công!',
        'notification-opening': 'Đang mở',
        
        // Additional missing translations
        'notification-switch-english': 'Chuyển sang tiếng Anh',
        'notification-switch-vietnamese': 'Chuyển sang tiếng Việt'
    }
};

let currentLanguage = 'en';

// Translation Functions
function translateText(key) {
    return translations[currentLanguage][key] || key;
}

function updateLanguageButton() {
    const languageBtn = document.getElementById('language-btn');
    const languageSpan = languageBtn.querySelector('span');
    languageSpan.textContent = currentLanguage === 'en' ? 'EN' : 'VN';
}

function translatePage() {
    // Navigation
    const homeLink = document.querySelector('a[href="#home"]');
    const aboutLink = document.querySelector('a[href="#about"]');
    const skillsLink = document.querySelector('a[href="#skills"]');
    const showcaseLink = document.querySelector('a[href="#showcase"]');
    const projectsLink = document.querySelector('a[href="#projects"]');
    const contactLink = document.querySelector('a[href="#contact"]');
    
    if (homeLink) homeLink.textContent = translateText('nav-home');
    if (aboutLink) aboutLink.textContent = translateText('nav-about');
    if (skillsLink) skillsLink.textContent = translateText('nav-skills');
    if (showcaseLink) showcaseLink.textContent = translateText('nav-showcase');
    if (projectsLink) projectsLink.textContent = translateText('nav-projects');
    if (contactLink) contactLink.textContent = translateText('nav-contact');
    
    // Hero Section
    const heroGreeting = document.querySelector('.hero-title .gradient-text');
    const heroDescription = document.querySelector('.hero-description');
    const viewCvBtn = document.querySelector('.btn-secondary span');
    
    if (heroGreeting) heroGreeting.textContent = translateText('hero-greeting');
    if (heroDescription) heroDescription.textContent = translateText('hero-description');
    if (viewCvBtn) viewCvBtn.textContent = translateText('btn-view-cv');
    
    // About Section
    const aboutTitle = document.querySelector('#about .section-title');
    const aboutSubtitle = document.querySelector('#about .section-subtitle');
    const aboutAge = document.querySelector('.detail-item:nth-child(1) span');
    const aboutEducation = document.querySelector('.detail-item:nth-child(2) span');
    const aboutMajor = document.querySelector('.detail-item:nth-child(3) span');
    const aboutMeTitle = document.querySelector('.section-title-cv:nth-of-type(1)');
    const aboutMeContent = document.querySelector('.section-content');
    const strengthsTitle = document.querySelector('.section-title-cv:nth-of-type(2)');
    const strengthCreative = document.querySelector('.strength-item:nth-child(1) span');
    const strengthUser = document.querySelector('.strength-item:nth-child(2) span');
    const strengthResponsive = document.querySelector('.strength-item:nth-child(3) span');
    const strengthEnglish = document.querySelector('.strength-item:nth-child(4) span');
    
    if (aboutTitle) aboutTitle.textContent = translateText('about-title');
    if (aboutSubtitle) aboutSubtitle.textContent = translateText('about-subtitle');
    if (aboutAge) aboutAge.textContent = translateText('about-age');
    if (aboutEducation) aboutEducation.textContent = translateText('about-education');
    if (aboutMajor) aboutMajor.textContent = translateText('about-major');
    if (aboutMeTitle) aboutMeTitle.textContent = translateText('about-me-title');
    if (aboutMeContent) aboutMeContent.textContent = translateText('about-me-content');
    if (strengthsTitle) strengthsTitle.textContent = translateText('strengths-title');
    if (strengthCreative) strengthCreative.textContent = translateText('strength-creative');
    if (strengthUser) strengthUser.textContent = translateText('strength-user');
    if (strengthResponsive) strengthResponsive.textContent = translateText('strength-responsive');
    if (strengthEnglish) strengthEnglish.textContent = translateText('strength-english');
    
    // Skills Section
    const skillsTitle = document.querySelector('#skills .section-title');
    const skillsSubtitle = document.querySelector('#skills .section-subtitle');
    
    if (skillsTitle) skillsTitle.textContent = translateText('skills-title');
    if (skillsSubtitle) skillsSubtitle.textContent = translateText('skills-subtitle');
    
    // Showcase Section
    const showcaseTitle = document.querySelector('#showcase .section-title');
    const showcaseSubtitle = document.querySelector('#showcase .section-subtitle');
    const showcaseCardText = document.querySelector('.content .text');
    const showcaseInfoTitle = document.querySelector('.showcase-info h3');
    const showcaseInfoContent = document.querySelector('.showcase-info p');
    
    if (showcaseTitle) showcaseTitle.textContent = translateText('showcase-title');
    if (showcaseSubtitle) showcaseSubtitle.textContent = translateText('showcase-subtitle');
    if (showcaseCardText) showcaseCardText.textContent = translateText('showcase-card-text');
    if (showcaseInfoTitle) showcaseInfoTitle.textContent = translateText('showcase-info-title');
    if (showcaseInfoContent) showcaseInfoContent.textContent = translateText('showcase-info-content');
    
    // Projects Section
    const projectsTitle = document.querySelector('#projects .section-title');
    const projectsSubtitle = document.querySelector('#projects .section-subtitle');
    const projectDiscordDesc = document.querySelector('.project-card:nth-child(1) .project-content p');
    const projectVideoDesc = document.querySelector('.project-card:nth-child(2) .project-content p');
    const project3dDesc = document.querySelector('.project-card:nth-child(3) .project-content p');
    
    if (projectsTitle) projectsTitle.textContent = translateText('projects-title');
    if (projectsSubtitle) projectsSubtitle.textContent = translateText('projects-subtitle');
    if (projectDiscordDesc) projectDiscordDesc.textContent = translateText('project-discord-desc');
    if (projectVideoDesc) projectVideoDesc.textContent = translateText('project-video-desc');
    if (project3dDesc) project3dDesc.textContent = translateText('project-3d-desc');
    
    // Contact Section
    const contactTitle = document.querySelector('#contact .section-title');
    const contactSubtitle = document.querySelector('#contact .section-subtitle');
    const contactUniversity = document.querySelector('.contact-item:nth-child(2) h4');
    const contactLocation = document.querySelector('.contact-item:nth-child(3) h4');
    const contactLocationValue = document.querySelector('.contact-item:nth-child(3) p');
    const formName = document.querySelector('input[placeholder*="name"]');
    const formEmail = document.querySelector('input[placeholder*="email"]');
    const formSubject = document.querySelector('input[placeholder*="Subject"]');
    const formMessage = document.querySelector('textarea');
    const formSend = document.querySelector('.space-button span');
    
    if (contactTitle) contactTitle.textContent = translateText('contact-title');
    if (contactSubtitle) contactSubtitle.textContent = translateText('contact-subtitle');
    if (contactUniversity) contactUniversity.textContent = translateText('contact-university');
    if (contactLocation) contactLocation.textContent = translateText('contact-location');
    if (contactLocationValue) contactLocationValue.textContent = translateText('contact-location-value');
    if (formName) formName.placeholder = translateText('form-name');
    if (formEmail) formEmail.placeholder = translateText('form-email');
    if (formSubject) formSubject.placeholder = translateText('form-subject');
    if (formMessage) formMessage.placeholder = translateText('form-message');
    if (formSend) formSend.textContent = translateText('form-send');
    
    // Footer
    const footerText = document.querySelector('.footer-text p');
    if (footerText) footerText.textContent = `© 2024 Portfolio. ${translateText('footer-rights')}`;
    
    // Update language button
    updateLanguageButton();
}

// Language Toggle
document.addEventListener('DOMContentLoaded', () => {
    const languageBtn = document.getElementById('language-btn');
    if (languageBtn) {
        languageBtn.addEventListener('click', () => {
            currentLanguage = currentLanguage === 'en' ? 'vi' : 'en';
            translatePage();
            
            // Update HTML lang attribute
            document.documentElement.lang = currentLanguage;
            
            // Show notification
            const message = currentLanguage === 'en' ? translateText('notification-switch-english') : translateText('notification-switch-vietnamese');
            showNotification(message, 'info');
        });
    }
});

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe all sections for animation
sections.forEach(section => {
    observer.observe(section);
});

// Button hover effects
heroButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        if (button.classList.contains('space-button')) {
            button.style.transform = 'translateY(-1px) translateZ(0)';
        } else {
            button.style.transform = 'translateY(-2px) scale(1.05)';
        }
    });
    
    button.addEventListener('mouseleave', () => {
        if (button.classList.contains('space-button')) {
            button.style.transform = 'translateY(0) translateZ(0)';
        } else {
            button.style.transform = 'translateY(0) scale(1)';
        }
    });
});

// Skill items animation
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Project cards animation
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
    
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Contact form handling
const contactForm = document.querySelector('.form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification(translateText('notification-fill-info'), 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification(translateText('notification-invalid-email'), 'error');
            return;
        }
        
        // Simulate form submission
        showNotification(translateText('notification-sent'), 'success');
        contactForm.reset();
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' : 
                     type === 'error' ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' : 
                     'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const stars = document.querySelector('.stars');
    
    if (hero && stars) {
        const rate = scrolled * -0.5;
        stars.style.transform = `translateY(${rate}px)`;
    }
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title .gradient-text');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Observe stats for counter animation
const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.textContent);
            animateCounter(entry.target, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// Smooth reveal animation for sections
const revealElements = document.querySelectorAll('.section-title, .section-subtitle, .skill-category, .project-card, .contact-item');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(element);
});

// Add floating animation to profile card
const profileCard = document.querySelector('.profile-card');
if (profileCard) {
    setInterval(() => {
        profileCard.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            profileCard.style.transform = 'translateY(0)';
        }, 2000);
    }, 4000);
}

// Add click effect to buttons
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn-primary, .btn-secondary, .skill-item, .project-card')) {
        const ripple = document.createElement('span');
        const rect = e.target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        e.target.style.position = 'relative';
        e.target.style.overflow = 'hidden';
        e.target.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Preloader (optional)
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// HUD Card Interactions
const hudCard = document.querySelector('.parent');
const socialButtons = document.querySelectorAll('.social-button');
const viewMoreButton = document.querySelector('.view-more-button');


// Enhanced HUD hover effects
if (hudCard) {
    hudCard.addEventListener('mouseenter', () => {
        // Add subtle animation to showcase info
        const showcaseInfo = document.querySelector('.showcase-info');
        if (showcaseInfo) {
            showcaseInfo.style.transform = 'translateX(10px)';
            showcaseInfo.style.transition = 'transform 0.3s ease';
        }
    });
    
    hudCard.addEventListener('mouseleave', () => {
        const showcaseInfo = document.querySelector('.showcase-info');
        if (showcaseInfo) {
            showcaseInfo.style.transform = 'translateX(0)';
        }
    });
}

// Social button interactions
socialButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Add click animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
        
        // Show notification based on button
        const platforms = ['Instagram', 'Twitter', 'Discord'];
        showNotification(`${translateText('notification-opening')} ${platforms[index]}...`, 'info');
    });
});

// View more button interaction
if (viewMoreButton) {
    viewMoreButton.addEventListener('click', () => {
        // Scroll to projects section
        const projectsSection = document.querySelector('#projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // Add click animation
        viewMoreButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            viewMoreButton.style.transform = '';
        }, 150);
    });
}

// Feature items animation on scroll
const featureItems = document.querySelectorAll('.feature-item');
const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.1 });

featureItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    featureObserver.observe(item);
});


// Console welcome message
console.log('%c🚀 Portfolio Website Loaded Successfully!', 'color: #667eea; font-size: 16px; font-weight: bold;');
console.log('%c💻 Built with modern web technologies', 'color: #4facfe; font-size: 14px;');
console.log('%c✨ Enjoy the experience!', 'color: #764ba2; font-size: 14px;');
console.log('%c🎮 HUD Card 3D Interactive Ready!', 'color: #00ffd6; font-size: 14px;');
console.log('%c⬆️ Back to Top Button Ready!', 'color: #ff6b9d; font-size: 14px;');
