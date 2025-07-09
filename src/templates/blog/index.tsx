'use client'

import { Post } from 'contentlayer/generated'

import { Search } from '@/components/search'

import { Inbox } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { PostCard } from './components/post-card'
import { PostList } from './components/post-list'

export type BlogListProps = {
  posts: Post[]
}

export function BlogList({ posts }: BlogListProps) {
  const searchParams = useSearchParams()
  const query = searchParams?.get('q') ?? ''

  const pageTitle = query
    ? `Resultados de busca para "${query}"`
    : 'Dicas e estratégias para impulsionar seu negócio'

  const postList = query
    ? posts.filter((post) =>
        post.title.toLowerCase()?.includes(query.trim().toLowerCase())
      )
    : posts

  const hasPosts = postList.length > 0

  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="pb-14">
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300 uppercase">
              blog
            </span>

            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              {pageTitle}
            </h1>
          </div>

          <Search />
        </div>
      </header>

      {hasPosts ? (
        <PostList>
          {postList.map((post) => (
            <PostCard
              key={post._id}
              title={post.title}
              description={post.description}
              date={new Date(post.date).toLocaleDateString('pt-BR')}
              slug={post.slug}
              image={post.image}
              author={{
                name: post.author.name,
                avatar: post.author.avatar,
              }}
            />
          ))}
        </PostList>
      ) : (
        <div className="container px-8">
          <div className="flex flex-col items-center justify-center gap-8 rounded-lg border-dashed border-2 border-gray-300 p-8 md:p-12">
            <Inbox className="size-12 text-cyan-100" />
            <p className="text-gray-100 text-center">Nenhum post encontrado</p>
          </div>
        </div>
      )}
    </div>
  )
}
