const scrollContainer = document.querySelector('.scroll-container');

let scrollSpeed = 1; // Speed of the scrolling

function scrollCards() {
    scrollContainer.scrollLeft += scrollSpeed;
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
    }
    requestAnimationFrame(scrollCards);
}

scrollCards();
