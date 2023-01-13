import "../styles/globals.css";
import { Rubik } from "@next/font/google";
const rubik = Rubik({ weight: ["400","500", "700"], subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <main className={`${rubik.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
