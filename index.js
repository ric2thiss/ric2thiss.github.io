document.querySelector('.navbar-toggler').style.border = 'none';
let cursor1 = document.querySelector('.cursor1');
let cursor2 = document.querySelector('.cursor2');

document.addEventListener('mousemove', function(e) {
    cursor1.style.cssText = cursor2.style.cssText = "left:" + e.clientX + 'px; top:' + e.clientY + 'px;';
});

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
