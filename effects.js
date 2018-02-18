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

  }
  
  // Button configuration
  button.onclick = function() {
    currentWidth = widthVal.value;
    currentHeight = heightVal.value;
    console.log(currentHeight);
    console.log(currentWidth);
  }
