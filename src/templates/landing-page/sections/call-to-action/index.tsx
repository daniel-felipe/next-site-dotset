import { ArrowRight, Store } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function CallToAction() {
  return (
    <section className="relative bg-[url('/call-to-action-background.svg')] bg-cover bg-top mt-12">
      <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 bg-cyan-300 w-fit rounded-full">
        <Store className="text-cyan-100" />
      </div>

      <div className="container py-20 flex flex-col items-center justify-center gap-10 text-center">
        <h2 className="text-gray-100 text-balance text-heading-xl max-w-lg font-sans">
          Crie uma loja online e inicie seus vendas ainda hoje
        </h2>

        <Button variant="primary" asChild>
          <Link href="/criar-loja">
            Criar loja grátis
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  )
}
