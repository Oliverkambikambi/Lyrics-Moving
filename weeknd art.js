//link to weekend skeleton 
const audio = document.getElementById("audioPlayer");
const lyricsContainer = document.getElementById("lyricsContainer");
const lyrics = document.querySelectorAll(".lyric-line");

function updateLyrics() {
    let currentTime = audio.currentTime;// Get the current time of the audio
    let activeLyric = null;
    
    // Loop through all lyrics and find the one that matches the current time
    lyrics.forEach(lyric => {
        let lyricTime = parseFloat(lyric.getAttribute("data-time"));
        if (currentTime >= lyricTime) {
            activeLyric = lyric;
        }
    });
    
    if (activeLyric) {
        // Remove the "active" class from all lyrics
        document.querySelectorAll(".lyric-line").forEach(line => {
            line.classList.remove("active");
        });
        activeLyric.classList.add("active");
        
        let scrollAmount = activeLyric.offsetTop - lyricsContainer.clientHeight / 2 + activeLyric.clientHeight / 2;
        lyricsContainer.scrollTo({ top: scrollAmount, behavior: "smooth" });
    }
}

// Attach an event listener to update lyrics when audio time updates
audio.addEventListener("timeupdate", updateLyrics);

