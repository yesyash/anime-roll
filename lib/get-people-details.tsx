import { People } from "@/types/people";

export const getPersonDetails = async (id: string): Promise<People> => {
    let details = await fetch(`https://ghibliapi.herokuapp.com/people/${id}`);
    let res = details.json();

    return res;
};
