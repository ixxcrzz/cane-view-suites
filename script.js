
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Replace with Cane View Suites' actual WhatsApp number.
const whatsappNumber = "";

const whatsappButton = document.getElementById("whatsappButton");

whatsappButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (!whatsappNumber) {
    alert("WhatsApp booking enquiries will be available soon.");
    return;
  }

  const message = encodeURIComponent(
    "Hello! I would like to enquire about staying at Cane View Suites."
  );

  window.open(
    `https://wa.me/${whatsappNumber}?text=${message}`,
    "_blank"
  );
});
