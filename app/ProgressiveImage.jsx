const { default: Image } = require("next/image");

const ProgressiveImage = ({ fallback = fallbackImage, alt, src, ...props }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <Image
      alt={alt}
      onError={setError}
      src={error ? fallbackImage : src}
      {...props}
    />
  );
};

export default ProgressiveImage;
