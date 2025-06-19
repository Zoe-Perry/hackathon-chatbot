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

// Dropdown functionality for the navbar
document
      .querySelectorAll(".navbar-collapse .nav-link")
      .forEach((link) => {
        link.addEventListener("click", function (e) {
          let section = document.querySelector(e.target.getAttribute("href"));
          if (section) {
            e.preventDefault(); // Prevent default anchor click behavior
            let navbarHeight =
              document.querySelector(".navbar-toggler").offsetHeight;
            window.scroll({
              top: section.offsetTop - navbarHeight, // Adjust for navbar height
              behavior: "smooth",
            });
            document
              .querySelector(".navbar-collapse")
              .classList.remove("show"); // Collapse navbar
          }
        });
      });