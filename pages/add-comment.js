
import AddComment from '../src/Components/Pages/Forum/AddComment'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>

      <AddComment id={id}/>

    </>
  )
}
