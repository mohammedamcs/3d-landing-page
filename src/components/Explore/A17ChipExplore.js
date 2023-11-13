import A17ChipImage from "../../assets/images/a17-chip.jpg";
import GamingImage from "../../assets/images/iphone15-gaming.png";
function A17ChipExplore() {
  return (
    <section className="explore a17-chip">
      <div className="header">
        <img src={A17ChipImage} alt="a17-chip" />
      </div>
      <div className="content">
        <div className="text">
          <span>A17 Pro chip.</span>
          <span>A monster win for gaming.</span>
        </div>
        <img src={GamingImage} alt="a17-chip-gaming-test" />
      </div>
    </section>
  );
}
export default A17ChipExplore;
