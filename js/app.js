function menuToggle() {
    document.getElementById('mobile-menu').classList.toggle('open');
}

window.onload = function(){
    document.getElementById("mobile-menu").addEventListener( 'click', menuToggle);
}