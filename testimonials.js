 // Cargar testimonios desde un archivo JSON externo
  async function loadTestimonials() {
    const container = document.getElementById("testimonials-container");
    container.innerHTML = "";
    
    try {
      const response = await fetch("testimonials.json"); // Ruta al archivo JSON externo
      const testimonials = await response.json();
      
      // Barajar el array y seleccionar un orden aleatorio
      const shuffled = testimonials.sort(() => Math.random() - 0.5);
      
      shuffled.forEach(testimonial => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide bg-white shadow-md p-6 rounded-xl";
        slide.innerHTML = `
          <p class="text-gray-600 italic">"${testimonial.text}"</p>
          <p class="font-semibold text-primary mt-2">- ${testimonial.author}</p>
        `;
        container.appendChild(slide);
      });
      
      // Inicializar Swiper después de cargar los testimonios
      new Swiper(".mySwiper", {
        loop: true,
        autoplay: { delay: 3000 },
        pagination: { el: ".swiper-pagination", clickable: true },
      });
    } catch (error) {
      console.error("Error al cargar los testimonios:", error);
    }
  }

  // Cargar testimonios al cargar la página
  document.addEventListener("DOMContentLoaded", loadTestimonials);