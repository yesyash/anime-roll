import { Card } from "@/components/card";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Anime } from "types/anime";
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
            <h2 className="font-serif text-5xl">Featured Artwork</h2>
            <h4 className="text-lg">Pricing</h4>

            <div className="gap-2 columns-2 md:p-10 md:my-12 md:columns-4 md:gap-4">
                {animeList.map((anime) => (
                    <div
                        key={anime.id}
                        className="px-2 pb-4 mb-4 break-inside-avoid"
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
            </div>
        </>
    );
};

export default Home;
