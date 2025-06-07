type PostListProps = {
  children: React.ReactNode
}

export function PostList({ children }: PostListProps) {
  return (
    <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  )
}
