export default function Input({ labelText, inputType = 'text', onChange, value }) {
    return (
        <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                {labelText}
            </label>
            <div className="mt-2">
                <input
                    value={value}
                    id="email"
                    name="email"
                    type={inputType}
                    onChange={onChange}
                    placeholder="you@example.com"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
        </div>
    )
}
