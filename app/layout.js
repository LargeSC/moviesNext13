import "./globals.css";
import { Montserrat } from "next/font/google";
import Nav from "./Nav";
import Image from "next/image";

export const metadata = {
  title: "The Movie App",
  description: "App to find popular movies",
  icons: {
    icon: "/logo/favicon.png",
  },
};

export const montserrat = Montserrat({
  subsets: ["latin"],
  weights: [400, 700],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Nav />
        <div className="mx-8">{children}</div>
        <footer className="flex mt-32 justify-end items-center p-8 space-x-2">
          <p className=" text-sm">Information from: </p>
          <a href="https://www.themoviedb.org/">
            <Image
              src="/themoviedb_logo.svg"
              alt="The Movie DB Logo"
              width="100"
              height="50"
            />
          </a>
        </footer>
      </body>
    </html>
  );
}
