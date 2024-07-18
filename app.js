// app.js

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('scratchCanvas');
    const ctx = canvas.getContext('2d');

    // Définir les dimensions du canvas
    canvas.width = 800; // Remplace par la largeur de ton image
    canvas.height = 600; // Remplace par la hauteur de ton image

    // Charger l'image du ticket
    const ticketImage = new Image();
    ticketImage.src = 'path_to_your_ticket_image.png'; // Remplace par le chemin de ton image

    // Lorsque l'image est chargée, dessiner sur le canvas
    ticketImage.onload = () => {
        ctx.drawImage(ticketImage, 0, 0, canvas.width, canvas.height);

        // Ajouter le voile gris
        ctx.fillStyle = 'rgba(200, 200, 200, 0.8)'; // Gris avec opacité
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Gestion des événements de grattage
        let isGratting = false;

        canvas.addEventListener('mousedown', () => {
            isGratting = true;
        });

        canvas.addEventListener('mouseup', () => {
            isGratting = false;
        });

        canvas.addEventListener('mousemove', (event) => {
            if (isGratting) {
                const rect = canvas.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                scratch(x, y);
            }
        });

        function scratch(x, y) {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.beginPath();
            ctx.arc(x, y, 20, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalCompositeOperation = 'source-over';
        }
    };
});
