import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function ImageUpload({ labelText }) {
    return (
        <div className="">
            <label htmlFor="photo" className="block text-sm/6 font-medium text-gray-900">
                {labelText}
            </label>
            <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon aria-hidden="true" className="size-12 text-gray-300" />
                <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                    Upload
                </button>
            </div>
        </div>

    )
}
