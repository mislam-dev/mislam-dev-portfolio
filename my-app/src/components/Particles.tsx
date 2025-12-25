"use client";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim"
import { useEffect, useMemo, useState } from "react";

export const CustomParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      particles: {
        number: { value: 320, density: { enable: true } },
        color: { value: "#ffffff" },
        size: { value: { min: 0.5, max: 2 } },
        move: { enable: true, speed: 0.5, direction: "none", outModes: "out" },
      },
    }),
    []
  );

  if (init) {
    return (
      <div className="absolute  w-screen h-screen">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }

  return <></>;
};
