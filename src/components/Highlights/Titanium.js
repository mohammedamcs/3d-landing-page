import titaniumVideo from "../../assets/video/iphone15-titanium-video.mp4";
function Titanium() {
  return (
    <section className="highlights">
      
      <div className="content">
        <div className="video-wrapper">
          <div className="text">
            <span>Titanium.</span>
            <span>So strong. So light. So Pro.</span>
          </div>
          <video src={titaniumVideo} muted autoPlay loop></video>
        </div>
      </div>
    </section>
  );
}
export default Titanium;
