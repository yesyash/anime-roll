import { useEffect, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";

// types
import { Anime } from "types/anime";

// componenets
import { Card } from "@/components/card";
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

            <main className="mx-4 max-w-7xl md:mx-8 lg:mx-16 xl:mx-28 2xl:mx-auto">
                <section className="py-8 mb-10 text-center md:mb-16">
                    <h2 className="pb-2 font-serif text-5xl md:text-6xl">
                        Animeroll
                    </h2>
                    <h4 className="text-lg text-slate-800">
                        Discover quality anime
                    </h4>
                </section>

                <section className="gap-2 -mx-2 columns-2 md:columns-3 md:gap-8 lg:columns-4 lg:gap-10">
                    {animeList.map((anime) => (
                        <div
                            key={anime.id}
                            className="px-2 pb-4 mb-4 md:mb-8 lg:mb-10 break-inside-avoid"
                        >
                            <Card
                                windowWidth={windowWidth}
                                id={anime.id}
                                imgUrl={anime.image}
                                director={anime.director}
                                releaseDate={anime.release_date}
                                rtScore={anime.rt_score}
                                title={anime.title}
                                originalTitleRomanised={
                                    anime.original_title_romanised
                                }
                            />
                        </div>
                    ))}
                </section>
            </main>
        </>
    );
};

export default Home;
