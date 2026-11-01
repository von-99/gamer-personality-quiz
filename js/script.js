console.log("script.js connected!");


const questions = document.querySelectorAll(".question-block");
const answers = {};

// Track selected answers
questions.forEach(function(question, index) {
    const buttons = question.querySelectorAll(".answer-btn");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {

            // Remove previous selection
            buttons.forEach(function(btn) {
                btn.classList.remove("selected", "btn-primary");
                btn.classList.add("btn-outline-primary");
            });

            // Highlight selected answer
            button.classList.add("selected", "btn-primary");
            button.classList.remove("btn-outline-primary");

            // Save the answer
            answers[index] = button.dataset.answer;
        });
    });
});

// Calculate and display the result
function displayResult() {
    let competitive = 0;
    let casual = 0;

    // Make sure all questions are answered
    if (Object.keys(answers).length !== questions.length) {
        alert("Please answer all four questions!");
        return;
    }

    // Count the answers
    Object.values(answers).forEach(function(answer) {
        if (answer === "competitive") {
            competitive++;
        } else if (answer === "casual") {
            casual++;
        }
    });

    let result = "";

    if (competitive > casual) {
        result = "Competitive Gamer! You love winning and competing against others.";
    } else {
        result = "Casual Gamer! You enjoy relaxing, exploring, and having fun.";
    }

    // Show result on the webpage
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");

    resultText.textContent = result;
    resultContainer.style.display = "block";
}

// Show results when button is clicked
document.getElementById("show-result").addEventListener("click", displayResult);
