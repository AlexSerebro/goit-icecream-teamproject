(() => {
    
document.getElementById("card_pink").addEventListener("click", Rotate);
document.getElementById("card_green").addEventListener("click", Rotate);
document.getElementById("card_brown").addEventListener("click", Rotate);


    function Rotate(e) {
    this.parentNode.classList.toggle('is-reversed');
    
    }

})();