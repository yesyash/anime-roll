import React from "react";

// types
import { Anime } from "@/types/anime";

// componenets
import { Container } from "@/components/container";

interface Props {
    details: Anime;
}

export const AnimeSection2: React.FC<Props> = ({ details }) => {
    return (
        <section>
            <Container className="relative pt-16 md:grid md:grid-cols-12">
                <div className="col-start-1 col-end-4 pb-6">
                    <span className="block pb-1 text-sm font-semibold text-stone-700">
                        Romanised Title
                    </span>
                    <p className="text-sm text-stone-800">
                        {details.original_title_romanised}
                    </p>
                </div>

                <div className="col-start-1 col-end-4 pb-6">
                    <span className="block pb-1 text-sm font-semibold text-stone-700">
                        Release Date
                    </span>
                    <p className="text-sm text-stone-800">
                        {details.release_date}
                    </p>
                </div>

                <div className="col-start-1 col-end-4 pb-6">
                    <span className="block pb-1 text-sm font-semibold text-stone-700">
                        RT Score
                    </span>
                    <p className="text-sm text-stone-800">{details.rt_score}</p>
                </div>
            </Container>
        </section>
    );
};
