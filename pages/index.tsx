import { GetStaticPaths, GetStaticProps } from "next";
import Home from "@/components/_pages/home";
import { Anime } from "types/anime";

export default Home;

const getData = async (): Promise<Array<Anime>> => {
    const res = await fetch("https://ghibliapi.herokuapp.com/films");
    const animeList: Anime[] = await res.json();

    return animeList;
};

export const getStaticProps: GetStaticProps = async () => {
    const animeList = await getData();
    return {
        props: {
            animeList,
        },
        revalidate: 600,
    };
};

// export const getStaticPaths: GetStaticPaths = async () => {
//     const animeList = await getData();

//     const paths = animeList.map((anime) => ({
//         params: { id: anime.id },
//     }));

//     return { paths, fallback: "blocking" };
// };
