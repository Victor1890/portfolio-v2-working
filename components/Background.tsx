import { motion } from "framer-motion"
import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import type { Engine, ISourceOptions } from "tsparticles-engine"
import { HiOutlineQrcode } from "react-icons/hi";
import { NextPage } from "next"

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

const options: ISourceOptions = {
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
        mode: HoverParticleMode.connect,
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      connect: {
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
        area: 1800,
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
}

interface Props {
  setShowQR: (value: boolean) => void;
  showQR: boolean;
}

const Background: NextPage<Props> = ({ setShowQR, showQR }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
      />
      <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.2 } },
          }}
          className="fixed z-40 flex items-center justify-center text-white rounded-full bottom-6 right-6 w-14 h-14"
        >
          <div
            onClick={() => setShowQR(!showQR)}
            className="left-0 top-0 p-3 text-white transition-all bg-gray-700 rounded-full cursor-pointer scale-150 active:scale-160 hover:scale-165"
          >
            <HiOutlineQrcode className="w-5 h-5 " />
          </div>
        </motion.div>
    </>
  )
}

export default Background
