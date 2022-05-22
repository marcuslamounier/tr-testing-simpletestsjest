import { useState } from 'react'

type ListProps = {
  initialItems: string[]
}

function List({ initialItems }: ListProps) {
  const [newItem, setNewItem] = useState<string>('')
  const [list, setList] = useState<string[]>(initialItems)

  const addToList = () => {
    setTimeout(() => {
      setList(prev => [...prev, newItem])
    }, 500)
  }

  const removeFromList = (selected: string) => {
    setTimeout(() => {
      setList(prev => prev.filter(item => item !== selected))
    }, 500)
  }

  return (
    <>
      <input
        placeholder="New item"
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button onClick={addToList}>Adicionar</button>
      {newItem}
      <ul>
        {list.map(item => (
          <li key={item}>
            {item}
            <button onClick={() => removeFromList(item)}>Remover</button>
            </li>
        ))}
      </ul>
    </>
  )
}

export default List
