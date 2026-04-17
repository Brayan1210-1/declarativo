import { useParams, useNavigate } from 'react-router';
import { useAnimeDetail } from '../hooks/use-anime-details';

export function AnimeDetailPage() {

    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { data, isLoading, error } = useAnimeDetail(id);

    if (isLoading) return <p className="text-center p-10">Cargando detalles...</p>;
    if (error) return <p className="text-center text-red-500">Hubo un error al cargar.</p>;

    const anime = data?.data;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <button
                onClick={() => navigate(-1)} // Volver atrás
                className="mb-4 text-blue-600 hover:underline"
            >
                Volver
            </button>

            <div className="flex flex-col md:flex-row gap-8">
                <img
                    src={anime?.images.jpg.large_image_url}
                    alt={anime?.title}
                    className="w-full md:w-80 rounded-lg shadow-md"
                />
                <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-2">{anime?.title}</h1>
                    <p className="text-gray-500 mb-4 italic">{anime?.title_english}</p>
                    <div className="flex gap-2 mb-4">
                        <span className="bg-yellow-400 px-2 py-1 rounded font-bold">
                            ⭐ {anime?.score}
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {anime?.type}
                        </span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Sinopsis</h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                        {anime?.synopsis || "No hay sinopsis disponible."}
                    </p>
                </div>
            </div>
        </div>
    );
}