// -------------------------------
// CONNECT UI TO AI BRAIN
// -------------------------------

// Wait until the page is fully loaded
window.addEventListener("DOMContentLoaded", () => {
  
  const inputBox = document.getElementById("inputText");
  const outputBox = document.getElementById("outputText");
  const generateBtn = document.getElementById("generateBtn");
  const modeSelect = document.getElementById("modeSelect");

  generateBtn.addEventListener("click", async () => {
    const input = inputBox.value.trim();
    const mode = modeSelect.value;

    if (!input) {
      outputBox.value = "Please enter a message first.";
      return;
    }

    outputBox.value = "Neutralizing… please wait.";

    try {
      // callClaude comes from neutralizer-ai.js
      const result = await callClaude(input, mode);
      outputBox.value = result;
    } catch (err) {
      console.error(err);
      outputBox.value = "Error: Could not reach AI. Check your API key or internet.";
    }
  });
});
