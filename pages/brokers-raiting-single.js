
import Single from '../src/Components/Pages/Brokers-raiting/Single'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  const { id } = router.query;

  return (


      <Single id={id} />



  )
}
