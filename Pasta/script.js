document.getElementById('playButton').addEventListener('click', function() {
    const videoContainer = document.getElementById('videoContainer');
    const youtubeVideo = document.getElementById('youtubeVideo');

    // Defina o URL do vídeo do YouTube
    youtubeVideo.src = 'https://www.youtube.com/embed/ljigDhR7w1c?autoplay=1';
    
    videoContainer.style.display = 'flex';
});
