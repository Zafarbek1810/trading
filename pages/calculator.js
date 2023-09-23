import Calculator from '../src/Components/Pages/Calculator'
import Script from "next/script";

export default function Home() {
    return (

        <>
            <Calculator/>
            <Script src="/js/app.min.js" defer></Script>
        </>

    )
}
