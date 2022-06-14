import fs from "fs/promises";
import path from "path";

export const getAllMovies = async () => {
	const filePath = path.join(process.cwd(), "data.json");

	const data = JSON.parse(await fs.readFile(filePath));

	const { movies } = data;

	return movies;
};

export const getMovieById = async (movieId) => {
	const movies = await getAllMovies();

	const movie = movies.find((movie) => movie.id == movieId);

	return movie;
};

export const generateStaticPaths = async () => {
	const movies = await getAllMovies();

	const ids = movies.map((movie) => movie.id.toString());

	const paths = ids.map((id) => ({ params: { movieId: id } }));

	return paths;
};
