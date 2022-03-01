export interface IMovieData {
    items: IMovieDataDetail[];
}

export class MovieData implements IMovieData {
    items: IMovieDataDetail[] = [];
}

export interface IMovieDataDetail {
    id: string;
    title: string;
    year: string;
    image: string;
    runtimeStr: string;
    genres: string;
}

export class MovieDataDetail implements IMovieDataDetail {
    id: string = '';
    title: string = '';
    year: string = '';
    image: string = '';
    runtimeStr: string = '';
    genres: string = '';
}