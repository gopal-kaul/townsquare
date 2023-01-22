import "../styles/globals.css";
import { Rubik, Roboto } from "@next/font/google";
import localFont from "@next/font/local";
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const rubik = Rubik({ weight: ["400", "500", "700"], subsets: ["latin"] });
const aveFedan = localFont({
  src: "./AveFedan.ttf",
  variable: "--aveFedan-font",
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`${roboto.variable} ${rubik.className} ${aveFedan.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
