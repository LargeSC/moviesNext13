import Image from "next/image";

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

  console.log(res);

  return (
    <div>
      <div>
        <h2 className=" text-2xl">{res.title} </h2>
        <h3 className=" text-lg">Rel date: {res.release_date}</h3>
        <p className=" text-sm">Runtime: {res.runtime} min</p>
        <p className=" text-sm bg-green-600 inline-block my-2 px-2 py-1 rounded">
          {res.status}
        </p>
        <Image
          className="my-10"
          src={imagePath}
          alt={res.title}
          width="800"
          height="600"
        />
        <p className=" text-sm">{res.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
