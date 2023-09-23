
import NewsSingle from '../src/Components/Pages/News/NewsSingle'
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter()
  const { id } = router.query
  return (

      <NewsSingle id={id}/>

  )
}
