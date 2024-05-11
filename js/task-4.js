const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("All form fields must be filled in");
    }
    const formData = {
        email: email.value,
        password: password.value,
    };
    console.log(formData);
    event.currentTarget.reset();
}


