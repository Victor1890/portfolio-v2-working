import Head from "next/head";
import { SEO } from "../data";

interface Props {
    title: string
    meta?: { name: string, content: string, property?: string }[]
}

export default function Header ({ title, meta = [] }: Props) {
    return (
        <Head>
            <title>{title}</title>
            {[...SEO.meta, ...meta].map((item, index) => (
                <meta key={index} name={ item.property ? item.property : item.name } content={`${item.content}`}/>
            ))}
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}