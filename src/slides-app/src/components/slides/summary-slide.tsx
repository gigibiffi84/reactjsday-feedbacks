import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

export function SummarySlide() {
  const tips = [
    {
      title: 'Keep in mind different state scopes and Component Types',
      description:
        'Presentation Components, Smart Components, and Container Components are all different types of components. Keep them in different files and folders.',
    },
    {
      title:
        'Find your quality gates in every layer of your development process ',
      description:
        'Testing pipelines are expensive so use more unit tests that are fast and when automate test execution report and collect failures to gain useful insights.',
    },
    {
      title: 'Watch Object References',
      description:
        "React Compiler can't prevent new object/array references from causing re-renders. Use useMemo/useCallback when needed." +
        'Use opt in/opt out policies to honor incremental adoption',
    },
    {
      title: 'Use Transitions for Heavy Updates (not only in forms...)',
      description:
        'Wrap expensive state updates in startTransition to keep your UI responsive and prevent form freezing.',
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-balance">Summary</h2>
        <p className="text-lg text-muted-foreground">
          Key takeaways after the conference
        </p>
      </div>

      <div className="grid gap-4">
        {tips.map((tip, index) => (
          <Card key={index} className="p-6">
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {tip.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-primary/10 p-8 rounded-lg border border-primary/20 text-center">
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground">
          Keep learning and building better React applications
        </p>
      </div>
    </div>
  )
}
