import { Facebook, Linkedin, Slack, Twitter } from 'lucide-react'
import { useCallback, useMemo } from 'react'

type ShareConfig = {
  url: string
  title?: string
  text?: string
}

type UseShareProps = ShareConfig & {
  clipboardTimeout?: number
}

type SocialProvider = 'linkedin' | 'facebook' | 'slack' | 'twitter'

const SOCIAL_PROVIDERS = {
  linkedin: {
    name: 'LinkedIn',
    icon: Linkedin,
    shareUrl: (config: any) =>
      `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(config.url)}`,
  },
  facebook: {
    name: 'Facebook',
    icon: Facebook,
    shareUrl: (config: any) =>
      `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(config.url)}`,
  },
  slack: {
    name: 'Slack',
    icon: Slack,
    shareUrl: (config: any) => `#`,
  },
  twitter: {
    name: 'Twitter',
    icon: Twitter,
    shareUrl: (config: any) => '#',
  },
}

export function useShare({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: UseShareProps) {
  const shareConfig = useMemo(() => {
    return {
      url,
      ...(title && { title }),
      ...(text && { text }),
    }
  }, [text, title, url])

  const share = useCallback(
    (provider: SocialProvider) => {
      try {
        const providerConfig = SOCIAL_PROVIDERS[provider]

        if (!providerConfig) {
          throw new Error(`Provider não suportado: ${provider}`)
        }

        const shareUrl = providerConfig.shareUrl(shareConfig)
        const shareWindow = window.open(
          shareUrl,
          '_blank',
          'width=600,height=600,location=yes,status=yes'
        )

        return !!shareWindow
      } catch (error) {
        console.error(error)
        return false
      }
    },
    [shareConfig]
  )

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => {
        return {
          provider: key,
          name: provider.name,
          icon: provider.icon,
          action: () => share(key as SocialProvider),
        }
      }),
    ],
    [share]
  )

  return {
    shareButtons,
  }
}
