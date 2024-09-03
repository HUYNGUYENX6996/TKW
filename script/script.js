window.addEventListener("load", () => {
    let search = document.getElementById("show-search");
    let searchSh = document.querySelector(".search");

    let searchBox = document.querySelector(".search-box");
    let contentTitle = document.querySelectorAll(".content h3");
    let contentSummary = document.querySelectorAll(".content p")
  
    let login = document.getElementById("show-login");
    let loginSh = document.querySelector(".login");
    let loginCl = document.getElementById("close-login");

    let register = document.getElementById("show-register");
    let registerSh = document.querySelector(".register");

    let home = document.getElementById("home");

    let theme = document.getElementById("theme");

    let nav = document.querySelector("nav");
    let sticky = nav.offsetTop;
    
    // Search function:

    search.addEventListener("click", () => {
        searchSh.classList.toggle("show");
        for( let ctn of contentTitle) {
            ctn.style.color = "#2f4157";
        }
    });
    
    searchBox.addEventListener("change", () => {
        console.log(searchBox.value);
        for( let ctn of contentTitle) {
            console.log(10000);
            ctn.style.color = "#2f4157";
            if (ctn.innerHTML.match(searchBox.value) && searchBox.value !== '') {
                console.log("access");
                ctn.style.color = "firebrick";
            }
        }
        for( let ctnSmr of contentSummary) {
            ctnSmr.style.color = "black";
            if (ctnSmr.innerHTML.match(searchBox.value) && searchBox.value !== '') {
                console.log("access");
                ctnSmr.style.color = "firebrick";
            }
        }
        searchBox.value = '';
    });

    // Login funciton:

    login.addEventListener("click", () => {
        loginSh.classList.toggle("show");
    });

    loginCl.addEventListener("click", () => {
        loginSh.classList.toggle("show");
    });

    register.addEventListener("click", () => {
        registerSh.classList.toggle("show");
    });

    // Back to top function:
    
    window.addEventListener("scroll", () => {
        let top = document.documentElement.scrollTop;

        if (Math.round((top*100) / (document.documentElement.clientHeight)) >= 20) {
            home.classList.add("show");
        }
        else {
            home.classList.remove("show");
        }
    });

    home.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    // Dark theme function:
    theme.addEventListener("click", () => {
        theme.classList.toggle("dark");
    });

    //
    //
    //

    // Fixed nav bar: 

    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop >= sticky) {
            nav.classList.add("sticky");
        }
        else {
            nav.classList.remove("sticky");
        }
    });
});
