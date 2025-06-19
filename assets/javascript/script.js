// Chat functionality
function sendMessage() {
  const input = document.getElementById("chatInput");
  const messages = document.getElementById("chatMessages");

  if (input.value.trim() !== "") {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const personality = document.getElementById("ai-personality").value;
    fetchResponse(input.value, personality); // Call the function to fetch response
    const messageWrapper = document.createElement("div");
    messageWrapper.classList.add("message", "user");

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

async function fetchResponse(message, personality) {
  const system_message =  `You are a ${personality} teacher. Only answer what is asked. Do not ask follow-up questions.`
  let placeholderKey = ""

  const API_URL = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3";

  const HEADERS = { "Authorization": `Bearer ${placeholderKey}`, "Content-Type": "application/json"};
  fetch(API_URL, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({ inputs: `<s>[INST] <<SYS>>\n${system_message}\n<</SYS>>\n ${message} [/INST]` }),
  })
  .then(response => {
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  return response.json(); // ✅ parse response body as JSON
  }).then(data => {
    // Example: display the generated text
    if (Array.isArray(data) && data[0]?.generated_text) {
      const response = data[0].generated_text.split('[/INST]')[1]?.trim();
      displayResponse(response);
    } else {
      console.warn("Unexpected response format:", data);
    }
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });
}

function displayResponse(response) {
  const messages = document.getElementById("chatMessages");
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const messageWrapper = document.createElement("div");
  messageWrapper.classList.add("message", "bot");

  const messageText = document.createElement("div");
  messageText.textContent = response;

  const timestamp = document.createElement("div");
  timestamp.classList.add("timestamp");
  timestamp.textContent = time;

  messageWrapper.appendChild(messageText);
  messageWrapper.appendChild(timestamp);
  messages.appendChild(messageWrapper);

  messages.scrollTop = messages.scrollHeight;
}

// Dropdown functionality for the navbar
document.querySelectorAll(".navbar-collapse .nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    let section = document.querySelector(e.target.getAttribute("href"));
    if (section) {
      e.preventDefault(); // Prevent default anchor click behavior
      let navbarHeight = document.querySelector(".navbar-toggler").offsetHeight;
      window.scroll({
        top: section.offsetTop - navbarHeight, // Adjust for navbar height
        behavior: "smooth",
      });
      document.querySelector(".navbar-collapse").classList.remove("show"); // Collapse navbar
    }
  });
});
