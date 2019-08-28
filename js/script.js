function parallax(event) {
  this.querySelectorAll('.abc').forEach(layer => {
    let speed = layer.getAttribute('data-speed');
    layer.style.transform = `translateX(${event.clientX*speed/800}px`
  });
}
document.addEventListener('mousemove', parallax);