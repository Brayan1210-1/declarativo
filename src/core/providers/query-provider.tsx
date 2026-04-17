import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type ReactNode, useState } from 'react';

// Definimos nuestra propia interfaz para las props del componente
interface Props {
    children: ReactNode;
}

export const QueryProvider = ({ children }: Props) => {
    // 1. Creamos la instancia del cliente
    const [queryClient] = useState(() => new QueryClient());

    return (

        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}