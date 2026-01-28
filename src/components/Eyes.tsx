import { useEffect, useRef } from "react";

const Eyes = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  // grupos estáticos (não se movem)
  const leftSocketRef = useRef<SVGGElement | null>(null);
  const rightSocketRef = useRef<SVGGElement | null>(null);

  // pupilas móveis
  const leftPupilRef = useRef<SVGGElement | null>(null);
  const rightPupilRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const leftSocket = leftSocketRef.current;
    const rightSocket = rightSocketRef.current;

    if (!svg || !leftSocket || !rightSocket) return;

    // centros fixos (socket nunca se move)
    const leftBox = leftSocket.getBBox();
    const rightBox = rightSocket.getBBox();

    const leftCenter = {
      x: leftBox.x + leftBox.width / 2,
      y: leftBox.y + leftBox.height / 2,
    };

    const rightCenter = {
      x: rightBox.x + rightBox.width / 2,
      y: rightBox.y + rightBox.height / 2,
    };

    // alcance máximo
    const leftMax = Math.min(leftBox.width, leftBox.height) * 0.45;
    const rightMax = Math.min(rightBox.width, rightBox.height) * 0.45;

    const getMouseInSvg = (e: MouseEvent) => {
      const pt = svg.createSVGPoint();
      pt.x = e.clientX;
      pt.y = e.clientY;
      return pt.matrixTransform(svg.getScreenCTM()!.inverse());
    };

    const move = (
      mouse: { x: number; y: number },
      center: { x: number; y: number },
      max: number,
      ref: React.RefObject<SVGGElement | null>,
    ) => {
      if (!ref.current) return;

      const dx = mouse.x - center.x;
      const dy = mouse.y - center.y;

      const dist = Math.hypot(dx, dy);
      const limited = Math.min(dist, max);
      const ratio = dist === 0 ? 0 : limited / dist;

      ref.current.setAttribute(
        "transform",
        `translate(${dx * ratio}, ${dy * ratio})`,
      );
    };

    const handleMouseMove = (e: MouseEvent) => {
      const mouse = getMouseInSvg(e);

      move(mouse, leftCenter, leftMax, leftPupilRef);
      move(mouse, rightCenter, rightMax, rightPupilRef);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <svg
      id="eyes"
      ref={svgRef}
      viewBox="0 0 107 25"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute w-9 lg:w-24 left-[calc(50%+2px)] lg:left-[calc(50%+5px)] top-30.5 lg:top-58.75 -translate-x-1/2 -translate-y-1/2"
    >
      {/* OLHO ESQUERDO */}
      <path
        d="M21.5 1.5C26.7966 1.5 31.6661 2.59936 35.2666 4.44824C38.7883 6.25671 41.5 9.0234 41.5 12.5C41.5 15.9766 38.7883 18.7433 35.2666 20.5518C31.6661 22.4006 26.7966 23.5 21.5 23.5C16.2034 23.5 11.3339 22.4006 7.7334 20.5518C4.21165 18.7433 1.5 15.9766 1.5 12.5C1.5 9.0234 4.21165 6.25671 7.7334 4.44824C11.3339 2.59936 16.2034 1.5 21.5 1.5Z"
        fill="#FFFAF3"
        stroke="#403226"
        strokeWidth="3"
      />

      <mask
        id="mask-left"
        maskUnits="userSpaceOnUse"
        x="3"
        y="3"
        width="37"
        height="19"
      >
        <ellipse cx="21.5" cy="12.5" rx="18.5" ry="9.5" fill="#fff" />
      </mask>

      {/* socket ESQUERDO (fixo) */}
      <g ref={leftSocketRef} mask="url(#mask-left)">
        {/* pupila ESQUERDA (móvel) */}
        <g ref={leftPupilRef}>
          <path
            d="M29.9999 12.4999C29.9999 19.9558 26.1944 25.9999 21.4999 25.9999C16.8055 25.9999 12.9999 19.9558 12.9999 12.4999C12.9999 5.0441 16.8055 -1.00006 21.4999 -1.00006C26.1944 -1.00006 29.9999 5.0441 29.9999 12.4999Z"
            fill="#403226"
          />
          <path
            d="M22.3771 8.71121L30.3689 1.8409L32.7541 6.87035L22.3771 8.71121Z"
            fill="#FFFAF3"
          />
        </g>
      </g>

      {/* OLHO DIREITO */}
      <path
        d="M85.5 1.5C90.7966 1.5 95.6661 2.59945 99.2666 4.44833C102.788 6.2568 105.5 9.02349 105.5 12.5C105.5 15.9767 102.788 18.7434 99.2666 20.5518C95.6661 22.4007 90.7966 23.5 85.5 23.5C80.2034 23.5 75.3339 22.4007 71.7334 20.5518C68.2117 18.7434 65.5 15.9767 65.5 12.5C65.5 9.02349 68.2117 6.2568 71.7334 4.44833C75.3339 2.59945 80.2034 1.5 85.5 1.5Z"
        fill="#FFFAF3"
        stroke="#403226"
        strokeWidth="3"
      />

      <mask
        id="mask-right"
        maskUnits="userSpaceOnUse"
        x="67"
        y="3"
        width="37"
        height="19"
      >
        <ellipse cx="85.5" cy="12.5" rx="18.5" ry="9.5" fill="#fff" />
      </mask>

      {/* socket DIREITO (fixo) */}
      <g ref={rightSocketRef} mask="url(#mask-right)">
        {/* pupila DIREITA (móvel) */}
        <g ref={rightPupilRef}>
          <path
            d="M94.3207 12.5001C94.3207 19.9559 90.5152 26.0001 85.8207 26.0001C81.1263 26.0001 77.3207 19.9559 77.3207 12.5001C77.3207 5.04425 81.1263 -0.999908 85.8207 -0.999908C90.5152 -0.999908 94.3207 5.04425 94.3207 12.5001Z"
            fill="#403226"
          />
          <path
            d="M86.6979 8.71136L94.6897 1.84106L97.0749 6.8705L86.6979 8.71136Z"
            fill="#FFFAF3"
          />
        </g>
      </g>
    </svg>
  );
};

export default Eyes;
