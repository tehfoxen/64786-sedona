var link = document.querySelector('.search-btn');
var popup = document.querySelector('.search-form ');

link.classList.toggle('search-button-invisible');
popup.classList.remove('search-form-visible');
popup.classList.add('search-form-invisible');

link.addEventListener('click', function (event) {
  link.classList.toggle('search-button-invisible');
  popup.classList.toggle('search-form-visible');
  popup.classList.toggle('search-form-invisible');
});

var minusAdult = document.querySelector('#minusAdult');
var plusAdult = document.querySelector('#plusAdult');
var minusChild = document.querySelector('#minusChild');
var plusChild = document.querySelector('#plusChild');
var numAdult = document.querySelector('#numAdult').value;
var numChild = document.querySelector('#numChild').value;
minusAdult.addEventListener('click', function (event) {
  event.preventDefault();
  if (numAdult > 0) {
    numAdult--;
    document.querySelector('#numAdult').value = numAdult;
  }
});

plusAdult.addEventListener('click', function (event) {
  event.preventDefault();
  numAdult++;
  document.querySelector('#numAdult').value = numAdult;
});

minusChild.addEventListener('click', function (event) {
  event.preventDefault();
  if (numChild > 0) {
    numChild--;
    document.querySelector('#numChild').value = numChild;
  }
});

plusChild.addEventListener('click', function (event) {
  event.preventDefault();
  numChild++;
  document.querySelector('#numChild').value = numChild;
});
