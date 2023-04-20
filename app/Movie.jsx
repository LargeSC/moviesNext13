import Image from "next/image";
import Link from "next/link";

export default function Movie({ id, title, poster, release, rating }) {
  const imagePath = `https://image.tmdb.org/t/p/w500${poster}`;
  return (
    <div
      className={`flex flex-col items-center hover:scale-105 transition-all`}
    >
      <h2 className="truncate font-bold">{title}</h2>
      <p className="text-sm mb-2">Rating: {rating.toFixed(1)}</p>
      <Link href={`/${id}`}>
        <Image
          src={imagePath}
          alt={title}
          width="800"
          height="600"
          className="rounded-md shadow-md "
        />
      </Link>
    </div>
  );
}
