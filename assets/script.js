const toggleButton = document.getElementById("toggle");
const linksNav = document.getElementById("links");

toggleButton.addEventListener("click", function () {
    //if navbar appear hide it if not display it
    if (linksNav.classList.contains("show")) {
        linksNav.classList.remove("show");
    } else {
        linksNav.classList.add("show");
    }
});
