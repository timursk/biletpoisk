/* MOVIES */

export interface Movie {
    title: string;
    posterUrl: string;
    releaseYear: number;
    description: string;
    genre: string;
    id: string;
    rating: number;
    director: string;
    reviewIds: string[];
}

/* CINEMAS */

export interface Cinema {
    id: string;
    name: string;
    movieIds: string[];
}

/* REVIEWS */

export interface Review {
    id: string;
    name: string;
    text: string;
    rating: number;
}

export interface CurrentMovie {
    movie: Movie;
    reviews: Review[];
}
