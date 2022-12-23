export default async function () {
    //make an api call to dnd api
    const response = fetch('https://www.dnd5eapi.co/api/races')
        .then(res => res.json())
        .catch(err => { throw err });
    //return the data
    return response;
    };


