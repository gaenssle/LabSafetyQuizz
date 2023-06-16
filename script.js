document.addEventListener('DOMContentLoaded', function() {
  // Define quiz questions and answers
 const questions = [
  {
    question: "You have to take a sample from your GMO bacterial cell culture. What do you do?",
    answers: [
      { option: "I open the flask next to a flame.", reaction: "Like a boss! You place your flask next to the Bunsen burner and turn the flame on.", color: "green" },
      { option: "I open the flask and remove the volume.", reaction: "You fool! Now your culture is contaminated with all sorts of stuff and you can start all over.", color: "#B90E0A" },
      { option: "I open the flask in the fume hood and remove the volume.", reaction: "You fool! You mistake the fume hood for a sterile biological safety cabinet. Your sample is now not only contaminated but also supplemented with all sorts of chemicals stuck on the table you lay your pipette tips on.", color: "#B90E0A" }
    ],
    correctAnswer: 0
  },
  {
    question: "You forgot to disinfect the bench. What do you do?",
    answers: [
           { option: "I do nothing, the flame is disinfecting enough on its own.", reaction: "You fool! Now your culture is contaminated and you can start all over.", color: "#B90E0A" },
      { option: "I disinfect the bench with ethanol while the flame is burning.", reaction: "You fool! The ethanol gets too close to the flame, catches fire, and starts burning your sleeve. You are now on fire.", color: "#B90E0A" },
       { option: "I disinfect the bench with ethanol after turning off the flame.", reaction: "Like a boss! After adding ethanol, you clean it up with a tissue and relight the flame.", color: "green" }
    ],
    correctAnswer: 2
  },
  {
    question: "You don't remember the volume you need. What do you do?",
    answers: [
      { option: "I guess.", reaction: "You fool! You guess wrong and you end up with far too little cells and have to start all over again.", color: "#B90E0A" },
      { option: "I look it up in my lab journal.", reaction: "Like a boss! You look at your lab journal without touching it.", color: "green" },
      { option: "I look it up on my phone.", reaction: "You fool! Your phone is now contaminated!", color: "#B90E0A" }
    ],
    correctAnswer: 1
  },
  {
    question: "Where should you place your lab journal afterwards?",
    answers: [
      { option: "On a clean surface close by.", reaction: "Like a boss! You look up the volume and transfer it to a tube.", color: "green" },
      { option: "As close to me as possible.", reaction: "You fool! You accidentally throw over the Bunsen burner, and your lab journal catches fire. You try to extinguish it with the next best thing. Unfortunately, this is ethanol and now the whole lab is on fire.", color: "#B90E0A" },
      { option: "In the office.", reaction: "You fool! You bring your contaminated lab coat into the office, and now your colleagues are getting sick because of food contamination!", color: "#B90E0A" }
    ],
    correctAnswer: 0
  },
  {
    question: "Now, having your sample, you have to spin it down in the centrifuge. What do you do?",
    answers: [
      { option: "I put the sample in, close the lid, and click on start.", reaction: "You fool! The rotator in the centrifuge starts to rock, and after a short while, the rotator has enough speed to break loose, crash out of the centrifuge, and into the wall of the room, covering the surrounding area in metal fragments.", color: "#B90E0A" },
      { option: "I put a dummy with the same weight opposite to my sample, close the lid, and click on start.", reaction: "Like a boss! After the spin is complete, you take your sample out.", color: "green" },
      { option: "I put a dummy with the same volume opposite to my sample, close the lid, and click on start.", reaction: "You fool! Volume is not always equal to weight. Your centrifuge starts making strange sounds, your rotor starts to rock and break loose from the spindle, causing complete damage to the centrifuge.", color: "#B90E0A" }
    ],
    correctAnswer: 1
  },
  {
    question: "The cells in your sample are now stuck to the bottom of the tube. Where do you put the liquid part of the culture?",
    answers: [
      { option: "I pour it into the sink.", reaction: "You fool! The bacteria start growing in the wastewater and evolve into potent pathogens - the beginning of the END!", color: "#B90E0A" },
      { option: "I pour it into a plastic tube and throw it into the bin for chemical waste.", reaction: "You fool! This is only for chemical waste. Your nasty bacteria are not allowed to leave the lab alive!", color: "#B90E0A" },
       { option: "I collect it in a bottle to sterilize it later.", reaction: "Like a boss! You put your remaining sample in the freezer for next time.", color: "green" }
    ],
    correctAnswer: 2
  },
  {
    question: "The people in the lab call it a day and leave. What do you do?",
    answers: [
      { option: "I call it a day as well and start cleaning up.", reaction: "Like a boss! You clean up the glassware.", color: "green" },
      { option: "I drop everything and leave the room as well.", reaction: "You fool! The next person coming in thinks the unlabeled beaker contains water and throws it into the sink. You now have a hole in your pipe.", color: "#B90E0A" },
      { option: "I continue with my experiments.", reaction: "You fool! You accidentally drench yourself in acid, and nobody hears your screams before you slip and knock yourself out.", color: "#B90E0A" }
    ],
    correctAnswer: 0
  },
  {
    question: "You have needles left on your bench. What do you do with them?",
    answers: [

      { option: "I clean them and store them for later use.", reaction: "You fool! The needles are intended for single-use, and you spend more time cleaning them than they are worth and still contaminate your next sample.", color: "#B90E0A" },
      { option: "I throw them into the bin for GMO-contaminated stuff.", reaction: "You fool! The needles pierce the plastic of the trash bag and hurt the person replacing the waste.", color: "#B90E0A" },
      { option: "I throw them into the yellow plastic box for needles.", reaction: "Like a boss! You throw the needles in the needle box and continue.", color: "green" }
    ],
    correctAnswer: 2
  },
  {
    question: "From a previous experiment, you still have a sample tube left in the liquid nitrogen. How do you get the tube out?",
    answers: [
      { option: "I take it out using my hands.", reaction: "You fool! Now your fingers are frozen solid, and in your panic, you accidentally shatter them into a thousand pieces. You now have a couple of fingers less.", color: "#B90E0A" },
      { option: "I take it out using a tong.", reaction: "Like a boss! You remove the sample and put it in the -80°C freezer. Then you move towards the exit.", color: "green" },
      { option: "I pour the liquid nitrogen into the sink until my sample tube falls out with it.", reaction: "You fool! The plastic pipe under the sink freezes and ruptures. You now have a hole in the pipe.", color: "#B90E0A" }
    ],
    correctAnswer: 1
  },
  {
    question: "On your way out, you come across two unlabeled beakers with clear solutions (one of them has a pungent smell). What do you do?",
    answers: [
      { option: "I assume it's water and use it to fill up the water bath.", reaction: "You fool! It was concentrated sulfuric acid! Boiling droplets of acid fly everywhere and chemically burn your hands and face.", color: "#B90E0A" },
      { option: "I put both of them into the fume hood and mark them as unknown to warn others before you search for the owner.", reaction: "Like a boss! You will find the owner of the beaker and tell them to label their stuff and store it correctly.", color: "green" },
      { option: "I put them somewhere where they don't bother anyone.", reaction: "You fool! One of them is isopropyl alcohol. As you put it next to the window into the sun where it evaporates and explodes after ignition by a nearby flame.", color: "#B90E0A" }
    ],
    correctAnswer: 1
  },
  {
    question: "You put down one of the beakers too hard, and a drop of the solution flies towards your right eye. What do you do?",
    answers: [
      { option: "I do nothing as I am wearing safety glasses.", reaction: "Like a boss! You clean your glasses with a tissue and continue.", color: "green" },
      { option: "I cut it in half with my hands like a ninja.", reaction: "You fool! The drop turns out to be acid and burns into your skin and damages your hand. Now you have a hole in your hand.", color: "#B90E0A" },
      { option: "I do nothing as there is an eye washing station close by.", reaction: "You fool! Now you have to spend 15 minutes watering your eyes, and you might still be blind in the end.", color: "#B90E0A" }
    ],
    correctAnswer: 0
  },
  {
    question: "What do you do with the tissue after use?",
    answers: [
      { option: "I throw it on the ground.", reaction: "You fool! It is wet enough for you to slip on it and fall.", color: "#B90E0A" },
      { option: "I put it into the common waste bin next to the sink.", reaction: "You fool! This is for non-harmful waste, and the paper towels in the bin start burning due to a reaction with concentrated sulfuric acid.", color: "#B90E0A" },
      { option: "I put it into the chemical waste bin under the bench.", reaction: "Like a boss! You close the lid and continue.", color: "green" }
    ],
    correctAnswer: 2
  },
  {
    question: "You have now reached the door. What do you do?",
    answers: [
      { option: "I take off my lab coat.", reaction: "Like a boss! You take off your lab coat and hang it up next to the door.", color: "green" },
      { option: "I leave.", reaction: "You fool! You contaminate everything around you with your dirty hands and lab coat.", color: "#B90E0A" },
      { option: "I wash my hands.", reaction: "You fool! You still have your dirty lab coat on.", color: "#B90E0A" }
    ],
    correctAnswer: 0
  },
  {
    question: "What do you do next?",
    answers: [
      { option: "I leave.", reaction: "You fool! You spread bacteria all over the doorknob.", color: "#B90E0A" },
      { option: "I wash my hands.", reaction: "Like a boss! You wash your hands carefully, pick up your lab journal, and leave.", color: "green" },
      { option: "I put on my lab coat.", reaction: "You fool! Your lab coat is still contaminated.", color: "#B90E0A" }
    ],
    correctAnswer: 1
  }
];


  // Global variables
  const submitButton = document.getElementById('submit');
  const nextButton = document.getElementById('next');
  const restartButton = document.createElement('button');
  restartButton.textContent = 'Restart Quiz';
  restartButton.id = 'restart';
  const reactionContainer = document.getElementById('reaction');
  const questionContainer = document.getElementById('question');
  const answersContainer = document.getElementById('answers');

  let currentQuestion = 0;

  // Function to display the current question
  function displayQuestion() {
    // Clear the containers
    questionContainer.innerHTML = '';
    answersContainer.innerHTML = '';
    reactionContainer.innerHTML = '';

    // Display the current question and answers
    const current = questions[currentQuestion];
    questionContainer.textContent = current.question;

    current.answers.forEach((answer, index) => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'answer';
      input.value = index;
      label.classList.add('custom-radio'); // Add the custom-radio class
      label.appendChild(input);
      label.appendChild(document.createTextNode(answer.option));
      answersContainer.appendChild(label);
    });

    // Add event listener for the "Next Question" button
    nextButton.addEventListener('click', goToNextQuestion);

    submitButton.disabled = false;
    nextButton.disabled = true;
  }

  // Function to process the selected answer
  function processAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    // Check if an answer is selected
    if (selectedAnswer) {
      // Check the answer
      const current = questions[currentQuestion];
      const selectedOption = current.answers[selectedAnswer.value];

      const label = selectedAnswer.parentNode; // Get the parent label element
      label.style.color = selectedOption.color;
      reactionContainer.textContent = selectedOption.reaction;

      // Check if the answer is correct
      if (selectedOption.color === 'green') {
        submitButton.disabled = true;
        nextButton.disabled = false;
      } else {
        submitButton.disabled = false;
        nextButton.disabled = true;
      }
    }
  }
// Function to go to the next question
function goToNextQuestion() {
  currentQuestion++; // Increment the current question index

  if (currentQuestion < questions.length) {
    displayQuestion(); // Display the next question
  } else {
    // No more questions, display the final score or completion message
    questionContainer.innerHTML = `<h2>Quiz Completed!</h2>
      <p>Your final score is: ${calculateScore()} out of ${questions.length}</p>`;
    answersContainer.innerHTML = '';
    reactionContainer.innerHTML = ''; // Clear the reaction container

    // Hide the submit button and next button
    submitButton.style.display = 'none';
    nextButton.style.display = 'none';

    // Show the restart button
    restartButton.style.display = 'block';
  }
}

  // Function to calculate the quiz score
  function calculateScore() {
    let score = 0;
    questions.forEach((question) => {
      const selectedAnswer = document.querySelector(`input[name="answer"]:checked`);
      if (selectedAnswer && selectedAnswer.value == question.correctAnswer) {
        score++;
      }
    });
    return score;
  }


// Function to restart the quiz
function restartQuiz() {
  currentQuestion = 0; // Reset the current question index
  displayQuestion(); // Display the first question

  // Show the submit and next buttons
  submitButton.style.display = 'block';
  nextButton.style.display = 'block';

  // Hide the restart button
 // restartButton.style.display = 'none';
}


  // Add event listener to the restart button
  restartButton.addEventListener('click', restartQuiz);

  // Append the restart button to the body element
  document.body.appendChild(restartButton);

  // Add event listeners
  submitButton.addEventListener('click', processAnswer);
  nextButton.addEventListener('click', goToNextQuestion);

  // Start the quiz
  displayQuestion();
});
