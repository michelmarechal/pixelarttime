window.onload = function() {  
  // Variables
  const color = document.querySelector('#colorSelector');
  const button = document.querySelector('#botao');
  const table = document.querySelector('#design');
  let widthVal = document.querySelector('#width').value;
  let heightVal = document.querySelector('#height').value;
  let currentColor, newRow, newCell;
  // Build table
  function builder(){
    table.innerHTML = '';
    for (let i = 0; i < heightVal; i++) {
      newRow = table.insertRow();
      for (let j= 0; j < widthVal; j++ ) {
        newCell = newRow.insertCell();
        newCell.onclick = paintMe;
      }
    }
    // Change cllicked cell color
    function paintMe() {
      this.style.background = color.value;
    }
  }
  // Button configuration and grid rules
  button.onclick = function(event) {
    event.preventDefault();
    if (widthVal.value < 1  || heightVal.value < 1) {
      alert("Width and height must be between 1 and 30");
    } else if (widthVal.value > 30  || heightVal.value > 30) {
      alert("Width and height must be between 1 and 30");
    } else { 
      builder();
    }
    document.querySelector('#yourDesign').classList.remove('hidden');
  }
}