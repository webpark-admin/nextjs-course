const MoviePage = ({ movie }) => {
	if (!movie) return <p>Loading...</p>;

	return (
		<div className="movie">
			<h1>{movie.name}</h1>

			<p>Some other movie details</p>
		</div>
	);
};

export const getServerSideProps = async ({ params }) => {
	const { id } = params;

	const res = await fetch(
		"https://62a81480943591102b9996fd.mockapi.io/movies"
	);
	const data = await res.json();

	const movie = data.find((movie) => movie.id == id);

	return {
		props: {
			movie,
		},
		notFound: !movie ? true : false,
	};
};

export default MoviePage;
