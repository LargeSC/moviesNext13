import useData from "./hooks/useData";
import Movie from "./Movie";

export default async function Home() {
  const { data } = await useData("movie/popular");

  return (
    <main>
      <h2 className=" text-2xl  font-bold uppercase mt-10">Popular movies:</h2>
      <div className=" grid gap-16 grid-cols-fluid mt-6">
        {data.results.map((movie) => (
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
