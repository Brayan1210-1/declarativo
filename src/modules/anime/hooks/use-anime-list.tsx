// modules/anime/hooks/use-anime-list.ts
import { useQuery } from '@tanstack/react-query';
import { animeService } from '../services/anime.service';
import type { AnimeQueryParams } from '../types';

export const useAnimeList = (filters: AnimeQueryParams) => {
    return useQuery({
        // La clave de la query debe cambiar cuando cambian los filtros para refrescar
        queryKey: ['animes', filters],
        queryFn: () => animeService.getAnimes(filters),

    });
};