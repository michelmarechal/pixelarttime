window.onload = function() {  
  // Global Variables
  const color = document.querySelector('#colorSelector');
  const widthVal = document.querySelector('#width');
  const heightVal = document.querySelector('#height');
  const button = document.querySelector('#botao');
  let currentWidth;
  let currentHeight;
  let currentColor;

  // // Build the table
  function builder(){
    currentWidth = widthVal.value;
    currentHeight = heightVal.value;
    // Add rows and columns
    for (let i = 1; i <= currentHeight; i++) {
      document.querySelector('table').
    }
    


  }
  
  // // Button configuration and grid rules
  button.onclick = function(event) {
    event.preventDefault();
    if (widthVal.value < 1  || heightVal.value < 1) {
      alert("Width and height must be between 1 and 30");
    } else if (widthVal.value > 30  || heightVal.value > 30) {
      alert("Width and height must be between 1 and 30");
    } else { 
      builder();
    }
  }

  // // Change cllicked cell color
  this.onclick = function() {
    currentColor = color.value;
    let clickedEl = this.document.querySelector('td');
    if (clickedEl !== null) {
      clickedEl.style.background = color.value;
    }
  }
}