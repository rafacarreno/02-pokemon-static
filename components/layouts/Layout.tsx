import { FC } from "react"

import Head from "next/head"

import { Navbar } from "../ui";

interface ChildrenProps {
    children: React.ReactNode;
    title?: string;
}

export const Layout: FC<ChildrenProps> = ({ children, title }) => {

    const origin = (typeof window === 'undefined')? '' : window.location.origin;


    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Rafael Carreño" />
                <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
                <meta property="og:title" content={`Informacion sobre el pokemon ${title}`} />
                <meta property="og:description" content={`Esta es la pagina sobre el pokemon ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />

            </Head>

            <Navbar />

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}
