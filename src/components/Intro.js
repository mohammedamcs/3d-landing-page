import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

function Intro() {
  gsap.registerPlugin(ScrollTrigger);
  const introRef = useRef(null);

  useLayoutEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: introRef.current,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });

    return () => {
      if (trigger) trigger.kill();
    };
  }, []);
  return (
    <section className="intro" ref={introRef}>
      <div className="text">
        <h2>iPhone 15 Pro</h2>
        <h3>Titanium. So strong. So light. So Pro.</h3>
      </div>
      <div className="image"></div>
    </section>
  );
}
export default Intro;
