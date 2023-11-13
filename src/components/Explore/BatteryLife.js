import batteryImage from "../../assets/images/iphone15-batterylife.png";
function BatteryLife() {
  return (
    <section className="explore alt-view">
      <div className="header">
        <h3>Battery life that’s positively Pro.</h3>
      </div>
      <div className="content">
        <div className="text">
          <span>
          Even with so many advanced new features, iPhone 15 still
          </span>
          <span>gives you amazing all‑day battery life.</span>
        </div>
        <img src={batteryImage} alt="battery-test" />
      </div>
    </section>
  );
}
export default BatteryLife;
