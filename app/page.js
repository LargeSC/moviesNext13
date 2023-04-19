import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Movie from "./Movie";

const inter = Inter({ subsets: ["latin"] });

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <main>
      <div className=" grid gap-16 grid-cols-fluid mt-6">
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            release={movie.release_date}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </main>
  );
}
