
export default function Button({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            type="button"
            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
            {children}
        </button>
    )
}

