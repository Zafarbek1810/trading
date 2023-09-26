import ForumSingle from '../../src/Components/Pages/Forum/ForumSingle'
import {useRouter} from 'next/router'

export default function Home() {
    const router = useRouter();
    const {id} = router.query;

    return (

        <ForumSingle id={id}/>

    )
}
