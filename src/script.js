// Typewriter Effect
const headlineText = "Hi, I'm Tayyaba Rani";
let i = 0;
function typeWriter() {
  if (i < headlineText.length) {
    document.getElementById("headline").innerHTML += headlineText.charAt(i);
    i++;
    setTimeout(typeWriter, 100); // Typing speed
  }
}
typeWriter();

  