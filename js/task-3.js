const input = document.querySelector("#name-input");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
    const output = document.querySelector("#name-output");
    output.textContent = event.currentTarget.value || "Anonymous";
}
