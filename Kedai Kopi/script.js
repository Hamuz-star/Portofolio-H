//toggles class active
const navbarnav = document.querySelector
('.navbar-nav');

//ketika bakery menu di click
document.querySelector('#bakery-menu').
onclick= () => {
    navbarnav.classList.toggle('active');

};

//klik di luar sidebar uuntuk 
//menhilangkan nav

const bakery = document.querySelector('#bakery-menu');

document.addEventListener('click', function (e) {
if (!bakery.contains(e.target)&& !navbarnav.contains(e.target))
{navbarnav.classList.remove('active'); 
}
})
