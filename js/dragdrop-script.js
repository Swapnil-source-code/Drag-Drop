const lists = document.getElementsByClassName('list');
const leftBox = document.getElementById('left');
const rightBox = document.getElementById('right');

for(list of lists){
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;
    
    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    rightBox.addEventListener("drop", function (s) {
      rightBox.appendChild(selected);
      selected = null;
    });
    
    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    leftBox.addEventListener("drop", function (s) {
      leftBox.appendChild(selected);
      selected = null;
    });

  })
}

