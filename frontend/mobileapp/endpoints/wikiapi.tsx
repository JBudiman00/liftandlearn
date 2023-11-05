const getSearchResults = async (search: string) => {
    try {
        const response = await fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search + "&format=json&limit=100" );
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error("An error occured:", error);
    }
}

export default getSearchResults;