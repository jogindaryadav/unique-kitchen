// script.js

// Find the dark mode button
const darkModeToggle = document.getElementById('darkMode');

// Listen for click
darkModeToggle.addEventListener('click', () => {
  // Toggle the 'dark' class on the <html> element
  document.documentElement.classList.toggle('dark');

  // Optionally save user preference
  if (document.documentElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Load preference on page load
window.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});
// icon change
