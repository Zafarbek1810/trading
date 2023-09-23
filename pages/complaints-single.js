
import ComplaintsSingle from '../src/Components/Pages/Complaints/Single'
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const id = router.query.id;
  return (


      <ComplaintsSingle id={id}/>

  )
}
