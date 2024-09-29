import { Search as SearchIcon } from "lucide-react"
import { Input } from "./ui/input"

export const Search = () => (
    <div className="relative">
        <SearchIcon className="text-[--title-text-color] absolute inset-y-0 my-auto size-4 left-3 opacity-50 pointer-events-none" />
        <Input className="pl-10 rounded-[0.375rem]" placeholder="Search" />
        <kbd className="absolute inset-y-0 my-auto size-5 text-center rounded border bg-secondary text-xs right-2">/</kbd>
    </div>
)