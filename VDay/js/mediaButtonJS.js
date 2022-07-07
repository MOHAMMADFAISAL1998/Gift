function toggle(){
    window.close();
}

function newVideoLoad(){
    var secondVideoFile = "https://drive.google.com/file/d/1oYMec2rICEqJ28CPort_DCx5ALq4s0UG/preview";
    var videoinIframe = document.getElementById('videoID');
    videoinIframe.src = secondVideoFile;
    videoinIframe.load();
    videoinIframe.play();
}
