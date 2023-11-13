import A17ChipExplore from "./components/Explore/A17ChipExplore";
import A17Chip from "./components/Highlights/A17Chip";
import Titanium from "./components/Highlights/Titanium";
import Camera from "./components/Highlights/Camera";
import Intro from "./components/Intro";
import CameraExplore from "./components/Explore/CameraExplore";
import BatteryLife from "./components/Explore/BatteryLife";
import Separator from "./components/Separator";
import IphoneModel from "./components/IphoneModel";
import CloserLook from "./components/CloserLook";

function App() {
  return (
    <div className="App">
      <Intro />
      <A17Chip />
      <A17ChipExplore />
      <Camera />
      <CameraExplore />
      <Titanium />
      <BatteryLife />
      <Separator />
      <IphoneModel />
      <CloserLook />
    </div>
  );
}

export default App;
