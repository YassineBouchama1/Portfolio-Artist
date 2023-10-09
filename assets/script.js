const toggleButton = document.getElementById("toggle");
const linksNav = document.getElementById("links");

toggleButton.addEventListener("click", function () {
    if (linksNav.classList.contains("show")) {
        linksNav.classList.remove("show");
    } else {
        linksNav.classList.add("show");
    }
});
