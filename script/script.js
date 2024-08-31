window.addEventListener("load", () => {
    let search = document.getElementById("show-search");
    let searchSh = document.querySelector(".search");

    search.addEventListener("click", () => {
        searchSh.classList.toggle("show");
    });
});
