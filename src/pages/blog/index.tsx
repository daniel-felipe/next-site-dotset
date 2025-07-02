import { BlogList, type BlogListProps } from '@/templates/blog'
import { allPosts } from 'contentlayer/generated'

export default function BlogPage({ posts }: BlogListProps) {
  return <BlogList posts={posts} />
}

export async function getStaticProps() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return {
    props: {
      posts: sortedPosts,
    },
  }
}
