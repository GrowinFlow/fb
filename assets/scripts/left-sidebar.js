const checkBox = document.getElementById('checkBox');
const leftSidebar = document.querySelector('section .left-sidebar');

checkBox.addEventListener('change', function() {
    if (this.checked) {
        leftSidebar.style.right = '0%';
    } else {
        leftSidebar.style.right = '100%';
    }
});