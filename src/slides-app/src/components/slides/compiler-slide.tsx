"use client"

import { Card } from "@/components/ui/card"

export function CompilerSlide() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-balance">When React Compiler Fails</h2>
        <p className="text-lg text-muted-foreground">
          The React Compiler can't optimize everything - here's what to watch for
        </p>
      </div>

      <div className="space-y-6">
        {/* Example 1 */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4 text-destructive">Problem: Object/Array Creation in Render</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">❌ Creates new object every render</p>
              <pre className="text-sm bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`function UserList() {
  const users = getUsers()
  
  return (
    <List 
      items={users}
      config={{ sortBy: 'name' }}
    />
  )
}`}</code>
              </pre>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">✓ Stable reference</p>
              <pre className="text-sm bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`const CONFIG = { sortBy: 'name' }

function UserList() {
  const users = getUsers()
  
  return (
    <List 
      items={users}
      config={CONFIG}
    />
  )
}`}</code>
              </pre>
            </div>
          </div>
        </Card>

        {/* Example 2 */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4 text-destructive">Problem: Inline Functions with Dependencies</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">❌ New function every render</p>
              <pre className="text-sm bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`function TodoList({ filter }) {
  const todos = getTodos()
  
  return (
    <List 
      items={todos}
      onFilter={(item) => 
        item.status === filter
      }
    />
  )
}`}</code>
              </pre>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">✓ Memoized callback</p>
              <pre className="text-sm bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`function TodoList({ filter }) {
  const todos = getTodos()
  
  const handleFilter = useCallback(
    (item) => item.status === filter,
    [filter]
  )
  
  return (
    <List items={todos} onFilter={handleFilter} />
  )
}`}</code>
              </pre>
            </div>
          </div>
        </Card>
      </div>

      <div className="bg-accent/50 p-6 rounded-lg border border-border">
        <h3 className="font-semibold mb-2">Key Takeaway</h3>
        <p className="text-sm text-muted-foreground">
          The React Compiler optimizes component re-renders, but it can't prevent new object/function references from
          causing child re-renders. Use useMemo and useCallback for props passed to optimized children.
        </p>
      </div>
    </div>
  )
}
