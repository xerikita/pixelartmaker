// Select color input
let cellColor = document.getElementById('colorPicker');

// Select size input

// When size is submitted by the user, call makeGrid()


const grid = document.getElementById('pixelCanvas');
const form = document.querySelector('form');
const btn = form.querySelector('input[type="submit"]');
btn.addEventListener('click', makeGrid);
function makeGrid(event){
  	event.preventDefault();
    const width = document.getElementById('inputWidth').value;
    const height = document.getElementById('inputHeight').value;
    grid.innerHTML = '';
 	for (y = 0; y < height; y++){
    	let row = document.createElement('tr');
    	grid.appendChild(row);
    	for (x = 0; x < width; x++){
      		let cell = document.createElement('td');
          row.appendChild(cell);
      	};
    };
};


grid.addEventListener('click', function(evt){
  if (evt.target.nodeName === 'TD'){
    evt.target.style.backgroundColor = cellColor.value;
  }
});

grid.addEventListener('dblclick', function(evt){
  if (evt.target.nodeName === 'TD'){
    evt.target.style.backgroundColor = 'white';
  }
})
