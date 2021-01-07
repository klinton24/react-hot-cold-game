export const generateRandomNumber = () => Math.floor(Math.random() * 1000) + 1;

export const getInitialState = () => ({
  actual: generateRandomNumber(),
  guess: undefined,
  allGuesses: [],
  attempt: 0,
  feedbackMessage: "Dare to guess...",
  feedbackColor: "#fff",
  block: false
});

export const getFeedback = absDiff => {
  let feedbackMessage;
  let feedbackColor;

  if (absDiff === 0) {
    feedbackColor = "#000";
    feedbackMessage = "You Won! Was it worth it? Reset, let's play again.";
  } else if (absDiff < 10 && absDiff !== 0) {
    feedbackColor = "#linear-gradient(red, yellow)";
    feedbackMessage = "Just give up already!";
  } else if (absDiff >= 10 && absDiff < 25) {
    feedbackColor = "#ff5722";
    feedbackMessage = "Temperature of the sun!";
  } else if (absDiff >= 25 && absDiff < 50) {
    feedbackColor = "#ff5722";
    feedbackMessage = "Extremely Hot!";
  } else if (absDiff >= 50 && absDiff < 100) {
    feedbackColor = "#ff9800";
    feedbackMessage = "Hot";
  } else if (absDiff >= 100 && absDiff < 200) {
    feedbackColor = "#ffeb38";
    feedbackMessage = "Warm";
  } else if (absDiff >= 200 && absDiff < 400) {
    feedbackColor = "#5bc0de";
    feedbackMessage = "Cold";
  } else {
    feedbackColor = "#5bc0de";
    feedbackMessage = "Arctic!";
  }

  return {
    feedbackMessage,
    feedbackColor
  };
};
