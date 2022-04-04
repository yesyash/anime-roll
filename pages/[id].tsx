import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

// Components
import Anime from "@/components/_pages/anime";

// Library functions
import { getAnimeDetails } from "@/lib/get-anime-details";
import { getAnimeList } from "@/lib/get-anime-list";

interface Params extends ParsedUrlQuery {
    id: string;
}

export default Anime;

export const getStaticProps: GetStaticProps<{}, Params> = async ({
    params,
}) => {
    let details = await getAnimeDetails(params!!.id);
    if (!details) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {
            details,
        },
        revalidate: 600,
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const animeList = await getAnimeList();

    const paths = animeList.map((anime) => ({
        params: { id: anime.id },
    }));

    return { paths, fallback: "blocking" };
};
