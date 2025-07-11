'use client'

import { Button } from '@/components/ui/button'
import { type ShareConfig, useShare } from '@/hooks/use-share'

type PostShareProps = Pick<ShareConfig, 'url' | 'title'> & {
  description: string
}

export function PostShare({ url, title, description }: PostShareProps) {
  const { shareButtons } = useShare({ url, title, text: description })

  return (
    <aside className="space-y-6">
      <div className="rounded-lg bg-gray-700">
        <h2 className="hidden md:block mb-4 text-heading-xs text-gray-100">
          Compartilhar
        </h2>

        <div className="flex justify-start gap-2 md:flex-col">
          {shareButtons.map(({ provider, name, action, icon: Icon }) => (
            <Button
              key={provider}
              variant="outline"
              className="w-fit md:w-full justify-start gap-2"
              onClick={() => action()}
            >
              <Icon className="size-4" />
              <span className="hidden md:block">{name}</span>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  )
}
