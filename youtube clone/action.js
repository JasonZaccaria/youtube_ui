const lines = document.querySelector('.lines_button');

const sidebar = document.querySelector('.sidebar');

lines.addEventListener('click', function () {
    sidebar.classList.toggle('close_sidebar')
});

