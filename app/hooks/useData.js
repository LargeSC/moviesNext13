export default async function useData(url) {
  let data, error, loading;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/${url}?api_key=${process.env.API_KEY}`
    );
    data = await response.json();
  } catch (error) {
    error = error;
  } finally {
    loading = false;
  }

  return { data, error, loading };
}
