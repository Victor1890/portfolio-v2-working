import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useCallback } from "react"
import type { Engine } from "tsparticles-engine"

enum HoverParticleMode {
  attract = "attract",
  bounce = "bounce",
  bubble = "bubble",
  connect = "connect",
  grab = "grab",
  light = "light",
  repulse = "repulse",
  slow = "slow",
  trail = "trail"
}

const Background = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          repeat: "no-repeat",
          size: "cover",
          color: {
            value: "#0b0f17",
          },
        },
        fpsLimit: 160,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: true,
              mode: HoverParticleMode.repulse,
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#f59e0b",
          },
          links: {
            color: "#f59e0b",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 20,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default Background
