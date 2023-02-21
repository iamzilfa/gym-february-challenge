import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import "@/styles/globals.css";
import localFont from "@next/font/local";

const roboto = localFont({
  src: [
    {
      path: "../public/assets/fonts/roboto-latin-300-normal.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/roboto-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/roboto-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/roboto-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
});
export default function App({ Component, pageProps }) {
  return (
    <div className={`${roboto.variable} font-sans`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
