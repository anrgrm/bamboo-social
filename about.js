const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        i.querySelector('.icon').textContent = '▶';
      }
    });

    item.classList.toggle('active');
    const icon = item.querySelector('.icon');
    icon.textContent = item.classList.contains('active') ? '▼' : '▶';
  });
});
