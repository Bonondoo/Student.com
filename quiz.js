// quiz.js

// JavaScript for handling the quiz
document.getElementById('quizSubmitBtn').addEventListener('click', calculateQuizResult);

function calculateQuizResult() {
    const answer1 = document.querySelector('input[name="q1"]:checked').value;

    let correctAnswers = 0;
    const correctAnswer1 = "Paris";

    if (answer1 === correctAnswer1) {
        correctAnswers++;
    }

    const result = `You got ${correctAnswers} out of 1 question correct.`;
    document.getElementById('quizResult').textContent = result;

    // Display the correct answer for question 1
    const q1CorrectAnswer = document.getElementById('q1-correct-answer');
    q1CorrectAnswer.textContent = `Correct Answer: ${correctAnswer1}`;
}