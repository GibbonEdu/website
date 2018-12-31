// Vanilla JS

function menuToggle(id) {
    var menu = document.getElementById(id);

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
};