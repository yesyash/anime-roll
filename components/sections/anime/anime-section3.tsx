import React from "react";

// types
import { Anime } from "@/types/anime";
import { People } from "@/types/people";

// componenets
import { Container } from "@/components/container";

interface Props {
    details: Anime;
    people: Array<People>;
}

export const AnimeSection3: React.FC<Props> = ({ details, people }) => {
    return (
        <section>
            <Container className="pt-8 pb-16 lg:pt-16 lg:my-8">
                <h3 className="pb-6 my-6 font-serif text-3xl">People</h3>

                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                    {people.map((person) => (
                        <div key={person.id}>
                            <h4 className="mb-1.5 md:text-lg font-semibold leading-5 capitalize">
                                {person.name}
                            </h4>
                            <div className="flex items-center text-sm text-slate-500">
                                <span>{person.gender}</span>
                                <span className="block w-1 h-1 mx-1.5 rounded bg-slate-500"></span>
                                <span>
                                    {person.age.split("/")[0] === "Unspecified"
                                        ? "NA"
                                        : `${person.age} yrs`}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
