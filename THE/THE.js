window.onload = function(){
    window.onscroll = function() {
        if (document.documentElement.scrollTop > 30) {
            document.getElementById("TopBtn").style.display = "block";
        } else {
            document.getElementById("TopBtn").style.display = "none";
        }
    };
    document.getElementById('TopBtn').onclick = function() {
        window.scrollTo({top: 0, behavior: 'smooth'}); 
        
    };
    
} 
