import { useEffect } from "react";

const MouseGlow = () => {
  useEffect(() => {
    const mouseGlow = document.getElementById("mouse-glow");

    const mouseGlowPos = { x: 0, y: 0 };
    const mousePos = { x: 0, y: 0 };

    if (!mouseGlow) {
      return;
    }

    document.addEventListener("mousemove", (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    });

    document.addEventListener("mouseleave", () => {
      mouseGlow.style.opacity = "0";
    });

    document.addEventListener("mouseenter", () => {
      mouseGlow.style.opacity = "1";
    });

    const updateMouseGlowPosition = () => {
      mouseGlowPos.x += (mousePos.x - mouseGlowPos.x) / 60;
      mouseGlowPos.y += (mousePos.y - mouseGlowPos.y) / 60;

      mouseGlow.style.left = mouseGlowPos.x - mouseGlow.offsetWidth / 2 + "px";
      mouseGlow.style.top = mouseGlowPos.y - mouseGlow.offsetWidth / 2 + "px";

      requestAnimationFrame(updateMouseGlowPosition);
    };

    requestAnimationFrame(updateMouseGlowPosition);
  }, []);

  return (
    <div
      id="mouse-glow"
      className="absolute left-0 top-0 w-300 h-300 bg-radial from-(--yellow)/20 via-amber-50/0 to-amber-50/0 transition-opacity duration-300 ease-in"
    />
    // <div
    //   id="mouse-glow"
    //   className="absolute left-0 top-0 w-20 h-20 bg-red-500"
    // />
  );
};

export default MouseGlow;
