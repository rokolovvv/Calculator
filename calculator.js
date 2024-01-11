const btn = document.querySelector("#button")

btn.addEventListener("click", function () {
    const a = Number(document.querySelector("#a").value)
    const b = Number(document.querySelector("#b").value)
    const res = document.querySelector("#result")
    const operation = document.querySelector('select').value
    let result = null
    if(operation == "+") {
        result = a+b
    }
    if(operation == "-") {
        result = a-b
    }
    if(operation == "*") {
        result = a*b
    }
    if(operation == "/") {
        result = a/b
    }

    res.value = result
})

function reset() {
    document.querySelector("#a").value = "";
    document.querySelector("#b").value = "";
    document.querySelector("#result").value = "";
}