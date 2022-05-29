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

import React, { useState } from "react";
import Webcam from "react-webcam";
import styled from "./camera.module.css";
import Modal from "../Modal/Modal";

class Camera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      camera: false,
    };
  }
  setCam(bool) {
    this.setState({ camera: bool });
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.capture();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  setRef = (webcam) => {
    this.webcam = webcam;
  };

  capture = () => {
    if (this.webcam) {
      const imageSrc = this.webcam.getScreenshot();
      //console.log(imageSrc);
    }
  };
  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user",
    };

    return (
      <div className={styled.camDiv}>
        <button onClick={() => this.setState({ camera: true })}>
          Open camera
        </button>
        <Modal active={this.state} setActive={() => this.setCam(false)}>
          {this.state.camera ? (
            <Webcam
              audio={false}
              className={this.state.camera ? styled.cam : styled.close}
              ref={this.setRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          ) : (
            ""
          )}
        </Modal>
      </div>
    );
  }
}
export default Camera;
