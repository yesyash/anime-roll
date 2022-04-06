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
                    <HomeSection2
                        animeList={animeList}
                        windowWidth={windowWidth}
                    />
                </Container>
            </main>
        </>
    );
};

export default Home;
