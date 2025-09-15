/* ====================
   GLOBAL VARIABLE
======================= */
// Tracks how many times the user has started a safari
let adventureCount = 0;

/* =====================
   FUNCTION WITH PARAMETER & RETURN VALUE
======================= */
function calculateAdventures(times) {
  // Returns a message based on the number of adventures started
  return `You have started ${times} safari adventure(s)!`;
}

/* ====================
   FUNCTION DEMONSTRATING SCOPE
======================= */
function startAdventure() {
  // Local scope variable (not accessible outside this function)
  let message = "The safari begins!";
  
  // Increment global counter
  adventureCount++;

  // Console output for demonstration
  console.log(message); // Local variable
  console.log(calculateAdventures(adventureCount)); // Calling function with return value

  // Trigger CSS animation on the orange box
  let box = document.getElementById("box");
  box.classList.add("bounce-animation");

  // Stop animation after 5 seconds
  setTimeout(() => {
    box.classList.remove("bounce-animation");
  }, 5000);
}

/* ====================
   MODAL FUNCTIONS
======================= */
// Opens modal by changing display
function openModal() {
  document.getElementById("modal").style.display = "flex";
}

// Closes modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

/* ====================
   EVENT LISTENERS
======================= */
document.getElementById("animateBtn").addEventListener("click", startAdventure);
document.getElementById("infoBtn").addEventListener("click", openModal);
document.getElementById("closeModal").addEventListener("click", closeModal);
