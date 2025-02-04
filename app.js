const setupElement = document.getElementById("setup");
const punchlineElement = document.getElementById("punchline");
const getJokeBtn = document.getElementById("getJokeBtn");

async function fetchJoke() {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch joke");
    }
    const data = await response.json();
    setupElement.textContent = data.setup;
    punchlineElement.textContent = data.punchline;
  } catch (error) {
    setupElement.textContent =
      "Oops! Failed to fetch a joke. Please try again.";
    punchlineElement.textContent = "";
    console.error(error);
  }
}

// Initial fetch when page loads
fetchJoke();

// Event listener for the button
getJokeBtn.addEventListener("click", fetchJoke);
