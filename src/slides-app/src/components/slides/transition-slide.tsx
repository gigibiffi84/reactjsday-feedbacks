"use client"

import { useState, useTransition } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"

export function TransitionSlide() {
  const [query, setQuery] = useState("")
  const [isPending, startTransition] = useTransition()
  const [results, setResults] = useState<string[]>([])

  // Simulate expensive filtering operation
  const handleSearch = (value: string) => {
    setQuery(value)

    startTransition(() => {
      // Simulate expensive computation
      const filtered = Array.from({ length: 1000 }, (_, i) => `Result ${i + 1}: ${value}`).filter((item) =>
        item.toLowerCase().includes(value.toLowerCase()),
      )
      setResults(filtered.slice(0, 50))
    })
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-balance">Prevent Form Freeze with useTransition</h2>
        <p className="text-lg text-muted-foreground">Keep your UI responsive during expensive state updates</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Explanation */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4">The Problem</h3>
          <p className="text-sm text-muted-foreground mb-4">
            When you update state that triggers expensive computations, the UI can freeze and feel unresponsive.
          </p>

          <h3 className="font-semibold mb-4 mt-6">The Solution</h3>
          <pre className="text-sm bg-muted p-4 rounded-md overflow-x-auto">
            <code>{`const [isPending, startTransition] = 
  useTransition()

const handleChange = (value) => {
  // Update input immediately
  setQuery(value)
  
  // Defer expensive update
  startTransition(() => {
    setResults(
      expensiveFilter(value)
    )
  })
}`}</code>
          </pre>

          <div className="bg-accent/50 p-4 rounded-lg border border-border mt-4">
            <p className="text-sm">
              <strong>Key benefit:</strong> The input stays responsive while the expensive filtering happens in the
              background.
            </p>
          </div>
        </Card>

        {/* Live Demo */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Live Demo</h3>
          <div className="space-y-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Type to search..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="pr-10"
              />
              {isPending && (
                <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-muted-foreground" />
              )}
            </div>

            <div className="text-sm text-muted-foreground">
              {isPending ? (
                <span className="text-primary">Filtering results...</span>
              ) : (
                <span>Found {results.length} results</span>
              )}
            </div>

            <div className="max-h-64 overflow-y-auto space-y-2">
              {results.slice(0, 10).map((result, index) => (
                <div key={index} className="p-3 bg-muted rounded-md text-sm">
                  {result}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <div className="bg-accent/50 p-6 rounded-lg border border-border">
        <h3 className="font-semibold mb-2">Key Takeaway</h3>
        <p className="text-sm text-muted-foreground">
          Use useTransition and startTransition to mark state updates as non-urgent. This keeps your forms and inputs
          responsive even during expensive operations like filtering large lists or complex calculations.
        </p>
      </div>
    </div>
  )
}
