import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer'

function ItemDetailPage() {
  const { id } = useParams()

  return <ItemDetailContainer productId={Number(id)} />
}

export default ItemDetailPage