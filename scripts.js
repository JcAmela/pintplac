/* ===== Archivo: scripts.js ===== */

/* Inicializar AOS */
AOS.init({
  duration: 800,
  once: true
});
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: { delay: 3000 },
  pagination: { el: ".swiper-pagination", clickable: true },
});
/* Menú Móvil */
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

// Mostrar/Ocultar menú al hacer clic en el botón
mobileMenuButton.addEventListener('click', (e) => {
  e.stopPropagation(); // Evita que el clic se propague al document
  mobileMenu.classList.toggle('hidden');
});

// Ocultar menú al hacer clic en algún enlace del menú
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// Ocultar menú al hacer clic fuera del mismo
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && e.target !== mobileMenuButton) {
    mobileMenu.classList.add('hidden');
  }
});

/* Cookie Consent */
const cookieBanner = document.querySelector('.cookie-consent');
if (!localStorage.getItem('cookies-accepted')) {
  cookieBanner.classList.remove('hidden');
}

document.getElementById('accept-cookies').addEventListener('click', () => {
  localStorage.setItem('cookies-accepted', 'true');
  cookieBanner.classList.add('hidden');
});

/* Filtro de "Proyectos" en la pseudo-galería */
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    const filter = this.dataset.filter;

    // Activar/desactivar botón
    filterButtons.forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    // Filtrar elementos
    galleryItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

/* Inicializar lightGallery */
lightGallery(document.querySelector('.gallery'), {
  selector: '.gallery-item',
  download: false,
  zoom: true
});
