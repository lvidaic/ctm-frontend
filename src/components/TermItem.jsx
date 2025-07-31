import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon, TrashIcon, PencilIcon } from '@heroicons/react/20/solid'

export default function TermItem({ term, onRemoveTerm }) {
    return (
        <li key={term.id} className="flex items-center justify-between gap-x-6 py-5 hover:cursor-pointer">
            <div className="min-w-0">
                <div className="flex items-start gap-x-3">
                    <p className="text-sm/6 font-semibold text-gray-900">{term.description}</p>
                    <p
                        className="mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20"
                    >
                        {'€ ' + term.compensation}
                    </p>
                </div>
                <div className="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500">
                    <p className="whitespace-nowrap">
                        Starts At: <time dateTime={term.startsAt}>{term.startsAt}</time>
                    </p>
                    <svg viewBox="0 0 2 2" className="size-0.5 fill-current">
                        <circle r={1} cx={1} cy={1} />
                    </svg>
                    <p className="truncate">Ends At: {term.endsAt}</p>
                </div>
                <div>
                    <p className="truncate font-medium text-xs/5 text-gray-500">Required Personnel: {term.requiredPersonnel}</p>
                </div>
            </div>
            <div className="flex flex-none items-center gap-x-4 text-sm/6 text-gray-500">
                <a
                    href={term.href}
                    className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
                >
                    Edit <span className="sr-only">, {term.name}</span>
                </a>
                <Menu as="div" className="relative flex-none">
                    <MenuButton className="relative block text-gray-500 hover:text-gray-900">
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Open options</span>
                        <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
                    </MenuButton>
                    <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                        <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                                <PencilIcon className="size-4 text-gray-500" />
                                Edit
                                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">⌘E</kbd>
                            </button>
                        </MenuItem>
                        <MenuItem>
                            <button onClick={() => onRemoveTerm(term)} className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                                <TrashIcon className="size-4 text-gray-500" />
                                Delete
                                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">⌘D</kbd>
                            </button>
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </div>
        </li >
    )
}
