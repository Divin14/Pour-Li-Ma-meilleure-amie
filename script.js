document.addEventListener('DOMContentLoaded', () => {

    // 1. Lancement de la Musique en Fond
    const audio = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-toggle');
    const musicIcon = document.getElementById('music-icon');
    const musicText = document.getElementById('music-text');
    let isPlaying = false;

    musicBtn.addEventListener('click', () => {
        if (!isPlaying) {
            audio.play().then(() => {
                isPlaying = true;
                musicIcon.textContent = '⏸️';
                musicText.textContent = 'Musique en cours...';
                musicBtn.classList.remove('pulse');
            }).catch(err => {
                console.log("Lecture bloquée par le navigateur :", err);
            });
        } else {
            audio.pause();
            isPlaying = false;
            musicIcon.textContent = '🎵';
            musicText.textContent = 'Reprendre la musique';
        }
    });

    // 2. Animation au Défilement (Scroll Reveal)
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Lancement initial

    // 3. Déclencheur de Surprise Confettis
    const surpriseBtn = document.getElementById('surprise-btn');

    surpriseBtn.addEventListener('click', () => {
        // Confettis colorés
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
        });

        alert("❤️ Tu es la meilleure chose qui me soit arrivée, Li. Joyeux Anniversaire pour tes 22 ans ! Ton Jerli.");
    });

});