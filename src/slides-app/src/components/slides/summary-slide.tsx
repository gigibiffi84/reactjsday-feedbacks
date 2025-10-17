import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function SummarySlide() {
  const tips = [
    {
      title: "Keep State Local",
      description: "Avoid prop drilling by managing state close to where it's used. Group related fields into objects.",
    },
    {
      title: "Watch Object References",
      description:
        "React Compiler can't prevent new object/array references from causing re-renders. Use useMemo/useCallback when needed.",
    },
    {
      title: "Use Transitions for Heavy Updates",
      description:
        "Wrap expensive state updates in startTransition to keep your UI responsive and prevent form freezing.",
    },
    {
      title: "Composition Over Props",
      description: "Instead of passing many props, compose smaller components that manage their own state.",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-balance">Summary: React Best Practices</h2>
        <p className="text-lg text-muted-foreground">Key takeaways for writing better React code</p>
      </div>

      <div className="grid gap-4">
        {tips.map((tip, index) => (
          <Card key={index} className="p-6">
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">{tip.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-primary/10 p-8 rounded-lg border border-primary/20 text-center">
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground">Keep learning and building better React applications</p>
      </div>
    </div>
  )
}
