// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}

// Smooth scrolling
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

// Plan selection function (à connecter avec Stripe)
function selectPlan(plan) {
    // Ici vous intégrerez l'API Stripe
    console.log('Plan sélectionné:', plan);
    
    // Prix des plans
    const prices = {
        starter: 'price_starter_id', // Remplacez par vos IDs Stripe
        pro: 'price_pro_id',
        enterprise: 'price_enterprise_id'
    };
    
    // Redirection vers Stripe Checkout (exemple)
    // window.location.href = `https://checkout.stripe.com/pay/${prices[plan]}`;
    
    // Pour l'instant, on affiche une alerte
    alert(`Vous avez sélectionné le plan ${plan.toUpperCase()}. Intégration Stripe à configurer.`);
}

// Initialize animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to stats
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        stat.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotateX(5deg)';
            this.style.transition = 'all 0.3s ease';
        });
        
        stat.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotateX(0deg)';
        });
    });

    // Add floating animation to hero
    const hero = document.querySelector('.hero-content');
    let float = 0;
    setInterval(() => {
        float += 0.02;
        hero.style.transform = `translateY(${Math.sin(float) * 3}px)`;
    }, 50);
});