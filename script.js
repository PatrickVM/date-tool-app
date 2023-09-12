document.addEventListener("DOMContentLoaded", function () {
  const dadQuestionButton = document.getElementById("get-dad-question");
  const dadQuestionDisplay = document.getElementById("dad-question");

  const childQuestionButton = document.getElementById("get-child-question");
  const childQuestionDisplay = document.getElementById("child-question");

  // Sample questions for dad and child
  const dadQuestions = [
    "What's your favorite memory with your daughter?",
    "What's one thing you'd like to teach your daughter?",
    "What's a special activity you enjoy doing together?",
    "How do you bond with your daughter?",
    "What's your go-to dad joke?",
    "What's your daughter's favorite hobby, and do you share it?",
    "What's a valuable life lesson you want to impart to your daughter?",
    "What's your favorite father-daughter tradition?",
    "What's the best piece of advice you've received about parenting?",
    "What's a book you love reading to your daughter?",
    "How do you handle challenging parenting moments?",
    "What's the most memorable adventure you've had with your daughter?",
    "What's a skill or hobby you hope to pass on to your daughter?",
    "What's the most touching moment you've had as a dad?",
    "What's something new you've learned from your daughter recently?",
  ];

  const childQuestions = [
    "What's your favorite thing about spending time with your dad?",
    "What's one fun thing you'd like to do with your dad?",
    "What's a special place you like to go with your dad?",
    "What's your favorite game to play with your dad?",
    "What's the funniest thing your dad has ever done?",
    "What's a meal you love sharing with your dad?",
    "What's your favorite bedtime story that your dad reads to you?",
    "What's a special song that reminds you of your dad?",
    "What's something nice you want to say to your dad right now?",
    "What's the best adventure you've had with your dad?",
    "What's a skill you want to learn from your dad?",
    "What's your favorite holiday to celebrate with your dad?",
    "What's the most exciting thing you've done with your dad?",
    "What's a question you've always wanted to ask your dad?",
    "What's a surprise you'd like to plan for your dad?",
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
});
