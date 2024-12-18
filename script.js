const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// Open navbar when the bar icon is clicked
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

// Close navbar when the close icon is clicked
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Close navbar when clicking outside of it
document.addEventListener('click', (event) => {
    // Check if the click is outside the navbar and the bar icon
    if (!nav.contains(event.target) && !bar.contains(event.target)) {
        nav.classList.remove('active'); // Close the navbar
    }
});
