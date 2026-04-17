import { apiClient } from "../../../core/api/api-client";
import type { AnimeResponse, AnimeQueryParams } from "../types";
import type { AnimeDetailResponse } from "../schemas/animeTypeDetail";

export const animeService = {
    getAnimes: async (params: AnimeQueryParams): Promise<AnimeResponse> => {
        // Axios se encarga de convertir el objeto params en ?q=naruto&page=1...
        const { data } = await apiClient.get<AnimeResponse>('/anime', { params });
        return data;
    },

    getAnimeById: async (id: string): Promise<AnimeDetailResponse> => {

        const { data } = await apiClient.get<AnimeDetailResponse>(`/anime/${id}`);
        return data;
    }


};