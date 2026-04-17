import { useEffect, useState } from 'react';

/**
 * Hook genérico para retrasar la actualización de un valor.
 * @param value El valor que cambia frecuentemente (ej. el input)
 * @param delay El tiempo de espera en milisegundos (ej. 500)
 */
export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        // 1. Iniciamos un temporizador
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // 2. Si el usuario vuelve a escribir antes de que pase el tiempo,
        // esta función de limpieza (cleanup) cancela el temporizador anterior.
        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]); // Solo se ejecuta si el valor o el tiempo cambian

    return debouncedValue;
}