import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import QRCode from "qrcode";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, "../public/qr-social.svg");

const qrSvg = await QRCode.toString("https://enbonnet.com/social", {
  type: "svg",
  errorCorrectionLevel: "H",
  margin: 2,
  color: {
    dark: "#101310",
    light: "#ffffff",
  },
});

writeFileSync(outPath, qrSvg);
console.log("QR code generated:", outPath);