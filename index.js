document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("username");
    const resultContainer = document.getElementById("resultCont");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Validate email using regular expression
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = pattern.test(emailInput.value);
        
        // Display validation result
        if (isValidEmail) {
            resultContainer.textContent = "Email is valid!";
            resultContainer.style.color = "green";
        } else {
            resultContainer.textContent = "Email is not valid!";
            resultContainer.style.color = "red";
        }
    });
});
