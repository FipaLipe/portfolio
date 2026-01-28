import { useState } from "react";

// interface Image {
//   src: string;
//   x: number;
//   y: number;
// }

interface ExperienceProps {
  title: string;
  description: string;
  images: string[];
  //   activeImages: Image[];
  //   addActiveImage: (image: Image) => void;
  //   resetActiveImages: () => void;
}

const Experience = ({
  title,
  description,
  images,
  //   activeImages,
  //   addActiveImage,
  //   resetActiveImages,
}: ExperienceProps) => {
  const [hovered, setHovered] = useState(false);
  //   const [imageIndex, setImageIndex] = useState(0);

  //   const handleMouseMove = (
  //     event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  //   ) => {
  //     const x = event.clientX + window.scrollX;
  //     const y = event.clientY + window.scrollY;

  //     if (!activeImages.at(-1)) {
  //       addActiveImage({ src: images[imageIndex], x, y });
  //       setImageIndex((p) => (p + 1) % images.length);
  //       return;
  //     }

  //     const dx = x - activeImages.at(-1)!.x;
  //     const dy = y - activeImages.at(-1)!.y;

  //     const distance = Math.sqrt(dx * dx + dy * dy);

  //     if (distance >= 100) {
  //       addActiveImage({ src: images[imageIndex], x, y });
  //       setImageIndex((p) => (p + 1) % images.length);
  //     }
  //   };

  return (
    <li
      className="w-full border border-amber-500 p-3 pl-4 bg-transparent overflow-hidden h-full max-h-16 hover:max-h-120 transition-[max-height,background-color,color] duration-300 ease-in-out relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        // resetActiveImages();
      }}
      //   onMouseMove={handleMouseMove}
    >
      <h2
        className="text-2xl text-amber-500
    font-['Anonymous_pro']
    uppercase"
      >
        {title}
      </h2>

      <p
        className={`
      block
      mt-2
      text-md w-10/12 text-justify text-amber-500
      transition-opacity
      duration-200
      ${hovered ? "opacity-100" : "opacity-0"}
    `}
      >
        {description}
      </p>

      <div className="flex flex-row gap-4 mt-2">
        {images.map((img, i) => (
          <img
            src={img}
            alt={img}
            key={i}
            className="img-fluid w-5/12 h-fit rounded-xl -hover:translate-y-5 hover:scale-102 hover:shadow-md transition-all duration-200 ease-in"
          />
        ))}
      </div>
    </li>
  );
};

const Experiences = () => {
  //   const [activeImages, setActiveImages] = useState<Image[]>([]);

  //   const addActiveImage = (img: Image) => {
  //     setActiveImages((prev) => [...prev, img].slice(-3));
  //   };

  return (
    <div className="min-h-150 max-w-300 w-full mx-auto p-20 flex flex-col justify-center items-start">
      <h1 className="text-8xl font-black text-amber-500 text-start m-0">
        EXPERIÊNCIAS
      </h1>
      <ul className="w-full mt-10">
        <Experience
          title="Olimpíadas Científicas"
          description="Participei de olimpíadas em diferentes áreas do conhecimento, como matemática, biologia, história, física, informática... Essas experiências me ensinaram a lidar com problemas abertos, pensar sob pressão e buscar entendimento profundo, não apenas respostas rápidas."
          images={[
            "/olimpiadas_1.jpg",
            "/olimpiadas_2.jpg",
            // "/olimpiadas_3.jpg",
          ]}
        />

        <Experience
          title="Simulação da ONU"
          description="Participei da FAMUN, uma simulação da ONU, na qual atuei em debates, negociações e construção de consensos. A experiência desenvolveu minha cooperação, argumentação, escuta ativa e capacidade de dialogar com pontos de vista diferentes. Ao final, recebi o prêmio de melhor diplomacia do meu comitê."
          images={["famun_1.jpeg", "famun_2.jpeg"]}
        />

        <Experience
          title="Feira Tecnológica"
          description="Em grupo, apresentamos o tema de low-code e no-code para alunos do ensino médio e desenvolvemos uma ferramenta de IA para demonstrá-lo na prática. A experiência fortaleceu minha didática, trabalho em equipe e oratória, além de exigir comunicação clara de conceitos técnicos."
          images={["feira_1.jpg", "feira_2.jpg"]}
        />

        <Experience
          title="Projetos de Programação"
          description="Desenvolvo projetos próprios de programação para resolver problemas do meu dia a dia ou explorar ideias que surgem da curiosidade. Aprendo principalmente no processo de construir, errar e refinar soluções."
          images={["projetos_1.jpg", "projetos_2.jpg"]}
        />

        <Experience
          title="TCC (Técnico em Informática)"
          description="Em grupo, estruturamos uma empresa do zero e desenvolvemos uma solução para resolver um problema de um cliente real. O projeto consolidou minha base em informática e reforçou meu interesse por aprender fazendo, lidando com requisitos, prazos e decisões práticas."
          images={["tcc_1.jpg", "tcc_2.jpg"]}
        />
      </ul>

      {/* <div className="absolute w-full h-full top-0 left-0 z-10 pointer-events-none">
        {activeImages.map((img, i) => (
          <img
            key={img.src + img.x + img.y + i}
            src={img.src}
            className="absolute w-50 img-fluid h-fit animate-[jump_300ms_ease-in] origin-bottom-right"
            style={{
              left: img.x,
              top: img.y,
              transform: "translate(-100%, -100%)",
            }}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Experiences;
