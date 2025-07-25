
export default function TextArea({ labelText, onChange, value }) {
    return (
        <div>
            <label htmlFor="comment" className="block text-sm/6 font-edium text-gray-900">{labelText}</label>
            <div className="mt-2">
                <textarea
                    id="comment"
                    value={value}
                    name="comment"
                    onChange={onChange}
                    rows={4}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
        </div>

    )
}
