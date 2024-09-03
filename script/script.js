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

    let bionic = document.getElementById("bionic");
    
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
        let styleDark = document.querySelector("head>link");
        theme.classList.toggle("dark");
        console.warn(styleDark);
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

    // Bionic mode:

    let bionicAdded = false;
    bionic.addEventListener("click", () => {
        if (bionicAdded === false) {
            for (let ctnSmr of contentSummary) {
                let text = ctnSmr.textContent;
                console.log(text);
    
                let words = text.split(' ');
                
                // .map method is a way to have each element go through a function
                let highLightWords = words.map(function (word) {
                    let length = word.length;
                    let halfLength;
    
                    if (length % 2 === 0) {
                        halfLength = length/2;
                    }
                    else {
                        halfLength = Math.floor(length / 2) + 1;
                    }
    
                    let firstPart = word.substring(0, halfLength);
                    let secondPart = word.substring(halfLength);
        
                    return `<span class="highlight">${firstPart}</span>${secondPart}`;
                });
    
                
                ctnSmr.innerHTML = highLightWords.join(' ');
                bionicAdded = true;
            }
        }
        else {
            let highlighted = document.querySelectorAll(".content p span");
            for (let hlt of highlighted) {
                hlt.classList.toggle("highlight");
            }
        }
    });
});