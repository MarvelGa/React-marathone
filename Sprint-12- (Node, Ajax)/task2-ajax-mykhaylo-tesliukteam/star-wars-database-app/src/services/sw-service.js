import axios from "axios"

export async function get({peopleId}) {
    console.log(peopleId)
    console.log(`https://swapi.dev/api/people/${peopleId}`)
    const url = `https://swapi.dev/api/people/${peopleId}`;
    return await axios.get(url)
        .then((res) => {
            return res.data;
        })
        .catch((ex) => {
            return (ex.message);
        })
}