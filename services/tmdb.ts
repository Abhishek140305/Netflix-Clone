import type { Movie, TMDBListResponse, TMDBVideosResponse } from '@/types';

const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE = 'https://image.tmdb.org/t/p';
const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;
export const imageUrl = (path: string | null, size: 'w500' | 'original' = 'w500') => !path ? null : path.startsWith('http') ? path : `${IMAGE_BASE}/${size}${path}`;

const mockBackdrops = [
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=85'
];
const titles = ['The Last Frontier', 'Black Harbor', 'Orbital', 'The Silent Hour', 'Red Line', 'Northbound', 'After Dark', 'Echo Valley', 'Atlas Rising', 'The Long Way Home'];
export const mockMovies: Movie[] = Array.from({ length: 20 }, (_, i) => ({
  id: 9000 + i, title: titles[i % titles.length], overview: 'A gripping story unfolds when ordinary people face an extraordinary choice that changes everything.', poster_path: null, backdrop_path: mockBackdrops[i % mockBackdrops.length], release_date: `${2020 + (i % 6)}-01-01`, vote_average: 6.8 + (i % 3), runtime: 108 + i, certification: i % 3 ? '16+' : '13+'
}));

async function request(path: string): Promise<TMDBListResponse | null> {
  if (!key) return null;
  try { const response = await fetch(`${BASE_URL}${path}${path.includes('?') ? '&' : '?'}api_key=${key}`, { next: { revalidate: 3600 } }); return response.ok ? response.json() : null; } catch { return null; }
}
export async function getCollection(path: string): Promise<Movie[]> { const data = await request(path); return data?.results?.length ? data.results : mockMovies; }
export async function getTrailer(movieId: number): Promise<string | null> {
  if (!key || movieId >= 9000) return null;
  try { const response = await fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${key}`); const data: TMDBVideosResponse = await response.json(); return data.results.find(v => v.site === 'YouTube' && v.type === 'Trailer')?.key ?? null; } catch { return null; }
}
