import { useParams } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer'

function Category() {
  const { id } = useParams()

  return (
    <ItemListContainer
      greeting={`Empanadas de ${id}`}
      category={id}
    />
  )
}

export default Category