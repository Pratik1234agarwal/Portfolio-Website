import { useRouter } from 'next/router';
import { getMovieById } from '../../actions';

const Movies = ({ movie }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className='container'>
      <div className='jumbotron'>
        <h1 className='display-4'>{movie.name}</h1>
        <p className='lead'>{movie.genre}</p>
        <hr className='my-4' />
        <p>{movie.description}</p>
        <a className='btn btn-primary btn-lg' href='#' role='button'>
          Learn more
        </a>
      </div>
    </div>
  );
};

// Call getMovie By Id
Movies.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.id);
  return { movie };
};

export default Movies;
