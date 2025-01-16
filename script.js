function toggleAnswer(container) {
    const answer = container.nextElementSibling;
    const toggle = container.querySelector(".faq-toggle");
    answer.classList.toggle("visible");
    toggle.textContent = answer.classList.contains("visible") ? "-" : "+";
  }