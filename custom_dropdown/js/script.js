var button = document.getElementsByClassName("listbox-button")[0];
var x = button.getAttribute("aria-expanded");
var fileType = document.getElementsByClassName("filetype")[0];
var options = document.querySelectorAll(".options");


button.onclick = function() {
    if (x == "true") {
        x = "false"
    } else {
        x = "true"
    }
    document.getElementsByClassName("listbox-button")[0].setAttribute("aria-expanded", x);
    document.getElementsByClassName("dropdown-list")[0].classList.toggle("collapsed");
}
options.forEach(element => {

    element.addEventListener("click", function() {
        fileType.innerHTML = this.textContent;
        document.getElementsByClassName("dropdown-list")[0].classList.remove("collapsed");
    });
});