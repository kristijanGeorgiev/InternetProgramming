export type Movie = {
    id: number;
    title: string;
    year: number;
    director: string;
    genre: string[];
    plot: string;
    oscars: { [key: string]: string };
    rating: number;
    cast: {
      actor: string;
      character: string;
    }[];
  };
  
  export const Movie = {
    empty: {
      id: 0,
      title: 'N/A',
      year: 0,
      director: '',
      genre: [], // Corrected to an empty array
      plot: '',
      oscars: {}, // Empty object is fine
      rating: 0,
      cast: [] // Empty array is fine
    } as Movie
  };
  