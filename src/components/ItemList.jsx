import Item from './Item'

function ItemList({ items, onAgregar }) {
  return (
    <div className="productos-grid">
      {items.map((producto) => (
        <Item
          key={producto.id}
          producto={producto}
          onAgregar={onAgregar}
        />
      ))}
    </div>
  )
}

export default ItemList