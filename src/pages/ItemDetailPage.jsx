import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer'

function ItemDetailPage() {
  const { id } = useParams()

  return <ItemDetailContainer productId={id} />
}

export default ItemDetailPage