window.addEventListener("load", () => {
    let search = document.getElementById("show-search");
    let searchSh = document.querySelector(".search");

    search.addEventListener("click", () => {
        searchSh.classList.toggle("show");
        for( let ctn of contentTitle) {
            ctn.style.color = "black";
        }
    });
    
    let searchBox = document.querySelector(".search-box");
    let contentTitle = document.querySelectorAll(".content h3");
    let contentSummary = document.querySelectorAll(".content summary")
    
    searchBox.addEventListener("change", () => {
        console.log(searchBox.value);
        for( let ctn of contentTitle) {
            console.log(10000);
            ctn.style.color = "black";
            if (ctn.innerHTML.match(searchBox.value) && searchBox.value !== '') {
                console.log("access");
                ctn.style.color = "lightblue";
            }
        }
        for( let ctnSmr of contentSummary) {
            ctnSmr.style.color = "black";
            if (ctnSmr.innerHTML.match(searchBox.value) && searchBox.value !== '') {
                console.log("access");
                ctnSmr.style.color = "lightblue";
            }
        }
        searchBox.value = '';
    })

});
