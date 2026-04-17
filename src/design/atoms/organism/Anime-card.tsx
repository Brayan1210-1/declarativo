// src/modules/anime/components/anime-card.tsx
import { Link } from 'react-router';
import type { Anime } from '../../../modules/anime/types';

interface Props {
    anime: Anime;
}

export const AnimeCard = ({ anime }: Props) => {
    return (
        // Redirigimos a la ruta relativa ":id" o absoluta "/anime/:id"
        <Link
            to={`/anime/${anime.mal_id}`}
            className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all overflow-hidden border border-gray-100"
        >
            <div className="relative aspect-3/4 overflow-hidden">
                <img
                    src={anime.images.jpg.large_image_url}
                    alt={anime.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                    ⭐ {anime.score || 'N/A'}
                </div>
            </div>

            <div className="p-3">
                <h3 className="font-bold text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {anime.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{anime.type} • {anime.episodes} eps</p>
            </div>
        </Link>
    );
};