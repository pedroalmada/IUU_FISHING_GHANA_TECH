document.addEventListener("DOMContentLoaded", function() {
    const saikoVideo = document.getElementById('saiko-video');
    const saikoSection = document.getElementById('Saiko');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                saikoVideo.play();
            } else {
                saikoVideo.pause();
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(saikoSection);
    
    // Remove controls
    saikoVideo.removeAttribute('controls');
});
