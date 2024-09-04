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
    
    let signIn = document.getElementById("sign-in");
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let rePassword = document.getElementById("re-password");
    
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

    let styleDef = document.querySelector("head>link");

    if (styleDef.id !== '') {
        if (localStorage.getItem("dark-mode") === "true") {
            theme.classList.add("dark");
            console.warn(styleDef);
            styleDef.href = "/style/styledark.css";
            localStorage.setItem("dark-mode", "true");
        }
        else {
            theme.classList.remove("dark");
            console.warn(styleDef);
            styleDef.href = "/style/style.css";
            localStorage.setItem("dark-mode", "false");
        }
        
    
        theme.addEventListener("click", () => {
    
            if (localStorage.getItem("dark-mode") === "true") {
                theme.classList.remove("dark");
                console.warn(styleDef);
                styleDef.href = "/style/style.css";
                localStorage.setItem("dark-mode", "false");
            }
            else {
                theme.classList.add("dark");
                console.warn(styleDef);
                styleDef.href = "/style/styledark.css";
                localStorage.setItem("dark-mode", "true");
            }
        });
    }
    else {
        if (localStorage.getItem("dark-mode") === "true") {
            theme.classList.add("dark");
            console.warn(styleDef);
            styleDef.href = "/style/newsdark.css";
            localStorage.setItem("dark-mode", "true");
        }
        else {
            theme.classList.remove("dark");
            console.warn(styleDef);
            styleDef.href = "/style/news.css";
            localStorage.setItem("dark-mode", "false");
        }
        
    
        theme.addEventListener("click", () => {
    
            if (localStorage.getItem("dark-mode") === "true") {
                theme.classList.remove("dark");
                console.warn(styleDef);
                styleDef.href = "/style/news.css";
                localStorage.setItem("dark-mode", "false");
            }
            else {
                theme.classList.add("dark");
                console.warn(styleDef);
                styleDef.href = "/style/newsdark.css";
                localStorage.setItem("dark-mode", "true");
            }
        });
    }

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

    // Login function:

    signIn.addEventListener("click", () => {
        if (registerSh.classList.contains("show")) {
            if(password.value === rePassword.value && rePassword !== '') {
                if (username.value !== '') {
                    alert("Bạn đã đăng ký thành công!!");
                    localStorage.setItem("name", username.value);
                    localStorage.setItem("password", password.value);
                }
                else {
                    alert("Vui lòng nhập tên đăng nhập");
                }
            }
            else {
                alert("Vui lòng kiểm tra lại mật khẩu");
            }
        }
        else {
            if (localStorage.getItem("name") === (username.value)) {
                if (localStorage.getItem("password") === (password.value)) {
                    alert("Bạn đã đăng nhập thành công!");
                }
                else if (password.value === '') {
                    alert("Hãy nhập mật khẩu!");
                }
                else {
                    alert("Mật khẩu không hợp lệ!");
                }
            }
            else {
                alert("Vui lòng nhập lại tên đăng nhập!");
            }
        }
    });

});

function Menubar() {
    const Tools = document.querySelector(".tools");

    if (Tools.classList.contains("active")) {
        Tools.classList.remove("active");
        Tools.style.maxHeight = "0";
    } else {
        Tools.classList.add("active");
        Tools.style.maxHeight = Tools.scrollHeight + "px";
    }

    window.onscroll = function(){
        const tool =document.querySelector(".tools");
        if(tool.classList.contains("active")){
            tool.classList.remove("active");
            tool.style.maxHeight = "0";
        }

        // const right = document.querySelector("nav.flex>right");
        // if(window.scrollY > 0){
        //     right.style.display = "none"
        // }else{
        //     right.style.display = "block"
        // }
    }
}

