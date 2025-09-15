/*
   JAVASCRIPT FUNCTIONS
   - Demonstrate parameters, return values, scope
   - Trigger CSS animations dynamically
*/

/* Function 1: Multiply numbers */
function multiplyNumbers(a, b) {
  // Returns product of two numbers
  return a * b;
}

/* Function 2: Add class temporarily to trigger animation */
function triggerAnimation(element, className, duration = 1000) {
  element.classList.add(className);
  // Remove after duration (so it can be re-triggered)
  setTimeout(() => element.classList.remove(className), duration);
}

/* Function 3: Flip the card programmatically */
function flipCard() {
  const cardInner = document.querySelector(".card-flip__inner");
  cardInner.style.transform = 
    cardInner.style.transform === "rotateY(180deg)" ? "rotateY(0deg)" : "rotateY(180deg)";
}

/*
   EVENT LISTENERS
   - Connect buttons to functions
*/

// Multiply button
document.getElementById("multiplyBtn").addEventListener("click", () => {
  const result = multiplyNumbers(7, 8); // call with params
  alert("7 x 8 = " + result); // show return value
});

// Spin button
document.getElementById("spinBtn").addEventListener("click", () => {
  const spinner = document.querySelector(".spinner");
  triggerAnimation(spinner, "spin-once", 2500);
});

// Flip button
document.getElementById("flipBtn").addEventListener("click", flipCard);

/* 
   EXTRA: Add reusable CSS class for JS-triggered spin
   (instead of infinite spin)
*/
const style = document.createElement("style");
style.innerHTML = `
  @keyframes spinOnce {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .spin-once { animation: spinOnce 2.5s linear; }
`;
document.head.appendChild(style);
