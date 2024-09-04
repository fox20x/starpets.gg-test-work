// @ts-nocheck
function start() {
    // Dropdown  
    window.addEventListener('click', function (e) {
        var el = e.target.closest('.dropdown');
        var dropdownElems = document.querySelectorAll('.dropdown');
        dropdownElems.forEach(function (dropdownEl) {
            if (dropdownEl.getAttribute('animation'))
                return;
            if (el && el.contains(dropdownEl) && !el.classList.contains('open')) {
                var dropdownContentEl = dropdownEl.querySelector('.dropdown__content');
                dropdownContentEl.style.display = 'block';
                dropdownEl.setAttribute('animation', true);
                setTimeout(function () {
                    dropdownEl.classList.add('open');
                    dropdownEl.setAttribute('animation', '');
                }, 100);
            }
            else {
                var dropdownContentEl_1 = dropdownEl.querySelector('.dropdown__content');
                dropdownEl.classList.remove('open');
                dropdownEl.setAttribute('animation', true);
                setTimeout(function () {
                    dropdownContentEl_1.style.display = 'none';
                    dropdownEl.setAttribute('animation', '');
                }, 500);
            }
        });
    });
}
window.addEventListener('load', function () {
    start();
});
console.log('Created by 🦊 FoxDD | https://t.me/fox_dd_official');
