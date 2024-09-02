window.onload = function(){
    window.onscroll = function() {
        if ( document.documentElement.scrollTop > 30) {
            document.getElementById("TopBtn").style.display = "block";
        } else {
            document.getElementById("TopBtn").style.display = "none";
        }
    };
    document.getElementById('TopBtn').onclick = function() {
        window.scrollTo({top: 0, behavior: 'smooth'}); 
    };
    
    let search = document.getElementById("show-search");
    let searchSh = document.querySelector(".search");

    let searchBox = document.querySelector(".search-box");
    let contentTitle = document.querySelectorAll(".content h3");
    let contentSummary = document.querySelectorAll(".content summary")
  
    let login = document.getElementById("show-login");
    let loginSh = document.querySelector(".login");
    let loginCl = document.getElementById("close-login");

    let register = document.getElementById("show-register");
    let registerSh = document.querySelector(".register");

    search.addEventListener("click", () => {
        searchSh.classList.toggle("show");
        for( let ctn of contentTitle) {
            ctn.style.color = "black";
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

    login.addEventListener("click", () => {
        loginSh.classList.toggle("show");
    });

    loginCl.addEventListener("click", () => {
        loginSh.classList.toggle("show");
    });

    register.addEventListener("click", () => {
        registerSh.classList.toggle("show");
    });
} 

