
   // script.js

// Function to make the window draggable
function makeDraggable(windowElement) {
    const header = windowElement.querySelector('.window-header');

    let offsetX, offsetY, isDragging = false;

    function startDragging(event) {
        isDragging = true;
        // For touch events, use touches[0]
        offsetX = (event.clientX || event.touches[0].clientX) - windowElement.getBoundingClientRect().left;
        offsetY = (event.clientY || event.touches[0].clientY) - windowElement.getBoundingClientRect().top;
    }

    function drag(event) {
        if (isDragging) {
            // For touch events, use touches[0]
            const left = (event.clientX || event.touches[0].clientX) - offsetX;
            const top = (event.clientY || event.touches[0].clientY) - offsetY;

            windowElement.style.left = `${left}px`;
            windowElement.style.top = `${top}px`;
        }
    }

    function stopDragging() {
        isDragging = false;
    }

    // Add event listeners for both mouse and touch events
    header.addEventListener('mousedown', startDragging);
    header.addEventListener('touchstart', startDragging);

    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag);

    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('touchend', stopDragging);
}

// Make the window draggable
document.addEventListener('DOMContentLoaded', () => {
    const windowElement = document.querySelector('.window');
    makeDraggable(windowElement);
});
