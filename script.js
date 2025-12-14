let toggledark = localStorage.getItem('toggledark')

const themeBtn = document.getElementById('themeBtn')

const enableDarkmode = () => {
	document.body.classList.add('toggledark')
	localStorage.setItem('toggledark', 'active')
}

const disableDarkmode = () => {
	document.body.classList.remove('toggledark')
	localStorage.setItem('toggledark', null)
}

themeBtn.addEventListener("click", () => {
	toggledark = localStorage.getItem('toggledark')
	toggledark !== "active" ? enableDarkmode() : disableDarkmode()
})

const button = document.getElementById("editJobBtn");
const span = document.getElementById("job_title");

document.getElementById("editJobBtn").onclick = () => {
    const newTitle = prompt("Enter your new job title:");
    if (newTitle) document.getElementById("job_title").textContent = newTitle;
};

const toggleBtn = document.getElementById("toggleSkillsBtn");
const job_title = document.getElementById("job-title");
toggleBtn.onclick = () => {
  const hidden = job_title.style.display === "none";
  job_title.style.display = hidden ? "block" : "none";
  toggleBtn.textContent = hidden ? "Hide Skills" : "Show Skills";
};

const msgBox = document.getElementById("textarea");
const counter = document.getElementById("counter");
msgBox.onkeyup = () => counter.textContent = 200 - msgBox.value.length;

function validateForm() {
  const name = document.getElementById("nameField").value.trim();
  const email = document.getElementById("emailField").value.trim();
  if (!name || !email) {
    alert("Please fill both Name and Email fields.");
    return false;
  }
  return true;
}

const dateDisplay = document.getElementById("dateDisplay");
if (dateDisplay) {
  const today = new Date();
  dateDisplay.textContent = today.toDateString();
}

const quotes = [
  "If you ever get bored, punch an orphan. What are they gonna do? Tell their parent?",
  "Blood for the blood god",
  "It is only with a worthy rival that one can reach their fullest potential.",
  "TECHNOBLADE NEVER DIES",
  "Those who treat me with kindness, I will repay that kindness tenfold.",
  "One day, we'll look back at where we started and be amazed by how far we've come."
];

const quoteDisplay = document.getElementById("quote");
const button_new = document.getElementById("newquote");

  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
  }

showRandomQuote();

button_new.addEventListener("click", showRandomQuote);