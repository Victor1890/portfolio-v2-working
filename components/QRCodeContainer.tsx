import QRCode from "react-qr-code";
import Ripples from "react-ripples";
import useWindowLocation from "../hooks/useWindowLocation";
import { CgClose } from "react-icons/cg";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
    showQR: boolean;
    setShowQR: (value: boolean) => void;
}

export default function QRCodeContainer({ showQR, setShowQR}: Props) {
  const { currentURL } = useWindowLocation();

  function downloadQRCode() {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer().serializeToString(svg!);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  }
  return (
    <>
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            variants={{
              hidden: { y: "100vh", opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            transition={{
              type: "spring",
              bounce: 0.15,
            }}
            className="fixed inset-0 grid bg-white dark:bg-darkSecondary place-items-center"
            style={{ zIndex: 10000 }}
          >
            <button
              className="absolute text-black outline-none right-5 top-5 dark:text-white scale-150 hover:scale-165"
              onClick={() => setShowQR(false)}
            >
              <CgClose className="w-8 h-8" />
            </button>

            <div className="flex flex-col gap-2 text-black dark:text-white">
              <h1 className="text-5xl md:text-3xl font-semibold">Share this page</h1>
              <QRCode
                id="QRCode"
                value={currentURL}
                bgColor={"#fff"}
                fgColor={"#25282a"}
              />

              <Ripples
                className="mt-2"
                color={"rgba(225, 225, 225, 0.2)"}
              >
                <button
                  className="w-full px-6 py-5 text-sm font-medium text-white rounded bg-darkPrimary dark:bg-gray-100 dark:text-darkPrimary scale-150"
                  onClick={downloadQRCode}
                >
                  Download
                </button>
              </Ripples>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
