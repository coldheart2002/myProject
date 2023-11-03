// Define an array of icon elements and an array of container elements
const icons = [
  homeIcon,
  contactsIcon,
  settingsIcon,
  experimentIcon,
  logoutIcon,
];
const containers = [
  homeContainer,
  contactsContainer,
  settingsContainer,
  experimentContainer,
  logoutContainer,
];
const liHover = document.getElementsByTagName("li");
let previouslyClickedLi = null; // Initialize as null

// Store the original background color of each li in an array
let originalLiBackgroundColors = [];

for (let i = 0; i < liHover.length; i++) {
  originalLiBackgroundColors.push(liHover[i].style.backgroundColor);
  liHover[i].addEventListener("click", (event) => {
    // Reset the background color of the previously clicked li (if any)
    if (previouslyClickedLi) {
      previouslyClickedLi.style.backgroundColor = originalLiBackgroundColors[i];
    }

    // Set the background color of the currently clicked li
    event.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

    // Update the previouslyClickedLi to the current one
    previouslyClickedLi = event.currentTarget;
  });
}

// Add click event listeners to icons using a loop
for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", () => {
    console.log(icons[i].textContent + " icon clicked");

    // Display the corresponding container and hide others
    for (let j = 0; j < containers.length; j++) {
      if (j === i) {
        containers[j].style.display = "flex";
      } else {
        containers[j].style.display = "none";
      }
    }
  });
}
