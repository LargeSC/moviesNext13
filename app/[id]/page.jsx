import Image from "next/image";
import Movie from "../Movie";

export const getStaticParams = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return res.results.map((movie) => ({
    params: { id: movie.id.toString() },
  }));
};

const MovieDetails = async ({ params }) => {
  const movieId = params.id;

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  const imagePath = `https://image.tmdb.org/t/p/w500${res.poster_path}`;
  const imageUrl = `https://image.tmdb.org/t/p/w200`;

  const dataSimilar = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${process.env.API_KEY}&page=1`
  );
  const resSimilar = await dataSimilar.json();
  const hasSimilars = resSimilar?.results?.length !== 0;

  return (
    <div>
      <h2 className=" text-2xl  font-bold uppercase mt-10">{res.title} </h2>
      <div className="md:flex my-2">
        <Image
          className="aspect-auto rounded-lg shadow-md"
          src={imagePath}
          alt={res.title}
          width="800"
          height="600"
        />
        <div className="flex-col my-2 md:my-0 md:mx-8 md:space-y-1">
          <h3 className=" text-sm">Release date: {res.release_date}</h3>
          <p className=" text-sm">Runtime: {res.runtime} min</p>
          <p className=" text-sm">Rating: {res.vote_average.toFixed(1)}</p>
          <p className=" text-sm text-white bg-green-600 inline-block my-2 px-2 py-1 rounded">
            {res.status}
          </p>
          <p className=" text-base md:text-lg">{res.overview}</p>
        </div>
      </div>
      {hasSimilars && (
        <div>
          <h3 className=" text-2xl  font-bold uppercase mt-10">
            Similar movies:
          </h3>
          <div className=" grid gap-16 grid-cols-fluid mt-6">
            {resSimilar.results.slice(0, 5).map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={imageUrl + movie.poster_path}
                release={movie.release_date}
                rating={movie.vote_average}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
