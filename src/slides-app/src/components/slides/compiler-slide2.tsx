// 🚫 THIS CODE VIOLATES THE RULES OF REACT AND WILL FAIL COMPILATION

type Item = {
  name: string
  isLarge?: boolean
}
function ItemList({
  items,
  newItem,
  onAddItem,
}: {
  items: Item[]
  newItem: Item
  onAddItem: (newItem: Item) => void
}) {
  'use memo'
  // 🚩 Violation: Mutating an object (items) that came from props
  // The compiler sees this mutation and bails out on the whole function.

  items = [...items, newItem]

  const isLarge = items.length > 5

  if (!isLarge) {
    items[0].isLarge = false // <-- DIRECT MUTATION of an object in the array prop
  }

  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <button onClick={() => onAddItem({ name: 'new item' })}>Click me</button>
    </>
  )
}

// 🚫 Example 2: Side effects during render
function BadCounter({ initialCount }: { initialCount: number }) {
  'use memo'
  let count = initialCount

  // 🚩 Violation: Mutating local variable during render
  count = count + 1

  // 🚩 Violation: Side effect during render (DOM manipulation)
  // eslint-disable-next-line react-compiler/react-compiler
  document.title = `Count: ${count}`

  return <div>Count: {count}</div>
}

// 🚫 Example 3: Conditional hook usage
function BadConditionalHook({ showExtra }: { showExtra: boolean }) {
  'use memo'
  const [count] = useState(0)

  // 🚩 Violation: Hooks called conditionally
  if (showExtra) {
    // eslint-disable-next-line react-compiler/react-compiler
    const [extra] = useState('')
    return (
      <div>
        {count} - {extra}
      </div>
    )
  }

  return <div>{count}</div>
}

// 🚫 Example 4: Mutating ref content inappropriately
function BadRefUsage() {
  'use memo'
  const data = { value: 0 }

  // 🚩 Violation: Mutating object during render
  // eslint-disable-next-line react-hooks/purity
  data.value = Math.random()

  return <div>{data.value}</div>
}

const fetchUser = new Promise((resolve) =>
  setTimeout(() => resolve({ name: 'Luigi' }), 5000)
)

// 🚫 Example 5: Missing dependencies in useEffect
function BadEffectDeps({ userId }: { userId: number }) {
  'use memo'
  const [userData, setUserData] = useState<string>('')
  const [count, setCount] = useState(0)

  // 🚩 Violation: useEffect is missing dependencies 'userId' and 'count'
  // The effect uses these values but doesn't declare them in the dependency array
  useEffect(() => {
    const fetchData = async () => {
      // Using userId but not in deps
      const data = await fetchUser
      const result = await data
      // Using count but not in deps
      setUserData(
        `${JSON.stringify(result)} - UserId: ${userId} - Count: ${count} `
      )
    }
    fetchData()
  }, []) // 🚩 Empty deps array - should include [userId, count]

  return (
    <div>
      <p>{userData}</p>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { SlideLayout } from '../SlideLayout'

export function CompilerSlide2() {
  'use memo'
  const itemList = [{ name: 'item1' }]

  const [itemListState, setItemListState] = useState(itemList)

  return (
    <SlideLayout
      title={'Example'}
      description={'Example of failing components'}
    >
      <div className="space-y-6">
        <div className="border p-4 rounded">
          <h3 className="font-bold mb-2">1. Mutating Props</h3>
          <ItemList
            onAddItem={(i) => setItemListState([...itemListState, i])}
            items={itemListState}
            newItem={{ name: 'item2' }}
          />
        </div>

        <div className="border p-4 rounded">
          <h3 className="font-bold mb-2">2. Side Effects During Render</h3>
          <BadCounter initialCount={5} />
        </div>

        <div className="border p-4 rounded">
          <h3 className="font-bold mb-2">3. Conditional Hooks</h3>
          <BadConditionalHook showExtra={true} />
        </div>

        <div className="border p-4 rounded">
          <h3 className="font-bold mb-2">4. Mutating Objects During Render</h3>
          <BadRefUsage />
        </div>

        <div className="border p-4 rounded">
          <h3 className="font-bold mb-2">5. Missing useEffect Dependencies</h3>
          <BadEffectDeps userId={123} />
        </div>
      </div>
    </SlideLayout>
  )
}
