const dadQuestionButton = document.getElementById("get-dad-question");
const dadQuestionDisplay = document.getElementById("dad-question");

const childQuestionButton = document.getElementById("get-child-question");
const childQuestionDisplay = document.getElementById("child-question");

// Sample questions for dad and child
const dadQuestions = [
  "What's your favorite memory with your daughter?",
  "What's one thing you'd like to teach your daughter?",
  "What's a special activity you enjoy doing together?",
];

const childQuestions = [
  "What's your favorite thing about spending time with your dad?",
  "What's one fun thing you'd like to do with your dad?",
  "What's a special place you like to go with your dad?",
];

// Function to display a random question for dad
function displayRandomDadQuestion() {
  const randomIndex = Math.floor(Math.random() * dadQuestions.length);
  const randomQuestion = dadQuestions[randomIndex];
  dadQuestionDisplay.textContent = randomQuestion;
}

// Function to display a random question for the child
function displayRandomChildQuestion() {
  const randomIndex = Math.floor(Math.random() * childQuestions.length);
  const randomQuestion = childQuestions[randomIndex];
  childQuestionDisplay.textContent = randomQuestion;
}

// Add click event listeners to the "Get Question" buttons
dadQuestionButton.addEventListener("click", displayRandomDadQuestion);
childQuestionButton.addEventListener("click", displayRandomChildQuestion);

// Display initial random questions
displayRandomDadQuestion();
displayRandomChildQuestion();
