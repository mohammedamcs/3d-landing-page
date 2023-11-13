import A17ChipVideo from "../../assets/video/iphone15-a17-chip-video.mp4";

function A17Chip() {
  return (
    <section className="highlights" id="Start-trigger">
      <div className="header">
        <h3>Get the highlights.</h3>
      </div>
      <div className="content">
        <div className="video-wrapper">
          <div className="text">
            <span>Enter A17 Pro.</span>
            <span>Game‑changing chip.</span>
            <span>Groundbreaking performance.</span>
          </div>
          <video src={A17ChipVideo} muted autoPlay loop></video>
        </div>
      </div>
    </section>
  );
}
export default A17Chip;
