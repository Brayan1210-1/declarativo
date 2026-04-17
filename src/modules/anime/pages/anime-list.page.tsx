import { useState } from 'react';
import { Input } from '../../../design/atoms/Input';
import { useAnimeList } from '../hooks/use-anime-list';
import { useDebounce } from '../../../core/hooks/use-debounce';
import { AnimeCard } from '../../../design/atoms/organism/Anime-card';

export function AnimeListPage() {
    const [searchTerm, setSearchTerm] = useState('');

    // Usamos el debounce para no saturar la API en cada tecla presionada
    const debouncedSearch = useDebounce(searchTerm, 500);

    const { data, isLoading } = useAnimeList({
        q: debouncedSearch,
        sfw: true
    });

    return (
        <main className="p-8 max-w-6xl mx-auto">
            <header className="mb-10">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">Buscador Jikan</h1>


                <Input
                    label="Busca tu anime favorito"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeHolder="Ej. Cowboy Bebop"
                />
            </header>

            {isLoading && <div className="text-center py-10">Cargando animes...</div>}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {data?.data.map((anime) => (
                    <AnimeCard key={anime.mal_id} anime={anime} />
                ))}
            </div>
        </main>
    );
}