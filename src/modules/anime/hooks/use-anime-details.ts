import { useQuery } from "@tanstack/react-query"
import { animeService } from "../services/anime.service"

export const useAnimeDetail = (id: string | undefined) => {
    return useQuery({
        queryKey: ['anime', id],
        queryFn: () => animeService.getAnimeById(id!),
        enabled: !!id,
    });
}