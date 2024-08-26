const button = document.querySelector("#button"); // Assuming the button has an ID of "button"
const canvas = document.querySelector("#confetti");

const jsConfetti = new JSConfetti()

button.addEventListener('click', ()  => {
    jsConfetti.addConfetti();
})