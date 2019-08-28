function parallax(event) {
  this.querySelectorAll('.abc').forEach(layer => {
    let speed = layer.getAttribute('data-speed');
    layer.style.transform = `translateX(${event.clientX*speed/800}px`
  });
}
document.addEventListener('mousemove', parallax);
let white = '#fff';
let run = document.querySelector('.heading');
  run.onclick = function () {
      if (this.style.color) 
        this.style.color = ''; 
        else 
          this.style.color = '#005560';
               
  }