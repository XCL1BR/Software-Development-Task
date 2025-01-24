document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const toggleBtn = header.querySelector('.toggle-btn');
  
      // Toggle the display of the content
      if (content.style.display === 'block') {
        content.style.display = 'none';
        toggleBtn.textContent = '+';
      } else {
        content.style.display = 'block';
        toggleBtn.textContent = '-';
      }
    });
  });
function toggleAnswer(container) {
    const answer = container.nextElementSibling;
    const toggle = container.querySelector(".faq-toggle");
    answer.classList.toggle("visible");
    toggle.textContent = answer.classList.contains("visible") ? "-" : "+";
  }
  
