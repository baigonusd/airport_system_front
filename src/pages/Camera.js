// import styled from "./camera.module.css";

// const Camera = () => {
//   function startWebCam() {
//     let video = document.querySelector(".videoElement");

//     if (navigator.mediaDevices.getUserMedia) {
//       navigator.mediaDevices
//         .getUserMedia({ video: true })
//         .then(function (stream) {
//           video.srcObject = stream;
//         })
//         .catch(function (err0r) {
//           console.log("Something went wrong!");
//         });
//     }
//   }

//   function stop(e) {
//     let video = document.querySelector(".videoElement");

//     var stream = video.srcObject;
//     var tracks = stream.getTracks();

//     for (var i = 0; i < tracks.length; i++) {
//       var track = tracks[i];
//       track.stop();
//     }

//     video.srcObject = null;
//   }
//   return (
//     <>
//       <div className={styled.container}>
//         <video autoplay className={styled.videoElement}></video>
//       </div>
//       <button className={styled.stop} onClick={stop()}>
//         Stop Video
//       </button>
//       <button className={styled.start}>Start Video</button>
//     </>
//   );
// };

// export default Camera;

import Camera from "../component/Camera/camera";

const Camera = () => {
  return <Camera />;
};

export default Camera;
