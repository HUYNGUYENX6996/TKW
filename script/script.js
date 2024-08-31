window.addEventListener("load", () => {
    let search = this.document.getElementById("show-login");
    let searchSh = this.document.querySelector(".search");

    search.addEventListener("click", () => {
        searchSh.classList.toggle("show");
    });
});
