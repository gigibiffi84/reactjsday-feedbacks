export function IntroSlide() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-5xl font-bold text-balance">React Best Practices</h2>
        <p className="text-xl text-muted-foreground text-balance">
          Learn how to write better React code and avoid common mistakes
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 mt-12">
        <div className="p-6 rounded-lg border border-border bg-card">
          <h3 className="font-semibold mb-2">State Management</h3>
          <p className="text-sm text-muted-foreground">Avoid prop drilling and manage local state effectively</p>
        </div>
        <div className="p-6 rounded-lg border border-border bg-card">
          <h3 className="font-semibold mb-2">React Compiler</h3>
          <p className="text-sm text-muted-foreground">Understand when automatic memoization fails</p>
        </div>
        <div className="p-6 rounded-lg border border-border bg-card">
          <h3 className="font-semibold mb-2">Form Performance</h3>
          <p className="text-sm text-muted-foreground">Use useTransition to prevent UI freezing</p>
        </div>
      </div>
    </div>
  )
}
