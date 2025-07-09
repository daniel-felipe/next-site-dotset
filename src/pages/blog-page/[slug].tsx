import {
  PostPage as Post,
  type PostPageProps,
} from '@/templates/blog/post-page'
import { allPosts } from 'contentlayer/generated'
import { GetStaticProps } from 'next'

export default function PostPage({ post }: PostPageProps) {
  return <Post post={post} />
}

export async function getStaticPaths() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const recentPosts = sortedPosts.slice(0, 5)

  const paths = recentPosts.map((post) => {
    return {
      params: { slug: post.slug },
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = (async (content) => {
  const { slug } = content.params as { slug: string }

  const post = allPosts.find((post) => post.slug === slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}) satisfies GetStaticProps
