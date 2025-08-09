
    const btn = document.getElementById('backToTop');
    window.onscroll = () => {
      btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    };
    btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  document.addEventListener("DOMContentLoaded", function() {
    if (lightbox) {
      lightbox.option({
        resizeDuration: 200,
        wrapAround: true
      });
    }
  });

