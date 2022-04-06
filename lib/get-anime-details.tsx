import { Anime } from "@/types/anime";

/**
 * Returns details related to a specific anime Id.
 * ---------
 * @param AnimeId : string
 * @returns Animedetails : object
 */
export const getAnimeDetails = async (id: string): Promise<Anime> => {
    const res = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`);
    const details: Anime = await res.json();

    return details;
};
