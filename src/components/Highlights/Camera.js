import ZoomVideo from "../../assets/video/iphone15-zoom-video.mp4";

function Camera() {
  return (
    <section className="highlights">
      <div className="content">
        <div className="video-wrapper">
          <div className="text">
            <span>iPhone 15 Pro Max has</span>
            <span>the longest optical zoom in </span>
            <span>iPhone ever. Far out.</span>
          </div>
          <video src={ZoomVideo} muted autoPlay loop></video>
        </div>
      </div>
    </section>
  );
}
export default Camera;
