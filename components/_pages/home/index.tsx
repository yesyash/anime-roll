import { useEffect, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";

// types
import { Anime } from "types/anime";

// componenets
import { HomeSection1, HomeSection2 } from "@/components/sections/home";
import { Container } from "@/components/container";
interface Props {
    animeList: Array<Anime>;
}

const Home: NextPage<Props> = ({ animeList }) => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [showSsrPages, setShowSsrpages] = useState(true)

    const togglePageType = () => {
        setShowSsrpages(prev => !prev)
    }

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    return (
        <>
            <Head>
                <title>Animeroll</title>
            </Head>

            <main className="">
                <Container className="max-w-[1600px] mx-auto">
                    <HomeSection1 />

                    <div className="mb-16 fixed top-8 right-8 z-[100]">
                        <button onClick={togglePageType}
                            className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg">
                            Showing <span className="font-bold">{showSsrPages ? 'ssr' : 'isr'}</span> pages
                        </button>
                    </div>

                    <HomeSection2
                        showSsrPages={showSsrPages}
                        animeList={animeList}
                        windowWidth={windowWidth}
                    />
                </Container>
            </main>
        </>
    );
};

export default Home;
