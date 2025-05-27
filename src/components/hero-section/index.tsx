import { ArrowRight, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

export function HeroSection() {
  return (
    <section className="container relative flex items-center justify-center mt-16">
      <div className="grid grid-cols-1 gap-8 items-center min-h-[20rem] md:grid-cols-2 md:h-[36rem]">
        <div className="flex flex-col items-center justify-center gap-4 md:items-start">
          <h1 className="text-gray-100 text-heading-hg">
            Venda seus produtos com afiliado em um único lugar
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 md:items-start">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="text-cyan-100 size-4" />
                <span className="text-gray-200">
                  Crie seu site em menos de 5 minutos
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="text-cyan-100 size-4" />
                <span className="text-gray-200">
                  Acompanhe e otimize seu negócio online
                </span>
              </div>
            </div>

            <div className="text-white flex flex-col gap-2 mt-5 items-center md:items-start">
              <Button className="rounded-full w-fit" asChild>
                <Link href="/criar-loja">
                  Criar loja grátis
                  <ArrowRight />
                </Link>
              </Button>

              <p className="text-gray-300 text-body-xs">
                Não precisa de cartão de crédito
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-[20rem] hidden order-first items-center justify-center md:flex md:h-full md:order-last">
          <Image
            src="/hero-section.svg"
            alt="Ilustração com ícones de store, tag e sacola"
            width={200}
            height={400}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
