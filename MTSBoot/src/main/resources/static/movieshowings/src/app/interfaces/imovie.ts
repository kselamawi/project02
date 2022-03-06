export interface IMovie {
    items: IMovieDetail[];
}

export class IMovie implements IMovie {
    items: IMovieDetail[] = [];
}

export interface IMovieDetail{
    id?:number,
    title?:string,
    releaseState?:string,
    image?:string,
    plot?:string,
    genres?:string
}

export class IMovieDetail implements IMovieDetail {
    id?: number | undefined;
    title?: string;
    releaseState?: string | undefined;
    image?: string | undefined;
    plot?: string | undefined;
    genres?: string | undefined;
}
