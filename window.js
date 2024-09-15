
    // Function to make the window draggable
    function makeDraggable(windowElement) {
        const header = windowElement.querySelector('.window-header');

        let offsetX, offsetY, isDragging = false;

        header.addEventListener('mousedown', (event) => {
            isDragging = true;
            offsetX = event.clientX - windowElement.getBoundingClientRect().left;
            offsetY = event.clientY - windowElement.getBoundingClientRect().top;
        });

        document.addEventListener('mousemove', (event) => {
            if (isDragging) {
                const left = event.clientX - offsetX;
                const top = event.clientY - offsetY;

                windowElement.style.left = `${left}px`;
                windowElement.style.top = `${top}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    }

    // Make the window draggable
    document.addEventListener('DOMContentLoaded', () => {
        const windowElement = document.querySelector('.window');
        makeDraggable(windowElement);
    });

