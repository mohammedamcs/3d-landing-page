import cameraTestImage from "../../assets/images/iphone15-camera.jpg";

function CameraExplore() {
  return (
    <section className="explore alt-view">
      <div className="header">
        <h3>A camera that captures your wildest imagination.</h3>
      </div>
      <div className="content">
        <div className="text">
          <span>
            From dramatic framing flexibility to next-generation portraits, see
            what you
          </span>
          <span>can do with our most powerful iPhone camera system.</span>
        </div>
        <img src={cameraTestImage} alt="camera-test" />
      </div>
    </section>
  );
}
export default CameraExplore;
