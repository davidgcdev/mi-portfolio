'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Activa el cursor solo en dispositivos con ratón
    if (window.matchMedia('(pointer: fine)').matches) {
        const cursor = document.getElementById('cursor');
        
        document.addEventListener('mousemove', (e) => {
            // Actualización directa sin retardo para una sensación más "snappy"
            requestAnimationFrame(() => {
                cursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
            });
        });

        // Efecto hover en tarjetas y enlaces
        const interactables = document.querySelectorAll('a, .bento-card');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
        });
    }
});
