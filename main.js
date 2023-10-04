let form = document.getElementById("sheetdb-form");

form.addEventListener("submit", e => {
        e.preventDefault()

        fetch(form.action, {
            method: "Post",
            body: new FormData(document.getElementById("sheetdb-form"))
        }).then(
            response => response.json()
        )
})