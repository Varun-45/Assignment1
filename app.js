
document.addEventListener("DOMContentLoaded", () => {
    var but = document.getElementById("but");
    var video = document.getElementById("vid");
    var mediaDevices = navigator.mediaDevices;
    var succ = document.getElementById("succ");
    var txt = document.getElementById("txt");
    vid.muted = true;
    but.addEventListener("click", () => {
        but.style.display = "none";
        txt.innerText = "Verifying..."
        mediaDevices
            .getUserMedia({
                video: true,

            })
            .then((stream) => {

                // Changing the source of video to current stream.
                video.srcObject = stream;
                video.addEventListener("loadedmetadata", () => {
                    video.play();
                });
            })
            .catch(alert);
        setTimeout(() => {
            video.style.display = 'none';
            succ.style.display = 'block';
            txt.style.display = 'none';
        }, 4000);
    });
});
console.log(4)