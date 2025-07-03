'use client'

import Link, { type LinkProps } from 'next/link'

import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

type ActiveLinkProps = {
  children: React.ReactNode
} & LinkProps

export function ActiveLink({ children, href, ...rest }: ActiveLinkProps) {
  const link = typeof href === 'string' ? href : href.pathname
  const pathname = usePathname()
  const isActive = pathname === link || pathname?.startsWith(`${link}/`)

  return (
    <Link
      href={href}
      className={cn(
        'text-action-sm transition-colors hover:text-blue-200',
        isActive ? 'text-blue-200' : 'text-gray-100'
      )}
      {...rest}
    >
      {children}
    </Link>
  )
}
