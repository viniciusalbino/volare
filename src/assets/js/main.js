// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach((element) => {
    observer.observe(element);
});

// Testimonial carousel
document.addEventListener('alpine:init', () => {
    Alpine.data('testimonialCarousel', () => ({
        currentSlide: 0,
        slides: [],
        autoPlayInterval: null,
        
        init() {
            this.slides = this.$el.querySelectorAll('[data-slide]');
            this.startAutoPlay();
        },

        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        },

        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        },

        startAutoPlay() {
            this.autoPlayInterval = setInterval(() => this.nextSlide(), 6000);
        },

        stopAutoPlay() {
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
            }
        }
    }));
});

// FAQ Accordion
document.addEventListener('alpine:init', () => {
    Alpine.data('faqAccordion', () => ({
        open: [false, false, false, false],

        toggle(index) {
            this.open[index] = !this.open[index];
        }
    }));
}); 