const open = document.querySelector(".open-modal");
const close = document.querySelector(".close");

open.addEventListener("click", function() {
    document.body.classList.add("modal-active");
})
close.addEventListener("click", function() {
    document.body.classList.remove("modal-active");
})