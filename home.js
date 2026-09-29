const opening = document.getElementById("opening");
const homePage = document.getElementById("homePage");
const birthdaySong = document.getElementById("birthdaySong");

let songStarted = false;

function startSong() {
    if (songStarted) return;

    birthdaySong.volume = 0.45;

    birthdaySong.play()
        .then(function () {
            songStarted = true;
        })
        .catch(function (error) {
            console.log("Musik belum bisa diputar:", error);
        });
}

window.addEventListener("load", function () {

    setTimeout(function () {
        opening.classList.add("hide");
        homePage.classList.add("show");

        // Coba autoplay
        startSong();

    }, 1300);

    // Kalau autoplay diblokir, musik akan mulai
    // ketika user menyentuh/klik halaman
    document.addEventListener("click", startSong, {
        once: true
    });

    document.addEventListener("touchstart", startSong, {
        once: true
    });

});