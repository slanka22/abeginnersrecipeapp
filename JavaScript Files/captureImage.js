let uploadedImageData = null;
let stream = null;

document.getElementById("startCameraBtn").onclick = async () => {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const video = document.getElementById("cameraView");
    video.srcObject = stream;

    video.style.display = "block";
    document.getElementById("takePhotoBtn").style.display = "inline-block";
    document.getElementById("startCameraBtn").style.display = "none";
};

document.getElementById("takePhotoBtn").onclick = () => {
    const video = document.getElementById("cameraView");
    const canvas = document.getElementById("cameraCanvas");
    const img = document.getElementById("capturedImage");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    canvas.getContext("2d").drawImage(video, 0, 0);

    uploadedImageData = canvas.toDataURL("image/png");

    img.src = uploadedImageData;
    img.style.display = "block";

    // Stop camera
    stream.getTracks().forEach(t => t.stop());
    video.style.display = "none";
    document.getElementById("takePhotoBtn").style.display = "none";
};
