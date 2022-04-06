// types
import { Anime } from "@/types/anime";

// components
import { Card } from "@/components/card";
import { Container } from "@/components/container";

interface Props {
    animeList: Array<Anime>;
    windowWidth: number;
}
export const HomeSection2: React.FC<Props> = ({ animeList, windowWidth }) => {
    return (
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
                        originalTitleRomanised={anime.original_title_romanised}
                    />
                </div>
            ))}
        </section>
    );
};
