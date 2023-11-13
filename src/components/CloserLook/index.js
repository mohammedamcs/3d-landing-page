import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import CloserLookModel from "./closerLookScene";

function CloserLook() {
  const { materials } = useGLTF("/closerLookScene.gltf");
  const colors = {
    natural: "#8f8a81",
    blue: "#1a202a",
    white: "#c9c8c3",
    black: "#1e1f20",
  };

  const handleClick = (e) => {
    const color = e.target.className;
    for (let key in materials) {
      if (materials[key].color && key !== "EuTsEfyoAnyJIih") {
        materials[key].color.set(colors[color]);
      }
    }
  };
  return (
    <section className="closer-look" id="closer-look">
      <div className="text">
        <h4>Take a closer look.</h4>
      </div>
      <div id="closer-look-model">
        <Canvas camera={{ fov: 2 }}>
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <CloserLookModel />
          </Suspense>
          <Environment preset="sunset" />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <div className="colors-wrapper">
        <div className="colors" onClick={handleClick}>
          <span className="natural"></span>
          <span className="blue"></span>
          <span className="white"></span>
          <span className="black"></span>
        </div>
      </div>
    </section>
  );
}
export default CloserLook;
