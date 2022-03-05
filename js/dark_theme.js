function darkm(){
    const body = document.querySelector("body")
    const btn = document.querySelector("button")

    const darkness = () => {
        if (body.getAttribute("data-mode") === "dark") {
            body.setAttribute("data-mode", "light")
            document.getElementById("button_text").innerHTML = "DARK";
        } 
        else {
            body.setAttribute("data-mode", "dark")
            document.getElementById("button_text").innerHTML = "LIGHT";
        }
    }
    btn.addEventListener("click", darkness)
}