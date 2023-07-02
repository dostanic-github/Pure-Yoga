// Scroll Reveal Animations
const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000,
  delay: 300,
});

sr.reveal('.animated-title');
sr.reveal('.image-animation', {origin: 'bottom'});
sr.reveal('.retreat', {delay: 500, interval: 300, origin: 'top'});
