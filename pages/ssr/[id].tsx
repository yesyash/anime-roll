import { useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
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
import { getAnimeDetails } from "@/lib/get-anime-details";
import { ParsedUrlQuery } from "querystring";

interface Props {
    details: Anime;
    people: People[];
}

const Anime: NextPage<Props> = ({ details, people }) => {
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

interface Params extends ParsedUrlQuery {
    id: string;
}

export const getServerSideProps: GetServerSideProps<{}, Params> = async ({ params }) => {
    let details = await getAnimeDetails(params!!.id)
    let request = details.people.map((person) => fetch(person));
    let response = await Promise.all(request);
    let json = await response.map((res) => res.json());
    let data = await Promise.all(json);

    let propsData: Props = {
        details: details,
        people: []
    }

    if (details.people[0] === "https://ghibliapi.herokuapp.com/people/") {
        propsData.people = data[0]
    } else {
        propsData.people = data
    }

    return {
        props: propsData
    }
}