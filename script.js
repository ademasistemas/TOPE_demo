// Funcionalidad para el carrusel de Sofía Boutique
document.addEventListener('DOMContentLoaded', function() {
    // Navegación del carrusel
    const carouselContainer = document.querySelector('.womens-products .carousel-container');
    const carouselNavDots = document.querySelectorAll('.womens-products .carousel-nav span');
    
    if (carouselContainer && carouselNavDots.length) {
        carouselContainer.addEventListener('scroll', function() {
            const scrollPosition = carouselContainer.scrollLeft;
            const itemWidth = carouselContainer.querySelector('.carousel-item').offsetWidth + 15; // width + margin
            const activeIndex = Math.round(scrollPosition / itemWidth);
            
            carouselNavDots.forEach((dot, index) => {
                if (index === activeIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        });
        
        // Click en los puntos de navegación
        carouselNavDots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                const itemWidth = carouselContainer.querySelector('.carousel-item').offsetWidth + 15;
                carouselContainer.scrollTo({
                    left: index * itemWidth,
                    behavior: 'smooth'
                });
            });
        });
    }
    
    // Tabs de la panadería
    const tabs = document.querySelectorAll('.bakery-alt .tab');
    
    if (tabs.length) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // Aquí se podría agregar lógica para mostrar diferentes productos
                // según la pestaña seleccionada en un escenario real
            });
        });
    }
    
    // Botón de seguir para Nova Apparel
    const followButton = document.querySelector('.clothing .follow-button');
    
    if (followButton) {
        followButton.addEventListener('click', function() {
            if (this.textContent.trim() === 'Siguiendo') {
                this.textContent = 'Seguir';
                this.style.backgroundColor = '#eee';
                this.style.color = '#333';
            } else {
                this.textContent = 'Siguiendo';
                this.style.backgroundColor = '#5D4B8C';
                this.style.color = 'white';
            }
        });
    }
    
    // Simulación de carga de más contenido al hacer scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;
        
        // Si el usuario ha llegado cerca del final de la página
        if (scrollPosition + windowHeight >= documentHeight - 200) {
            // En una aplicación real, aquí se cargarían más emprendedores
            // mediante una llamada a una API
            console.log('Cargando más emprendedores...');
        }
    });
});