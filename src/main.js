const accordionImages = {
  1: 'https://ik.imagekit.io/mshcgnjju/Kemsan/undraw_investing.svg',
  2: 'https://ik.imagekit.io/mshcgnjju/Kemsan/Privacy%20policy-bro.png',
  3: 'https://ik.imagekit.io/mshcgnjju/Kemsan/Mobile%20user-rafiki.png',
  4: 'https://ik.imagekit.io/mshcgnjju/Kemsan/Product%20quality-pana.png',
  5: 'https://ik.imagekit.io/mshcgnjju/Kemsan/Development%20focus-amico.png'
};

// Handle Image Accordion (main accordion)
document.addEventListener('DOMContentLoaded', function () {
  const firstContent = document.getElementById('content-1');
  if (firstContent) {
    firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
    document.getElementById('icon-1').textContent = '-';
    document.getElementById('accordionImage').src = accordionImages[1];
  }
});

function toggleAccordion(index) {
  const allContents = document.querySelectorAll('[id^="content-"]');
  const allIcons = document.querySelectorAll('[id^="icon-"]');

  allContents.forEach((content, idx) => {
    if (content.id === 'content-' + index) return;
    content.style.maxHeight = null;
    allIcons[idx].textContent = '+';
  });

  const content = document.getElementById('content-' + index);
  const icon = document.getElementById('icon-' + index);
  const image = document.getElementById('accordionImage');

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    icon.textContent = '+';
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
    icon.textContent = '-';
  }

  image.src = accordionImages[index];
}

// Handle FAQ Dropdown
function toggleFaqAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('svg');
  const allContents = document.querySelectorAll('.accordion-content');
  const allIcons = document.querySelectorAll('.accordion-header svg');

  // Close all other dropdowns
  allContents.forEach((item) => {
    if (item !== content) {
      item.classList.add('hidden');
    }
  });

  // Reset all icons to the default state
  allIcons.forEach((faqIcon) => {
    faqIcon.classList.remove('rotate-90');
    faqIcon.parentElement.setAttribute('aria-expanded', 'false');
  });

  // Toggle the clicked dropdown
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    icon.classList.add('rotate-90');
    button.setAttribute('aria-expanded', 'true');
  } else {
    content.classList.add('hidden');
    icon.classList.remove('rotate-90');
    button.setAttribute('aria-expanded', 'false');
  }
}

// Add event listeners for FAQ buttons
document.addEventListener('DOMContentLoaded', () => {
  const faqButtons = document.querySelectorAll('.accordion-header');

  faqButtons.forEach((button) => {
    button.addEventListener('click', function () {
      toggleFaqAccordion(button);
    });
  });

  // Initialize the first FAQ content if one is already expanded
  const firstButton = document.querySelector('.accordion-header[aria-expanded="true"]');
  if (firstButton) {
    const firstContent = firstButton.nextElementSibling;
    firstContent.classList.remove('hidden');
  }
});
