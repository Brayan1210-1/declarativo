interface InputProps {
    type: string;
    label: string;
    placeHolder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ type, label, placeHolder, value, onChange }: InputProps) {
    return (
        <div className="flex flex-col gap-2 mb-4 w-full bg-gra">

            <label className="text-sm font-semibold text-gray-700 ml-1"> {label}</label>

            <input
                id={label}
                type={type}
                placeholder={placeHolder}
                value={value}
                onChange={onChange}
                className="w-full
                    px-4 
                    py-2 
                    bg-white 
                    border 
                    border-gray-300 
                    rounded-lg 
                    text-gray-900
                    placeholder:text-gray-400
                    outline-none
                    transition-all
                    duration-200
                    /* Estado Focus: Cuando el usuario hace clic */
                    focus:border-blue-500 
                    focus:ring-2 
                    focus:ring-blue-200
                    /* Estado Hover */
                    hover:border-gray-400 "
            />
        </div >

    )
}