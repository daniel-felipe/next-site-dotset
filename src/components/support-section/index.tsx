import { HeartHandshake, PaintbrushVertical, Store } from 'lucide-react'
import { PT_Sans_Caption } from 'next/font/google'

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: '700',
})

export function SupportSection() {
  return (
    <section className="bg-[url(/support-background.svg)] bg-cover bg-no-repeat md:py-32">
      <div className="container flex flex-col items-center gap-12">
        <h2
          className={`${ptSansCaption.className} max-w-lg text-balance text-center text-heading-xl text-gray-100`}
        >
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col text-left gap-4 rounded-lg p-6 bg-blue-400">
            <div className="flex size-12 items-center justify-center rounded-lg bg-blue-300">
              <PaintbrushVertical className="size-6 text-white" />
            </div>
            <strong className="heading-sm text-gray-100">
              Personalize seu site
            </strong>
            <p className="text-body-sm text-gray-200">
              Adicione seu logo, favicon, cores no seu catálogo e tenha tudo com
              sua cara.
            </p>
          </div>

          <div className="flex flex-col text-left gap-4 rounded-lg p-6 bg-cyan-300">
            <div className="flex size-12 items-center justify-center rounded-lg bg-cyan-200">
              <Store className="size-6 text-white" />
            </div>
            <strong className="heading-sm text-gray-100">
              Venda de qualquer loja
            </strong>
            <p className="text-body-sm text-gray-200">
              Não importa a loja, o Site.Set permite que você insira qualquer
              link de afiliado.
            </p>
          </div>

          <div className="flex flex-col text-left gap-4 rounded-lg p-6 bg-blue-400">
            <div className="flex size-12 items-center justify-center rounded-lg bg-blue-300">
              <HeartHandshake className="size-6 text-white" />
            </div>
            <strong className="heading-sm text-gray-100">
              Receba suporte amigável
            </strong>
            <p className="text-body-sm text-gray-200">
              Nossa equipe estará sempre pronta para te atender para ajudar no
              que for preciso.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
