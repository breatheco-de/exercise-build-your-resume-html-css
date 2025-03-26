document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", function () {
            const contenido = this.parentElement.nextElementSibling;
            const icono = this.querySelector("i");

            if (contenido.style.opacity === "0" || contenido.style.opacity === "") {
                contenido.style.display = "block";
                setTimeout(() => {
                    contenido.style.opacity = 1;
                }, 10);
                icono.classList.replace("fa-chevron-down", "fa-chevron-up");
            } else {
                contenido.style.opacity = 0;
                setTimeout(() => {
                    contenido.style.display = "none";
                }, 500);
                icono.classList.replace("fa-chevron-up", "fa-chevron-down");
            }
        });
    });
});