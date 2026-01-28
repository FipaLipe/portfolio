import { useEffect } from "react";
import { iconsList, randInt } from "../lib/utils";

const Icon = () => (
  <span
    className="
        material-symbols-outlined
        text-amber-500
        md-48
        throw-symbol
        transition-transform
        duration-300
        ease-[cubic-bezier(0.00,1.16,0.80,0.80)]
        hover:scale-120
        z-20
        cursor-default
      "
  >
    {iconsList[randInt(0, iconsList.length - 1)]}
  </span>
);

const AboutMe = () => {
  useEffect(() => {
    const icons = document.getElementById("icons");
    if (!icons) return;

    Array.from(icons.children).forEach((wrapper) => {
      if (wrapper instanceof HTMLElement) {
        wrapper.style.animation = `float-light ${randInt(
          2000,
          5000,
        )}ms ease-in-out infinite`;
      }
    });
  }, []);

  return (
    <div
      id="about"
      className="min-h-125 w-full bg-black text-yellow-50 flex p-10 flex-col lg:flex-row gap-2 items-center justify-center relative"
    >
      <img
        src="/brain.png"
        alt="cérebro"
        className="w-120 h-fit animate-[float-light_3000ms_ease-in-out_infinite] -my-12 lg:my-0 "
      />

      <div className="flex flex-col gap-3 h-full">
        <h1 className="text-6xl lg:text-8xl font-black text-amber-500">
          OLÁ!!
        </h1>

        <p className="text-sm lg:text-lg font-light leading-[100%] ml-8 lg:ml-12">
          Prazer! Eu sou o Filipi
        </p>

        <p className="text-sm lg:text-lg font-light leading-[120%] ml-16 lg:ml-24 w-60 lg:w-80">
          <span className="font-['Jacquard_12'] text-2xl leading-[100%]">
            Sempre
          </span>{" "}
          fui curioso e interessado em entender como as coisas funcionam.
        </p>

        <p className="text-sm lg:text-lg font-light leading-[120%] ml-24 lg:ml-36 w-60 lg:w-80">
          <span className="font-['Jacquard_12'] text-2xl leading-[100%]">
            Hoje
          </span>{" "}
          exploro ciência e tecnologia principalmente por meio da matemática e
          da programação, aprendendo na prática e conectando diferentes áreas.
        </p>
      </div>

      {/* ÍCONES FLUTUANTES */}
      <div
        id="icons"
        className="hidden lg:block absolute w-full max-w-300 h-full z-20"
      >
        <span className="absolute top-105 left-50 -rotate-15 scale-[1]">
          <Icon />
        </span>

        <span className="absolute top-10 left-60 rotate-10">
          <Icon />
        </span>

        <span className="absolute top-110 left-120 rotate-10 scale-[0.8]">
          <Icon />
        </span>

        <span className="absolute top-15 left-130 rotate-15">
          <Icon />
        </span>

        <span className="absolute top-70 left-145 rotate-5 scale-[0.8]">
          <Icon />
        </span>

        <span className="absolute top-100 left-165 rotate-15 scale-[0.9]">
          <Icon />
        </span>

        <span className="absolute top-8 left-190 -rotate-15 scale-[0.8]">
          <Icon />
        </span>

        <span className="absolute top-30 left-245 rotate-15">
          <Icon />
        </span>

        <span className="absolute top-110 left-240 rotate-15 scale-[0.8]">
          <Icon />
        </span>
      </div>
    </div>
  );
};

export default AboutMe;
