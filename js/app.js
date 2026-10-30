'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Verificamos si el dispositivo usa ratón (pointer: fine) antes de activar la lógica del cursor
    if (window.matchMedia('(pointer: fine)').matches) {
        const cursor = document.getElementById('cursor');
        let mouseX = 0, mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            requestAnimationFrame(() => {
                cursor.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
            });
        });

        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
            link.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
        });
    }
});
