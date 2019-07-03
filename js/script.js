// Event Listener for mouse scroll Once it scrolls past 660 on the Y-axis then a button will appear on lower right corner

document.addEventListener('wheel', () => {
  const topButton = document.querySelector('.top-button');
  if (window.scrollY > 300) {
    topButton.style.display = '';
  } else {
    topButton.style.display = 'none';
  }
  // Listen for button click and then scroll to top
  topButton.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    topButton.style.display = 'none';
  });
});
