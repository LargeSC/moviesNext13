import Image from "next/image";
import Link from "next/link";

export default function Movie({ id, title, poster, release }) {
  const imagePath = `https://image.tmdb.org/t/p/w500${poster}`;
  return (
    <div className={`flex flex-col items-center`}>
      <h2>{title}</h2>
      <p>{release}</p>
      <Link href={`/${id}`}>
        <Image src={imagePath} alt={title} width="800" height="600" />
      </Link>
    </div>
  );
}
