document.addEventListener('DOMContentLoaded', (event) => {
  const homeAdvert = document.getElementById('homeAdvert');
  const closeBtn = document.getElementById('closeBtn');

  // Check if the user has already seen the welcome message this session
  if (!sessionStorage.getItem('hasVisited')) {
    homeAdvert.classList.add('show');
  }

  // Close button event listener
  closeBtn.addEventListener('click', () => {
    homeAdvert.classList.remove('show');
    sessionStorage.setItem('hasVisited', 'true');
  });
});
