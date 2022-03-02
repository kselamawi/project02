export interface IMovie {
    items: IMovieDetail[];
}

export class IMovie implements IMovie {
    items: IMovieDetail[] = [];
}

export interface IMovieDetail{
    id?:number,
    title?:String,
    releaseState?:String,
    image?:String,
    plot?:String,
    genres?:String
}

export class IMovieDetail implements IMovieDetail {
    id?: number | undefined;
    title?: String;
    releaseState?: String | undefined;
    image?: String | undefined;
    plot?: String | undefined;
    genres?: String | undefined;
}
