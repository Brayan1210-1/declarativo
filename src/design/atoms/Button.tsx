
interface ButtonProps {
    name: string;
    onClick: () => void;

}

export const Button = ({ name, onClick }: ButtonProps) => {

    return (
        <button className="bg-blue-200 hover:bg-red-500 border-2 p-2 font-bold rounded-md "
            onClick={onClick}>
            {name}
        </button>
    )
}