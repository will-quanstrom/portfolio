let theme = localStorage.getItem("theme");

if (theme == null) {
    setTheme("light");
} else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (let i = 0; themeDots.length > i; i++){
    themeDots[i].addEventListener("click", function(){
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}
function setTheme(mode) {
    if(mode == "light") {
        document.getElementById("theme-style").href = "default.css";
    }
    if(mode == "blue") {
        document.getElementById("theme-style").href = "blue.css";
    }
    if(mode == "green") {
        document.getElementById("theme-style").href = "green.css";
    }
    if(mode == "purple") {
        document.getElementById("theme-style").href = "purple.css";
    }

    localStorage.setItem("theme", mode);
}

document.getElementById("submit-btn").addEventListener("click", function(event){
    event.preventDefault();
    window.alert("At this time, there is no backend hooked up to this website. If you'd like to reach me, please email me at wquanstr215@gmail.com.");

  });