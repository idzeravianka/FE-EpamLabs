import { createAction, props } from '@ngrx/store';
import { Movie, MovieError } from 'src/app/models/movie.model';

const searchFilm = createAction(
    '[Search Component] Search Film By Name'
);

const searchFilmSuccess = createAction(
    '[Search Component] Search Film By Name Success',
    props<Movie>()
);

const searchFilmError = createAction(
    '[Search Component] Search Film By Name Error',
    props<MovieError>()
)

export const filmActions = {
    searchFilm,
    searchFilmSuccess,
    searchFilmError
}