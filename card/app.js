var container = document.querySelector('.container')
var overlay = document.querySelector('.overlay')
container.addEventListener('mousemove', function(e){
    var x = e.offsetX
    var y = e.offsetY
    var rotateY = -1/30 * x + 10
    var rotateX = 1/15 * y - 5

    overlay.style = `background-position : ${x/5 + y/5}%; filter : opacity(${x/200}) brightness(1.2)`

    container.style = `transform : perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })

container.addEventListener('mouseout', function(){
    overlay.style = 'filter : opacity(0)'
    container.style = 'transform : perspective(350px) rotateY(0deg) rotateX(0deg)'
    })