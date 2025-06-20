/* jshint esversion: 11*/
// Focus on input box on page load
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("chatInput").focus();
});

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
    
    const loadingIcon = document.createElement("div");
    loadingIcon.setAttribute("id", "loading");
    loadingIcon.innerHTML = `<div class="spinner-grow spinner-grow-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow spinner-grow-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow spinner-grow-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>`;
    messages.appendChild(loadingIcon);
  }
}

async function fetchResponse(message, personality) {
  const system_message =  `You are a ${personality} teacher. Only answer what is asked. Do not ask follow-up questions.`;
  let placeholderKey = localStorage.getItem("APIkey");
  if (!placeholderKey) {
    alert("Please set your API key in the Navbar.");
  }else {

    const API_URL = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3";

    const HEADERS = { "Authorization": `Bearer ${placeholderKey}`, "Content-Type": "application/json"};
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify({ inputs: `<s>[INST] <<SYS>>\n${system_message}\n<</SYS>>\n ${message} [/INST]` }),
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();

      // Example: display the generated text
      if (Array.isArray(data) && data[0]?.generated_text) {
        const responseText = data[0].generated_text.split('[/INST]')[1]?.trim();
        displayResponse(responseText);
      } else {
        console.warn("Unexpected response format:", data);
        displayResponse("Unexpected response format from API.");
      }
    } catch (error) { 
      console.error("Error fetching response:", error);
      displayResponse("An error occurred while fetching the response. Please check your API key and try again.");
    }
  }

  function displayResponse(response) {
        
    const messages = document.getElementById("chatMessages");
    messages.removeChild(messages.lastChild);
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
}}

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

function setKey(){
  const key = document.getElementById("APIkey").value;
  if (key.trim() !== "") {
    localStorage.setItem("APIkey", key);
    alert("API Key saved successfully!");
  } else {
    alert("Please enter a valid API Key.");
  }
}

function resetChat(){
  const messages = document.getElementById("chatMessages");
  messages.innerHTML = "";
}

 document.getElementById("chatInput").addEventListener("keydown",function(event){
        if(event.key === "Enter"){
            sendMessage();
        }
      });