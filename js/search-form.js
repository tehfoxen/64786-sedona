var link = document.querySelector('.search-btn');
var popup= document.querySelector('.search-form ');

link.classList.toggle('.search-btn');
popup.classList.remove('.search-form');
popup.classList.add('search-form-visible');
popup.classList.add('search-form-invisible');

link.addEventListener('click', function(event) {
    link.classList.toggle('.search-btn');
    popup.classList.remove('.search-form');
    popup.classList.toggle('search-form-visible');
    popup.classList.toggle('search-form-invisible');
});