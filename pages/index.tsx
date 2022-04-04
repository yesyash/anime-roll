import { GetStaticProps } from "next";

// Components
import Home from "@/components/_pages/home";

// Library functions
import { getAnimeList } from "@/lib/get-anime-list";

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const animeList = await getAnimeList();
    return {
        props: {
            animeList,
        },
        revalidate: 600,
    };
};
