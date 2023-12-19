function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters.mathFloor(Math.random() * 16);
  }
  return color;
}

document.body.addEventListener('click', function() {
  document.body.style.backgroundColor = randomColor();
});