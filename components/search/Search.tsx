'use client'
import { Search, Mic } from "lucide-react";
import { useSearchParams,usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
//import { Product } from "@/db/definitions";


export function SearchBar({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
     // Replace with actual loading state
    console.log(term);
  }, 300);

  return (
    <form className="relative group flex flex-1 shrink-0" >
      <Mic className='absolute left-3 top-2.5 text-gray-400 cursor-pointer' size={20} strokeWidth={1.5} fill='none' />
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        style={{ width: "400px" }}
        className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white flex-stretch focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <button type="submit">
        <Search
          size={20}
          className='absolute right-3 top-2.5 text-gray-400 cursor-pointer'
          strokeWidth={1.5}
          fill='none'
          role="submit"
        />
      </button>
      
    </form>
  );
}