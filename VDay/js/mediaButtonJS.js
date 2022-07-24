function toggle(){
    window.close();
}

function newVideoLoad(){
    var secondVideoFile = "https://drive.google.com/file/d/13V9J_IkJT80mmBvodnXaD244HxdC0OwW/preview";
    var videoinIframe = document.getElementById('videoID');
    videoinIframe.src = secondVideoFile;
    videoinIframe.load();
    videoinIframe.play();
}
