import "../styles/globals.css";
import { Rubik } from "@next/font/google";
import localFont from "@next/font/local";
const rubik = Rubik({ weight: ["400", "500", "700"], subsets: ["latin"] });
const aveFedan = localFont({ src: "./AveFedan.ttf" });
export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --aveFedan-font: ${aveFedan.style.fontFamily};
          }
        `}
      </style>
      <main className={`${rubik.className}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
