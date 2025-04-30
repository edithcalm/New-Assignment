function navigateToPage() {
    var select = document.getElementById('pages-select');
    var page = select.value;
    if (page) {
        window.location.href = page;
    }
}

function updateHeaderBackground() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#0a2a2f'; /* Current color */
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)'; /* Add shadow */
    } else {
        header.style.background = 'transparent'; /* Transparent at the top */
        header.style.boxShadow = 'none'; /* Remove shadow */
    }
}

// Check header background on page load
updateHeaderBackground();

// Update header background on scroll
window.addEventListener('scroll', updateHeaderBackground);

// Counting numbers on scroll
function countUp() {
    const counters = document.querySelectorAll('.count');
    const speed = 200; // Adjust speed as needed

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
}

// Trigger counting when the section is in view
function handleScroll() {
    const statsSection = document.querySelector('#statistics');
    const statsPosition = statsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (statsPosition < screenPosition) {
        countUp();
        window.removeEventListener('scroll', handleScroll); // Run only once
    }
}

window.addEventListener('scroll', handleScroll);