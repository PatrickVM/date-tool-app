document.addEventListener("DOMContentLoaded", function () {
  const dadQuestionButton = document.getElementById("get-dad-question");
  const dadQuestionDisplay = document.getElementById("dad-question");

  const childQuestionButton = document.getElementById("get-child-question");
  const childQuestionDisplay = document.getElementById("child-question");

  // Sample questions for dad and child
  const dadQuestions = [
    "What's your favorite Disney character and why?",
    "If you could meet any Disney princess or hero, who would it be?",
    "What ride or attraction are you most excited to experience?",
    "Can you name all the Disney princesses?",
    "What's your favorite Disney song, and can you sing a few lines?",
    "If you could be a Disney character for a day, who would you choose?",
    "What's the tastiest Disney snack or treat you've had so far?",
    "What's your favorite Disney movie and why?",
    "If you could design your Disney-themed ride, what would it be like?",
    "What's your favorite part of the Disney parade?",
    "If you could spend a day in any Disney park around the world, where would you go?",
    "What's your favorite Disney memory from past visits?",
    "What Disney souvenir or merchandise would you love to take home?",
    "Which Disney ride or attraction do you want to ride again and again?",
    "What's the most magical moment you've experienced at Disney World?",
    "If you could dine with any Disney character, who would it be?",
    "What's the one thing you've learned about Disney history that surprised you?",
    "If you had a magic wand like a Disney fairy godmother, what would you wish for?",
    "What's your favorite land or section of the park?",
    "What's your plan for making the most of our day at Disney World?",
    "Which Disney character would you want as your travel buddy today?",
    "What's your all-time favorite Disney ride or attraction?",
    "If you could spend a day as a Disney character, who would you choose?",
    "What's the best Disney souvenir you've ever collected?",
    "What's your favorite Disney park snack or treat?",
    "Which Disney movie makes you feel the most nostalgic?",
    "If you could meet one Disney villain, who would it be?",
    "What's your favorite Disney song to sing along with?",
    "If you could design a new Disney ride, what theme would it have?",
    "Which Disney princess or hero do you admire most and why?",
    "What's the most magical moment you've experienced at Disney World?",
    "If you could visit any Disney park in the world, which one would you choose?",
    "What's the first Disney movie you remember watching as a child?",
    "If you could have dinner with any Disney character, who would it be?",
    "What's the funniest or silliest thing you've seen at Disney World?",
    "Which Disney park ride would you want to ride over and over again?",
    "If you could explore any Disney park after hours, which one would it be?",
    "What's your favorite land or section of Disney World?",
    "What's your Disney World must-do that you haven't done yet?",
    "If you could wish upon a Disney star, what would you wish for?",
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

  const quotes = [
    "The flower that blooms in adversity is the most rare and beautiful of all. - Mulan",
    "Hakuna Matata! It means no worries for the rest of your days. - The Lion King",
    "All our dreams can come true if we have the courage to pursue them. - Walt Disney",
    // Add more quotes here
  ];

  const quoteContainer = document.getElementById("quote-container");

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    return randomQuote;
  }

  function displayRandomQuote() {
    const randomQuote = getRandomQuote();
    quoteContainer.textContent = randomQuote;
  }

  // Check if a quote is stored in local storage
  const storedQuote = localStorage.getItem("randomQuote");

  if (storedQuote) {
    // If a quote is already stored, display it
    quoteContainer.textContent = storedQuote;
  } else {
    // If no quote is stored, display a random one and store it
    displayRandomQuote();
    localStorage.setItem("randomQuote", quoteContainer.textContent);
  }
});
