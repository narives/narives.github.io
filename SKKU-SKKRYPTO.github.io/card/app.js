var containers = document.querySelectorAll('.overlay-container');

containers.forEach(function(container) {
  var overlay = container.querySelector('.overlay');
  overlay.style.opacity = '0';

  container.addEventListener('mousemove', function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    var rotateY = -1/40 * x + 5;
    var rotateX = 1/25 * y - 6;

    overlay.style = `background-position: ${x/5 + y/5}%; filter: opacity(${x/200}) brightness(1.2)`;

    container.style = `transform: perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    overlay.style.opacity = '0.9';
  });

  container.addEventListener('mouseout', function() {
    overlay.style.opacity = '0';
    container.style = 'transform: perspective(350px) rotateY(0deg) rotateX(0deg)';
  });
});
