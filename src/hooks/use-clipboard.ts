import { useCallback, useEffect, useState } from 'react'

type UseClipboardProps = {
  timeout?: number
}

export function useClipboard({ timeout = 2000 }: UseClipboardProps) {
  const [isCopied, setIsCopied] = useState(false)

  const copy = useCallback(async (text: string) => {
    if (!navigator?.clipboard) {
      console.error('Clipboard não suportado.')
      return false
    }

    await navigator.clipboard.writeText(text)

    setIsCopied(true)
  }, [])

  useEffect(() => {
    if (!isCopied) return

    const timer = setTimeout(() => {
      setIsCopied(false)
    }, timeout)

    return () => clearTimeout(timer)
  }, [isCopied, timeout])

  return {
    isCopied,
    copy,
  }
}
