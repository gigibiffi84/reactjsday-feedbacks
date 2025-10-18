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
  // 🚩 Violation: Mutating an object (items) that came from props
  // The compiler sees this mutation and bails out on the whole function.
  'use memo'
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

import { useState } from 'react'
import { SlideLayout } from '../SlideLayout'

export function CompilerSlide2() {
  'use memo'
  const itemList = [{ name: 'item1' }]

  //const [itemListState, setItemListState] = useState(itemList)

  // const handleAddItem = (i: { name: string }) =>
  //   setItemListState([...itemListState, i])

  return (
    <SlideLayout
      title={'Example'}
      description={'Example of failing components'}
    >
      <ItemList
        onAddItem={(i) => itemList.push(i)}
        //onAddItem={handleAddItem}
        items={itemList}
        newItem={{ name: 'item2' }}
      ></ItemList>
    </SlideLayout>
  )
}
