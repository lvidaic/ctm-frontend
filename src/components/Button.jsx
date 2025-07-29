
export default function Button({ children, onClick, className }) {
    const baseClass = "rounded-md width-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50";
    return (
        <button
            onClick={onClick}
            type="button"
            className={baseClass + " " + className}
        >
            {children}
        </button>
    )
}

