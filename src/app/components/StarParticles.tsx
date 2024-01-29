import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Container } from "@tsparticles/engine";

export default function StarParticles() {
    const [init, setInit] = useState<boolean>(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    })

    const particlesLoaded = async (container?: Container): Promise<void> => {}

    if (init) {
        return <Particles
            id="star"
            url="/particles.json"
            particlesLoaded={particlesLoaded}
          />
    }
    return <></>;
}