let form = document.getElementById("sheetdb-form"),
input_name = document.querySelector(".input_name"),
input_phone = document.querySelector(".input_phone"),
input_company = document.querySelector(".input_company")
open_tick = document.getElementById("popup")

form.addEventListener("submit", e => {
        e.preventDefault()
        fetch(form.action, {
            method: "Post",
            body: new FormData(document.getElementById("sheetdb-form"))
        }).then(
            response => response.json()
        )
        
        open_pop()
        render()
})




function open_pop() {
    open_tick.classList.add("open-pup")
}

function close_pop() {
    open_tick.classList.remove("open-pup")
}





function render() {
    input_company.value = ""
    input_name.value = ""
    input_phone.value = ""
}