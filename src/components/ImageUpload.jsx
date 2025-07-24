import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from 'react';

export default function ImageUpload({ labelText, image }) {


    const [img, setImg] = useState(image)


    function handleImageChange(event) {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                setImg(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className="">
            <label htmlFor="photo" className="block text-sm/6 font-medium text-gray-900">
                {labelText}
            </label>
            <div className="mt-2 flex items-center gap-x-3">
                {!img ?
                    <UserCircleIcon aria-hidden="true" className="size-20 text-gray-300" />
                    :
                    <img alt="" src={img} className="object-cover size-16 rounded-full" />
                }

                <input type="file" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" onChange={handleImageChange} />
            </div>
        </div>

    )
}
