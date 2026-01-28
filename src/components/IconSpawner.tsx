import { useEffect } from "react";
import { iconsList, randInt } from "../lib/utils";

const IconSpawner = () => {
  useEffect(() => {
    const iconSpawner = document.getElementById("icon_spawner");
    const icon = document.getElementById("icon");
    const defaultDelay = 3;
    let delay = defaultDelay;

    if (!icon) return;

    window.addEventListener("mousemove", (e) => {
      if (delay > 0) {
        delay--;
        return;
      }
      const newIcon = icon.cloneNode(true) as HTMLElement;

      newIcon.innerText = iconsList[randInt(0, iconsList.length - 1)];

      const x = e.clientX + window.scrollX;
      const y = e.clientY + window.scrollY;

      newIcon.style.left = x - newIcon?.offsetWidth / 2 + "px";
      newIcon.style.top = y - newIcon?.offsetHeight / 2 + "px";

      const start = {
        x: randInt(-30, 30),
        y: randInt(-30, 30),
      };

      const length = Math.hypot(start.x, start.y) || 1;

      const dir = {
        x: start.x / length,
        y: start.y / length,
      };

      const burstForce = randInt(0, 100);
      const scaleStart = randInt(80, 130) / 100;
      const rotation = randInt(-120, 120);

      const end = {
        x: start.x + dir.x * burstForce,
        y: start.y + dir.y * burstForce,
      };

      const animation = newIcon.animate(
        [
          {
            transform: `
        translate(${start.x}px, ${start.y}px)
        scale(${scaleStart})
      `,
            opacity: 1,
          },
          {
            transform: `
        translate(${end.x}px, ${end.y}px)
        rotate(${rotation}deg)
        scale(0.1)
      `,
            opacity: 0,
          },
        ],
        {
          duration: randInt(600, 1000),
          easing: "cubic-bezier(0.13,0.23,0.53,1)",
          fill: "forwards",
        },
      );

      animation.finished.then(() => {
        newIcon.remove();
      });

      iconSpawner?.appendChild(newIcon);
      delay = defaultDelay;
    });

    window.addEventListener("click", (e) => {
      for (let i = 0; i < 10; i++) {
        const newIcon = icon.cloneNode(true) as HTMLElement;

        newIcon.innerText = iconsList[randInt(0, iconsList.length - 1)];

        const x = e.clientX + window.scrollX;
        const y = e.clientY + window.scrollY;

        newIcon.style.left = x - newIcon?.offsetWidth / 2 + "px";
        newIcon.style.top = y - newIcon?.offsetHeight / 2 + "px";

        const start = {
          x: randInt(-60, 60),
          y: randInt(-60, 60),
        };

        const length = Math.hypot(start.x, start.y) || 1;

        const dir = {
          x: start.x / length,
          y: start.y / length,
        };

        const burstForce = randInt(0, 200);
        const scaleStart = randInt(80, 130) / 100;
        const rotation = randInt(-120, 120);

        const end = {
          x: start.x + dir.x * burstForce,
          y: start.y + dir.y * burstForce,
        };

        const animation = newIcon.animate(
          [
            {
              transform: `
        translate(${start.x}px, ${start.y}px)
        scale(${scaleStart})
      `,
              opacity: 1,
            },
            {
              transform: `
        translate(${end.x}px, ${end.y}px)
        rotate(${rotation}deg)
        scale(0.1)
      `,
              opacity: 0,
            },
          ],
          {
            duration: randInt(600, 1000),
            easing: "cubic-bezier(0.13,0.23,0.53,1)",
            fill: "forwards",
          },
        );

        animation.finished.then(() => {
          newIcon.remove();
        });

        iconSpawner?.appendChild(newIcon);
      }
    });
  }, []);

  return (
    <div id="icon_spawner">
      <span
        id="icon"
        className="absolute top-0 -left-100 material-symbols-outlined text-amber-500 md-48 throw-symbol"
      >
        science_off
      </span>
    </div>
  );
};

export default IconSpawner;
