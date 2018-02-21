window.onload = function() {  
  // Variables
  const color = document.querySelector('#colorSelector');
  const button = document.querySelector('#botao');
  const table = document.querySelector('#design');
  const widthVal = document.querySelector('#width');
  const heightVal = document.querySelector('#height');
  let currentWidth, currentHeight, newRow, newCell;
  // Build table
  function builder(){
    currentHeight = heightVal.value;
    currentWidth = widthVal.value;
    for (let i = 0; i < currentHeight; i++) {
      newRow = table.insertRow();
      for (let j= 0; j < currentWidth; j++ ) {
        newCell = newRow.insertCell();
        newCell.addEventListener('click', paintMe);
      }
    }
    // Change cllicked cell color
    function paintMe(event) {
      event.target.style.background = color.value;
    }
  }
  // Button configuration and grid rules
  button.addEventListener('click', function(event){ 
    table.innerHTML = '';
    event.preventDefault();
    if (widthVal.value < 1  || heightVal.value < 1) {
      alert("Width and height must be between 1 and 30");
    } else if (widthVal.value > 30  || heightVal.value > 30) {
      alert("Width and height must be between 1 and 30");
    } else { 
      document.querySelector('#yourDesign').classList.remove('hidden');
      builder();
    }
  });
}
