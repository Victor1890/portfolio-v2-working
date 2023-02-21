import Head from "next/head";
import { SEO } from "../data";
import useWindowLocation from "../hooks/useWindowLocation";

interface Props {
    title: string
    meta?: { name: string, content: string, property?: string }[]
}

export default function Header ({ title, meta = [] }: Props) {

    const { currentURL } = useWindowLocation()
    
    return (
        <Head>
            <title>{title}</title>
            {[...SEO.meta, ...meta].map((item, index) => (
                <meta key={index} name={ item.property ? item.property : item.name } content={`${item.content}`}/>
            ))}
            <meta name="og:url" content={currentURL}/>
            <link rel="icon" href="/favicon.ico" />
            <link rel='canonical' href={currentURL}/>
        </Head>
    );
}