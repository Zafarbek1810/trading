import BrokersSingle from '../../src/Components/Pages/Brokers/BrokersSingle'
import {useRouter} from 'next/router'

export default function Home() {
    const router = useRouter();
    const {id} = router.query;

    return (

        <BrokersSingle id={id}/>

    )
}
