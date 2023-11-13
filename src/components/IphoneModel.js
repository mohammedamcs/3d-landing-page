import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "./Scene";
import { Suspense } from "react";
function IphoneModel() {
  return (
    <div id="iphone-model">
      <Canvas camera={{ fov: 5 }}>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}
export default IphoneModel;
