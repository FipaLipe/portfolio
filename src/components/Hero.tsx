import Eyes from "./Eyes";
import IconSpawner from "./IconSpawner";
import MouseGlow from "./MouseGlow";

const Hero = () => {
  return (
    <div className="p-10 lg:p-20 relative h-100 lg:h-[80vh] min-h-100 lg:min-h-210 z-10">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden ">
        <MouseGlow />
        <IconSpawner />
      </div>

      <div className="left-0 h-full z-10 max-w-300 mx-auto">
        <img src="/filipimartins.svg" className="w-40 lg:w-60"></img>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mt-6 -ml-1 h-full grow"
        >
          <line
            x1="8"
            y1="0"
            x2="8"
            y2="98%"
            style={{ stroke: "var(--yellow)", strokeWidth: 4 }}
          />
          <circle
            cx="8"
            cy="98%"
            r="6"
            style={{ stroke: "var(--yellow)", strokeWidth: 4 }}
          />
        </svg>
      </div>

      <div
        id="filipi-div"
        className="absolute flex top-0 left-0 w-full h-275 z-10 "
      >
        <div id="filipi" className="mx-auto">
          <img
            className="mx-auto mt-20 lg:mt-30 img-fluid h-fit w-90 lg:w-240 max-w-6xl"
            src="/filipi.png"
          ></img>
          <Eyes />
        </div>
      </div>
    </div>
  );
};

export default Hero;
