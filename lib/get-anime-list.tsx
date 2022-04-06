import { Anime } from "@/types/anime";

/**
 * Returns a list with all animes.
 * -----------
 * @returns List of all anime : Array<object>
 */
export const getAnimeList = async (): Promise<Array<Anime>> => {
    const res = await fetch("https://ghibliapi.herokuapp.com/films");
    const animeList: Anime[] = await res.json();

    return animeList;
};
