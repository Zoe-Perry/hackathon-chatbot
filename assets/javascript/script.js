// Chat functionality
function sendMessage() {
  const input = document.getElementById("chatInput");
  const messages = document.getElementById("chatMessages");

  if (input.value.trim() !== "") {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const messageWrapper = document.createElement("div");
    messageWrapper.classList.add("message", "user");
    messageWrapper.style.animation = "fadeIn 5s ease-out"; // apply animation inline

    const messageText = document.createElement("div");
    messageText.textContent = input.value;

    const timestamp = document.createElement("div");
    timestamp.classList.add("timestamp");
    timestamp.textContent = time;

    messageWrapper.appendChild(messageText);
    messageWrapper.appendChild(timestamp);
    messages.appendChild(messageWrapper);

    messages.scrollTop = messages.scrollHeight;
    input.value = "";
  }
}