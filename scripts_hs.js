

const slider = document.getElementById('myRange');
slider.addEventListener('input', handleChange);


function handleChange(e) {
  const img = document.getElementById("fore");
  const {value, max} = e.target;
  img.style.width = `${value*0.09*max}px`;
}

var slider1 = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider1.value;
slider1.oninput = function(){
  output.innerHTML = this.value;
}


// function handleChange(e) {
//   const img = document.getElementsByClassName(".foreground-image");
//   const {value, max} = e.target;
//   img.style.width = `${value*max}px`;
// }
//
// const img = document.getElementsByClassName(".foreground-image");
// $(".foreground-image").css("width", "output.innerHTML%")
