interface ContainerProps {
    style?: string;
    children: React.ReactNode
}

export function Container({ children }: ContainerProps
) {
    return (
        <div className="bg-blue-300
         p-9 m-3 
         rounded-md 
         max-h-full 
         max-w-full 
         justify-self-center
         justify-items-center 
          place-self-center
                    " >
            {children}
        </div>
    );
}