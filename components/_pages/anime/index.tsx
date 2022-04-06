import { useEffect, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";

// types
import { Anime } from "@/types/anime";
import { People } from "@/types/people";

// components
import {
    AnimeSection1,
    AnimeSection2,
    AnimeSection3,
} from "@/components/sections/anime";

interface Props {
    details: Anime;
}

const Anime: NextPage<Props> = ({ details }) => {
    const [people, setPeople] = useState<Array<People>>([]);

    async function getAllPeopleData() {
        let request = details.people.map((person) => fetch(person));
        let response = await Promise.all(request);
        let json = await response.map((res) => res.json());
        let data = await Promise.all(json);

        if (details.people[0] === "https://ghibliapi.herokuapp.com/people/") {
            setPeople(data[0]);
        } else {
            setPeople(data);
        }
    }

    useEffect(() => {
        getAllPeopleData();
    }, []);

    return (
        <>
            <Head>
                <title>{details.title} - Animeroll</title>
            </Head>

            <main>
                <AnimeSection1 details={details} />
                <AnimeSection2 details={details} />
                <AnimeSection3 details={details} people={people} />
            </main>
        </>
    );
};

export default Anime;
