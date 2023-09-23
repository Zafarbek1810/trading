import HomePage from '../src/Components/Pages/HomePage'
import {useEffect, useState} from 'react';
import Loader from '../src/Components/Common/Loader';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
            setLoading2(true);
        }, 1500);
    }, []);

    return (
        <>
            {
                loading ? <Loader loading2={loading2}/> : <HomePage/>
            }
        </>
    )
}
