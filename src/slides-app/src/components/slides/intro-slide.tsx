type Block = {
  title: string
  description: string
  image?: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
}

export type IntroSlideProps = {
  blocks: Block[]
}

const blocks = [
  {
    title: 'React bundlers',
    description: 'A reverse engineering of javascript bundler and how it works',
    image: '/images/state-management.png',
    imageAlt: 'State Management Diagram',
    imagePosition: 'left',
  },
  {
    title: 'React From Unit to E2E: Crafting a Bulletproof testing pipeline',
    description: 'A multi-layered testing pipeline from unit tests to E2E ',
    image: '/images/state-management.png',
    imageAlt: 'State Management Diagram',
    imagePosition: 'left',
  },
  {
    title: 'State Management',
    description: 'Avoid prop drilling and manage local state effectively',
    image: '/images/state-management.png',
    imageAlt: 'State Management Diagram',
    imagePosition: 'left',
  },
  {
    title: 'Modularization',
    description: 'Scale up to over 15+ teams ',
    image: '/images/state-management.png',
    imageAlt: 'State Management Diagram',
    imagePosition: 'left',
  },
  {
    title: 'React Compiler',
    description: 'Understand when automatic memoization fails',
    image: '/images/compiler.png',
    imageAlt: 'React Compiler Diagram',
    imagePosition: 'right',
  },
  {
    title: 'Form Performance',
    description: 'Use useTransition to prevent UI freezing',
    image: '/images/form-performance.png',
    imageAlt: 'Form Performance Diagram',
  },
]

export function IntroSlide() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-5xl font-bold text-balance">
          React Best Practices
        </h2>
        <p className="text-xl text-muted-foreground text-balance">
          Learn how to write better React code and avoid common mistakes
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 mt-12">
        {blocks.map((block) => (
          <div
            key={block.title}
            className="p-6 rounded-lg border border-border bg-card"
          >
            <h3 className="font-semibold mb-2">{block.title}</h3>
            <p className="text-sm text-muted-foreground">{block.description}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-3 mt-12">
        Speakers: Edoardo Dusi (bundlers), Luca Del Puppo (compiler), Leonardo
        Montini (tanstack-router), Javonne Cameron (state management), Ludovico
        Besana (testing), Yakitta (Form Performance)
      </div>
      <div className="grid gap-4 md:grid-cols-3 mt-12">
        Master of Ceromonies: Giuseppe Funiciello
      </div>
    </div>
  )
}
