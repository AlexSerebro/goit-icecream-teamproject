(() => {
    
document.getElementById("card_pink").addEventListener("click", Rotate);
document.getElementById("card_green").addEventListener("click", Rotate);
document.getElementById("card_brown").addEventListener("click", Rotate);


    function Rotate(e) {
    this.parentNode.classList.toggle('is-reversed');
    var element1 = document.getElementsByClassName("products-list__description_2");
    element1.classList.remove("visually__hidden");
    }

})();