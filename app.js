 const burger = document.querySelector('#burger');
 const menu = document.querySelector('#menu');

 /*нове*/
const closeBtn = document.querySelector('.close-btn');
const burgerItems = document.querySelectorAll('.burger-item');


 burger.addEventListener('click', () => { 
 	/*menu.classList.toggle('disp');*/

 	menu.style.display = 'block';
    setTimeout(() => {
        menu.style.right = '0';
    }, 100);

});

/*closeBtn.addEventListener('click', () => {
    menu.style.right = '-250px';
    setTimeout(() => {
        menu.style.display = 'none';
    }, 500);
});*/

 closeBtn.addEventListener('click', () => {
    closeMenu();
});

burgerItems.forEach((item) => {
    item.addEventListener('click', () => {
        closeMenu();
    });
});

function closeMenu() {
    menu.style.right = '-250px';
    setTimeout(() => {
        menu.style.display = 'none';
    }, 500);
}

