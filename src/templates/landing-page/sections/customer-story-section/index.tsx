import Image from 'next/image'

const customerStories = [
  {
    content:
      'Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.',
    author: {
      name: 'Annette Bones',
      role: 'CEO na Anne Corp',
      avatar: '/customer-01.png',
    },
  },
  {
    content:
      'Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!',
    author: {
      name: 'Jacob Jones',
      role: 'CEO na JJ Org',
      avatar: '/customer-02.png',
    },
  },
]

export function CustomerStorySection() {
  return (
    <section className="container py-20 md:py-40">
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-heading-xl text-gray-100 font-sans">
          Quem utiliza, aprova
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {customerStories.map((customerStory) => (
            <div
              key={customerStory.author.name}
              className="flex flex-col gap-6 rounded-lg bg-gray-500 border border-gray-400 p-6 md:p-10"
            >
              <p className="text-balance text-gray-200">
                {customerStory.content}
              </p>

              <div className="flex items-center gap-3">
                <div className="relative size-10 overflow-hidden rounded-full">
                  <Image
                    src={customerStory.author.avatar}
                    alt={customerStory.author.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <strong className="text-gray-200 text-sm">
                    {customerStory.author.name}
                  </strong>
                  <strong className="text-xs text-gray-300">
                    {customerStory.author.role}
                  </strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
