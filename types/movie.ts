export interface Genre { id: number; name: string }

export interface Movie {
  id: number;
  title: string;
  name?: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  genre_ids?: number[];
  media_type?: 'movie' | 'tv';
  adult?: boolean;
  runtime?: number;
  certification?: string;
}

export interface TMDBListResponse { page: number; results: Movie[]; total_pages: number; total_results: number }
export interface TMDBVideo { id: string; key: string; name: string; site: string; type: string; official: boolean }
export interface TMDBVideosResponse { id: number; results: TMDBVideo[] }
