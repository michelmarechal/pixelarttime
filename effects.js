window.onload = function() {  
  // Global Variables
  const color = document.getElementById('colorSelector');
  const widthVal = document.getElementById('width');
  const heightVal = document.getElementById('height');
  const button = document.getElementById('botao');
  let currentWidth;
  let currentHeight;
  let currentColor;

  // Build the table
  function builder(){
    currentWidth = widthVal.value;
    currentHeight = heightVal.value;
    console.log(currentHeight);
  }
  
  // Button configuration and grid rules
  button.onclick = function() {
    event.preventDefault();
    if (widthVal.value < 1  || heightVal.value < 1) {
      alert("Width and height must be between 1 and 30");
    } else if (widthVal.value > 30  || heightVal.value > 30) {
      alert("Width and height must be between 1 and 30");
    } else { 
      builder();
    }
  }
}