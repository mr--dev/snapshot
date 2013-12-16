/*
JS files per fototessera.
*/

// Some cross-browser compatibility
window.URL = window.URL || window.webkitURL;
navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.getUserMedia;

var localMediaStream = null;

function hasGetUserMedia() {
    // Note: Opera is unprefixed.
    return !!(navigator.getUserMedia);
}

function cameraFail (e) {
    alert("Operation Failed: " + e);
}

function applyFilter() {
    var filter = document.getElementById('filter').value;
    var ss = document.getElementById('screenshot').className = "photo "+filter;
    var pf = document.getElementsByClassName('print-photo');
    for (ii = 0; ii < pf.length; ii++) {
        pf[ii].className = "print-photo "+filter;
    }
}

function snapshot() {
    var canvas = document.getElementById('canvas');
    var video = document.getElementById('video');
    // Extremely Important: Setting Canvas Dimension
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx = canvas.getContext('2d');

    if (localMediaStream) {
        _w = video.videoWidth;
        _h = video.videoHeight;
        _xdim = 330;
        _ydim = 400;
                
        x1 = 155; y1 = 40; w1 = _xdim; h1= _ydim;
        x2 = 0; y2 = 0; w2 = _w; h2= _h;
        ctx.drawImage(video, x1, y1, w1, h1, x2, y2, w2, h2);
        var imgSrc = canvas.toDataURL('image/webp')
        document.getElementById('screenshot').src = imgSrc;
        var pf = document.getElementsByClassName('print-photo');
        for (ii = 0; ii < pf.length; ii++){
            pf[ii].src = imgSrc;
        }
    } else {
        alert("Fai partire il video prima!");
    }
}

function startCamera() {
    // Check if I can use camera.
    if (!hasGetUserMedia()) {
        alert('getUserMedia() is not supported in your browser');
    } else if (localMediaStream) {
        alert('Video already playing.');
    }
    else {
        navigator.getUserMedia(
            {video: true}, 
            function (stream){
                localMediaStream = stream;
                var video = document.getElementById('video');
                video.src = window.URL.createObjectURL(stream);
            }, 
            cameraFail
        );
    }
}

function stopCamera() {
    if (localMediaStream) {
        localMediaStream.stop();
        localMediaStream = null;
    }
}
