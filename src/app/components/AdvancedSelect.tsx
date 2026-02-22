"use client"

import { useMemo, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid"
import { SelectItem } from "@/types/select"

interface Props {
  items: SelectItem[]
}

export default function AdvancedSelect({ items }: Props) {
  const [selected, setSelected] = useState<SelectItem[]>([])
  const [query, setQuery] = useState("")

  const filteredItems = useMemo(() => {
    if (!query) return items
    return items.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    )
  }, [items, query])

  const toggleAll = () => {
    if (selected.length === filteredItems.length) setSelected([])
    else setSelected(filteredItems)
  }

  const isSelected = (item: SelectItem) =>
    selected.findIndex(i => i.id === item.id) > -1

  return (
    <div className="w-96 mx-auto mt-10 font-sans">
      <Listbox value={selected} onChange={setSelected} multiple>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <span className="block truncate">
              {selected.length === 0
                ? "Select items"
                : `${selected.length} selected`}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
            </span>
          </Listbox.Button>

          <Transition
            as="div"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-64 w-full overflow-auto rounded-md bg-white shadow-lg z-50 p-2 border border-gray-200">
              {/* Search */}
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full mb-2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />

              {/* Select All / Deselect All */}
              <button
                type="button"
                onClick={toggleAll}
                className="w-full text-left px-3 py-2 mb-2 text-sm text-indigo-600 hover:bg-indigo-50 rounded"
              >
                {selected.length === filteredItems.length
                  ? "Deselect All"
                  : "Select All"}
              </button>

              {/* Items */}
              {filteredItems.map(item => (
                <Listbox.Option
                  key={item.id}
                  value={item}
                  className={({ active }) =>
                    `cursor-pointer select-none px-3 py-2 rounded flex justify-between items-center ${
                      active ? "bg-indigo-100 text-indigo-900" : "text-gray-900"
                    }`
                  }
                >
                  <span className={isSelected(item) ? "font-medium" : "font-normal"}>
                    {item.name}
                  </span>
                  {isSelected(item) && (
                    <CheckIcon className="h-5 w-5 text-indigo-600" />
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}