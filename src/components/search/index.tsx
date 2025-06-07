import { cn } from '@/lib/utils'
import { CircleX, SearchIcon } from 'lucide-react'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

export function Search() {
  const router = useRouter()
  const query = (router.query.q as string) ?? ''

  const handleSearch = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault()

      if (query.trim()) {
        router.push(`/blog?q=${encodeURIComponent(query)}`)
      }
    },
    [query, router]
  )

  function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newQuery = event.target.value

    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, undefined, {
      shallow: true,
      scroll: false,
    })
  }

  function handleResetSearch() {
    router.push('/blog', undefined, {
      shallow: true,
      scroll: false,
    })
  }

  return (
    <form onSubmit={handleSearch} className="relative group w-full md:max-w-60">
      <SearchIcon
        className={cn(
          'text-gray-300 absolute left-3 top-1/2 -translate-y-1/2 size-4 transition-colors duration-200 group-focus-within:text-blue-300',
          query ? 'text-blue-300' : ''
        )}
      />

      <input
        type="text"
        placeholder="Buscar"
        value={query}
        className="w-full h-10 bg-transparent border border-gray-400 pl-9 text-gray-100 rounded-md text-body-sm outline-none transition-all duration-200 focus-within:border-blue-300 focus-withing:ring-1 focus-within:ring-blue-300 placeholder:text-gray-300 placeholder:text-body-sm md:w-60"
        onChange={handleQueryChange}
      />

      {query && (
        <CircleX
          className="absolute size-4 right-3 top-1/2 -translate-y-1/2 text-gray-300"
          onClick={handleResetSearch}
        />
      )}
    </form>
  )
}
